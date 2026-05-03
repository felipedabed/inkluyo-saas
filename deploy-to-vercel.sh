#!/bin/bash

##############################################################################
# Vercel Deployment Script for Inkluyo
#
# This script automates the deployment process to Vercel:
# - Creates or updates Vercel project
# - Configures environment variables
# - Sets up domain configuration
# - Initiates build and deployment
#
# Prerequisites:
# - Vercel CLI installed (npm i -g vercel)
# - Logged in to Vercel (vercel login)
# - .env.local file with all required credentials
#
# Usage: ./deploy-to-vercel.sh [production|preview]
##############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${PROJECT_ROOT}/apps/landing/.env.local"
DEPLOYMENT_ENV="${1:-preview}"
PROJECT_NAME="inkluyo"
SPACESHIP_DOMAIN="inkluyo.spaceship.com"  # Update with actual Spaceship domain

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║          Inkluyo Vercel Deployment Script                      ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to get env value
get_env() {
    local key="$1"
    local file="$2"
    grep "^${key}=" "$file" 2>/dev/null | cut -d'=' -f2- || echo ""
}

# ============================================================================
# 1. PREREQUISITES CHECK
# ============================================================================
echo -e "${BLUE}[1/6] Checking Prerequisites...${NC}"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}✗ Vercel CLI not found${NC}"
    echo "Install with: npm install -g vercel"
    exit 1
fi
echo -e "${GREEN}✓ Vercel CLI installed${NC}"

# Check if .env.local exists
if [ ! -f "$ENV_FILE" ]; then
    echo -e "${RED}✗ .env.local not found at $ENV_FILE${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Environment file exists${NC}"

# Check if logged in to Vercel
if ! vercel whoami > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠ Not logged in to Vercel${NC}"
    echo "Run: vercel login"
    exit 1
fi
echo -e "${GREEN}✓ Logged in to Vercel${NC}"

# ============================================================================
# 2. LOAD ENVIRONMENT VARIABLES
# ============================================================================
echo ""
echo -e "${BLUE}[2/6] Loading Environment Variables...${NC}"
echo ""

SUPABASE_URL=$(get_env "NEXT_PUBLIC_SUPABASE_URL" "$ENV_FILE")
SUPABASE_ANON=$(get_env "NEXT_PUBLIC_SUPABASE_ANON_KEY" "$ENV_FILE")
SUPABASE_SERVICE=$(get_env "SUPABASE_SERVICE_ROLE_KEY" "$ENV_FILE")
STRIPE_SECRET=$(get_env "STRIPE_SECRET_KEY" "$ENV_FILE")
STRIPE_PUBLIC=$(get_env "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" "$ENV_FILE")
STRIPE_WEBHOOK=$(get_env "STRIPE_WEBHOOK_SECRET" "$ENV_FILE")
RESEND_KEY=$(get_env "RESEND_API_KEY" "$ENV_FILE")
NEXTAUTH_SECRET=$(get_env "NEXTAUTH_SECRET" "$ENV_FILE")
NEXTAUTH_URL=$(get_env "NEXTAUTH_URL" "$ENV_FILE")

# If NEXTAUTH_URL not set properly for deployment, use production domain
if [ -z "$NEXTAUTH_URL" ] || [ "$NEXTAUTH_URL" = "https://your-domain.com" ]; then
    if [ "$DEPLOYMENT_ENV" = "production" ]; then
        NEXTAUTH_URL="https://inkluyo.com"
        echo -e "${YELLOW}⚠ Using default production URL: $NEXTAUTH_URL${NC}"
    else
        NEXTAUTH_URL="https://${PROJECT_NAME}.vercel.app"
        echo -e "${YELLOW}⚠ Using default preview URL: $NEXTAUTH_URL${NC}"
    fi
fi

echo "Loaded environment variables:"
echo "  - Supabase URL: ${SUPABASE_URL:0:30}..."
echo "  - Stripe Secret: ${STRIPE_SECRET:0:20}..."
echo "  - Resend API Key: ${RESEND_KEY:0:15}..."
echo "  - NextAuth URL: $NEXTAUTH_URL"

# ============================================================================
# 3. CREATE/LINK VERCEL PROJECT
# ============================================================================
echo ""
echo -e "${BLUE}[3/6] Setting up Vercel Project...${NC}"
echo ""

# Check if project is already linked
if [ -f ".vercel/project.json" ]; then
    echo -e "${GREEN}✓ Project already linked to Vercel${NC}"
else
    echo "Linking project to Vercel..."
    cd "$PROJECT_ROOT"
    vercel link --project="$PROJECT_NAME" --yes
    echo -e "${GREEN}✓ Project linked successfully${NC}"
fi

# ============================================================================
# 4. CONFIGURE ENVIRONMENT VARIABLES IN VERCEL
# ============================================================================
echo ""
echo -e "${BLUE}[4/6] Configuring Environment Variables in Vercel...${NC}"
echo ""

# Set environment variables for the specified environment
ENV_FLAG=""
if [ "$DEPLOYMENT_ENV" = "production" ]; then
    ENV_FLAG="--prod"
    TARGET_ENV="production"
else
    ENV_FLAG=""
    TARGET_ENV="preview"
fi

echo "Setting environment variables for $TARGET_ENV environment..."

# Arrays of env vars to set
declare -a ENV_VARS=(
    "NEXT_PUBLIC_SUPABASE_URL=${SUPABASE_URL}"
    "NEXT_PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON}"
    "SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE}"
    "STRIPE_SECRET_KEY=${STRIPE_SECRET}"
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLIC}"
    "STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK}"
    "RESEND_API_KEY=${RESEND_KEY}"
    "NEXTAUTH_SECRET=${NEXTAUTH_SECRET}"
    "NEXTAUTH_URL=${NEXTAUTH_URL}"
)

# Set each variable
for var in "${ENV_VARS[@]}"; do
    key="${var%%=*}"
    value="${var#*=}"

    # Skip if value is empty
    if [ -z "$value" ]; then
        echo -e "${YELLOW}⚠ Skipping $key (empty value)${NC}"
        continue
    fi

    echo "Setting $key..."
    vercel env add "$key" $ENV_FLAG <<< "$value" > /dev/null 2>&1 || true
done

echo -e "${GREEN}✓ Environment variables configured${NC}"

# ============================================================================
# 5. CONFIGURE BUILD SETTINGS
# ============================================================================
echo ""
echo -e "${BLUE}[5/6] Verifying Build Configuration...${NC}"
echo ""

# Check if vercel.json exists
if [ -f "${PROJECT_ROOT}/vercel.json" ]; then
    echo -e "${GREEN}✓ Vercel configuration found${NC}"
else
    echo -e "${YELLOW}⚠ Creating default Vercel configuration...${NC}"
    cat > "${PROJECT_ROOT}/vercel.json" << 'EOF'
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "buildCommand": "npm run landing:build",
  "outputDirectory": "apps/landing/.next",
  "installCommand": "npm install --registry https://registry.npmjs.org/",
  "headers": [
    {
      "source": "/widget/widget.iife.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ]
}
EOF
    echo -e "${GREEN}✓ Created vercel.json${NC}"
fi

# ============================================================================
# 6. EMBED WIDGET (CRITICAL FOR BUILD)
# ============================================================================
echo ""
echo -e "${BLUE}[6/6] Building and Embedding Widget...${NC}"
echo ""

cd "$PROJECT_ROOT"
echo "Building widget and copying to public directory..."
npm run widget:embed
if [ ! -f "apps/landing/public/widget/widget.iife.js" ]; then
    echo -e "${RED}✗ Widget embedding failed - widget.iife.js not found${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Widget successfully embedded at apps/landing/public/widget/widget.iife.js${NC}"

# ============================================================================
# 7. DOMAIN CONFIGURATION
# ============================================================================
echo ""
echo -e "${BLUE}[7/7] Domain Configuration Info...${NC}"
echo ""

if [ "$DEPLOYMENT_ENV" = "production" ]; then
    echo -e "${YELLOW}Spaceship Domain Configuration Required:${NC}"
    echo ""
    echo "To use the Spaceship domain ($SPACESHIP_DOMAIN):"
    echo ""
    echo "1. Log in to your Spaceship account"
    echo "2. Navigate to your project's domain settings"
    echo "3. Configure DNS records to point to:"
    echo ""
    echo "   Type    Name                   Value"
    echo "   CNAME   @                      cname.vercel-dns.com"
    echo "   CNAME   www                    cname.vercel-dns.com"
    echo ""
    echo "4. After DNS is configured, run:"
    echo "   vercel domains add $SPACESHIP_DOMAIN"
    echo ""
    echo "5. Verify the domain in Vercel dashboard"
    echo ""
else
    echo "Preview deployment will be available at:"
    echo "  https://${PROJECT_NAME}.vercel.app"
fi

# ============================================================================
# 8. DEPLOYMENT
# ============================================================================
echo ""
echo -e "${BLUE}Ready for Deployment${NC}"
echo ""

if [ "$DEPLOYMENT_ENV" = "production" ]; then
    echo -e "${YELLOW}Deploying to PRODUCTION...${NC}"
    cd "$PROJECT_ROOT"
    vercel deploy --prod
else
    echo -e "${YELLOW}Deploying to PREVIEW...${NC}"
    cd "$PROJECT_ROOT"
    vercel deploy
fi

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                  Deployment Completed Successfully!             ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

if [ "$DEPLOYMENT_ENV" = "production" ]; then
    echo "Production deployment complete!"
    echo "Visit: https://$SPACESHIP_DOMAIN"
else
    echo "Preview deployment complete!"
    echo "Visit: https://${PROJECT_NAME}.vercel.app"
fi

echo ""
echo "Next steps:"
echo "1. Test all endpoints (see test-endpoints.sh)"
echo "2. Verify analytics dashboard"
echo "3. Test checkout flow"
echo "4. Verify authentication"
echo ""
