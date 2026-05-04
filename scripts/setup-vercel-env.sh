#!/bin/bash

##############################################################################
# Vercel Environment Variables Setup Script
#
# This script sets up environment variables in Vercel for all environments
# (development, preview, production). Run this independently if you need to
# re-sync environment variables without doing a full deployment.
#
# Usage: ./scripts/setup-vercel-env.sh
##############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${PROJECT_ROOT}/apps/landing/.env.local"
PROJECT_NAME="inkluyo"

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║          Vercel Environment Variables Setup                    ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to get env value
get_env() {
    local key="$1"
    local file="$2"
    grep "^${key}=" "$file" 2>/dev/null | cut -d'=' -f2- || echo ""
}

# Check prerequisites
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}✗ Vercel CLI not found${NC}"
    echo "Install with: npm install -g vercel"
    exit 1
fi

if [ ! -f "$ENV_FILE" ]; then
    echo -e "${RED}✗ .env.local not found at $ENV_FILE${NC}"
    exit 1
fi

if ! vercel whoami > /dev/null 2>&1; then
    echo -e "${RED}✗ Not logged in to Vercel${NC}"
    echo "Run: vercel login"
    exit 1
fi

echo -e "${GREEN}✓ Prerequisites met${NC}"
echo ""

# Load environment variables
echo -e "${BLUE}Loading environment variables from .env.local...${NC}"
SUPABASE_URL=$(get_env "NEXT_PUBLIC_SUPABASE_URL" "$ENV_FILE")
SUPABASE_ANON=$(get_env "NEXT_PUBLIC_SUPABASE_ANON_KEY" "$ENV_FILE")
SUPABASE_SERVICE=$(get_env "SUPABASE_SERVICE_ROLE_KEY" "$ENV_FILE")
STRIPE_SECRET=$(get_env "STRIPE_SECRET_KEY" "$ENV_FILE")
STRIPE_PUBLIC=$(get_env "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" "$ENV_FILE")
STRIPE_WEBHOOK=$(get_env "STRIPE_WEBHOOK_SECRET" "$ENV_FILE")
RESEND_KEY=$(get_env "RESEND_API_KEY" "$ENV_FILE")
NEXTAUTH_SECRET=$(get_env "NEXTAUTH_SECRET" "$ENV_FILE")
NEXTAUTH_URL=$(get_env "NEXTAUTH_URL" "$ENV_FILE")

echo "Loaded environment variables:"
echo "  - Supabase URL: ${SUPABASE_URL:0:30}..."
echo "  - Stripe Secret: ${STRIPE_SECRET:0:20}..."
echo "  - Resend API Key: ${RESEND_KEY:0:15}..."
echo "  - NextAuth URL: $NEXTAUTH_URL"
echo ""

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

# Function to set env var in all environments
set_env_var_all_environments() {
    local key="$1"
    local value="$2"

    if [ -z "$value" ]; then
        echo -e "${YELLOW}⚠ Skipping $key (empty value)${NC}"
        return
    fi

    echo -n "Setting $key in all environments... "

    # Set for development
    echo "$value" | vercel env add "$key" > /dev/null 2>&1 || true

    # Set for preview
    echo "$value" | vercel env add "$key" preview > /dev/null 2>&1 || true

    # Set for production
    echo "$value" | vercel env add "$key" production > /dev/null 2>&1 || true

    echo -e "${GREEN}✓${NC}"
}

echo -e "${BLUE}Setting environment variables in Vercel...${NC}"
echo ""

# Set each variable in all environments
for var in "${ENV_VARS[@]}"; do
    key="${var%%=*}"
    value="${var#*=}"
    set_env_var_all_environments "$key" "$value"
done

echo ""
echo "Waiting for Vercel to process variables..."
sleep 2

echo ""
echo -e "${GREEN}✓ Environment variables have been set${NC}"
echo ""
echo -e "${BLUE}Verification:${NC}"
echo "1. Check Vercel dashboard to confirm variables are set:"
echo "   https://vercel.com/${PROJECT_NAME}/settings/environment-variables"
echo ""
echo "2. Variables should be available in:"
echo "   - Development environment"
echo "   - Preview environment"
echo "   - Production environment"
echo ""
echo "3. To apply these variables to an existing deployment, run:"
echo "   vercel redeploy          (for preview)"
echo "   vercel redeploy --prod   (for production)"
echo ""
