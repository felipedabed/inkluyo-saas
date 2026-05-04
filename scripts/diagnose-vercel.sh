#!/bin/bash

##############################################################################
# Vercel Deployment Diagnostics Script
#
# This script helps diagnose issues with Vercel deployments by checking:
# - Environment variable configuration
# - Vercel project setup
# - Build configuration
# - Recent deployment logs
#
# Usage: ./scripts/diagnose-vercel.sh
##############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

PROJECT_NAME="inkluyo"

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         Vercel Deployment Diagnostics                          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check Vercel CLI
echo -e "${CYAN}[1] Vercel CLI Status${NC}"
if command -v vercel &> /dev/null; then
    echo -e "${GREEN}✓ Vercel CLI installed${NC}"
    vercel --version
else
    echo -e "${RED}✗ Vercel CLI not found${NC}"
    echo "  Install: npm install -g vercel"
fi
echo ""

# Check Vercel login
echo -e "${CYAN}[2] Vercel Authentication${NC}"
if vercel whoami > /dev/null 2>&1; then
    VERCEL_USER=$(vercel whoami 2>/dev/null)
    echo -e "${GREEN}✓ Logged in as: $VERCEL_USER${NC}"
else
    echo -e "${RED}✗ Not logged in to Vercel${NC}"
    echo "  Run: vercel login"
fi
echo ""

# Check project link
echo -e "${CYAN}[3] Vercel Project Configuration${NC}"
if [ -f ".vercel/project.json" ]; then
    echo -e "${GREEN}✓ Project linked to Vercel${NC}"
    if [ -f ".vercel/project.json" ]; then
        PROJECT_ID=$(grep -o '"projectId":"[^"]*' .vercel/project.json | cut -d'"' -f4)
        ORG_ID=$(grep -o '"orgId":"[^"]*' .vercel/project.json | cut -d'"' -f4)
        echo "  Project ID: $PROJECT_ID"
        echo "  Organization: $ORG_ID"
    fi
else
    echo -e "${YELLOW}⚠ Project not linked${NC}"
    echo "  Run: vercel link --project=$PROJECT_NAME"
fi
echo ""

# Check environment variables in Vercel
echo -e "${CYAN}[4] Environment Variables in Vercel${NC}"
echo "Checking variables in Vercel..."
if vercel env ls > /tmp/vercel-env.txt 2>&1; then
    VARS_COUNT=$(grep -c "." /tmp/vercel-env.txt || echo "0")
    echo -e "${GREEN}✓ Found environment variables:${NC}"

    # List key variables
    for var in "NEXT_PUBLIC_SUPABASE_URL" "NEXT_PUBLIC_SUPABASE_ANON_KEY" "STRIPE_SECRET_KEY" "NEXTAUTH_SECRET" "RESEND_API_KEY"; do
        if grep -q "$var" /tmp/vercel-env.txt; then
            echo "  ${GREEN}✓${NC} $var"
        else
            echo "  ${YELLOW}✗${NC} $var (missing)"
        fi
    done
else
    echo -e "${YELLOW}⚠ Could not list environment variables${NC}"
fi
echo ""

# Check local .env.local
echo -e "${CYAN}[5] Local Environment Configuration${NC}"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${PROJECT_ROOT}/apps/landing/.env.local"

if [ -f "$ENV_FILE" ]; then
    echo -e "${GREEN}✓ .env.local exists${NC}"
    REQUIRED_VARS=("NEXT_PUBLIC_SUPABASE_URL" "NEXT_PUBLIC_SUPABASE_ANON_KEY" "STRIPE_SECRET_KEY" "NEXTAUTH_SECRET" "RESEND_API_KEY")
    MISSING=0

    for var in "${REQUIRED_VARS[@]}"; do
        if grep -q "^${var}=" "$ENV_FILE"; then
            echo "  ${GREEN}✓${NC} $var set"
        else
            echo "  ${RED}✗${NC} $var missing"
            MISSING=$((MISSING + 1))
        fi
    done

    if [ $MISSING -eq 0 ]; then
        echo -e "${GREEN}✓ All required variables present${NC}"
    else
        echo -e "${RED}✗ $MISSING required variables missing${NC}"
    fi
else
    echo -e "${RED}✗ .env.local not found at $ENV_FILE${NC}"
    echo "  Copy from: .env.example"
fi
echo ""

# Check build configuration
echo -e "${CYAN}[6] Build Configuration${NC}"
if [ -f "${PROJECT_ROOT}/vercel.json" ]; then
    echo -e "${GREEN}✓ Root vercel.json found${NC}"
    if grep -q '"buildCommand"' "${PROJECT_ROOT}/vercel.json"; then
        BUILD_CMD=$(grep '"buildCommand"' "${PROJECT_ROOT}/vercel.json" | head -1 | cut -d'"' -f4)
        echo "  Build command: $BUILD_CMD"
    fi
fi

if [ -f "${PROJECT_ROOT}/apps/landing/vercel.json" ]; then
    echo -e "${GREEN}✓ Landing app vercel.json found${NC}"
    if grep -q '"buildCommand"' "${PROJECT_ROOT}/apps/landing/vercel.json"; then
        BUILD_CMD=$(grep '"buildCommand"' "${PROJECT_ROOT}/apps/landing/vercel.json" | head -1 | cut -d'"' -f4)
        echo "  Build command: $BUILD_CMD"
    fi
else
    echo -e "${YELLOW}⚠ Landing app vercel.json not found${NC}"
fi
echo ""

# Check widget
echo -e "${CYAN}[7] Widget Status${NC}"
if [ -f "${PROJECT_ROOT}/apps/landing/public/widget/widget.iife.js" ]; then
    FILE_SIZE=$(wc -c < "${PROJECT_ROOT}/apps/landing/public/widget/widget.iife.js")
    echo -e "${GREEN}✓ Widget embedded${NC} ($(numfmt --to=iec $FILE_SIZE 2>/dev/null || echo "$FILE_SIZE bytes"))"
else
    echo -e "${RED}✗ Widget not embedded${NC}"
    echo "  Run: npm run widget:embed"
fi
echo ""

# Check recent deployments
echo -e "${CYAN}[8] Recent Deployments${NC}"
echo "Fetching recent deployment status..."
if vercel list --json > /tmp/vercel-list.json 2>&1; then
    # Show last 3 deployments
    echo "Recent deployments:"
    # Note: This would require jq for proper JSON parsing, so we'll do a simple check
    if [ -s /tmp/vercel-list.json ]; then
        echo -e "${GREEN}✓ Can fetch deployment list${NC}"
        echo "  Use: vercel list"
        echo "  Or check: https://vercel.com/$PROJECT_NAME"
    fi
else
    echo -e "${YELLOW}⚠ Could not fetch deployments${NC}"
fi
echo ""

# Recommendations
echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                    Recommendations                             ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

ISSUES=0

# Check if env vars are synced
if [ -f "$ENV_FILE" ]; then
    LOCAL_SUPABASE=$(grep "NEXT_PUBLIC_SUPABASE_URL=" "$ENV_FILE" | head -1 | cut -d'=' -f2)
    if [ -n "$LOCAL_SUPABASE" ] && ! grep -q "$LOCAL_SUPABASE" /tmp/vercel-env.txt 2>/dev/null; then
        echo -e "${YELLOW}1. Environment variables may not be synced to Vercel${NC}"
        echo "   Run: ./scripts/setup-vercel-env.sh"
        ISSUES=$((ISSUES + 1))
    fi
fi

if [ ! -f "${PROJECT_ROOT}/apps/landing/public/widget/widget.iife.js" ]; then
    echo -e "${YELLOW}$((ISSUES + 1)). Widget is not embedded${NC}"
    echo "   Run: npm run widget:embed"
    ISSUES=$((ISSUES + 1))
fi

if [ $ISSUES -eq 0 ]; then
    echo -e "${GREEN}✓ Everything looks good!${NC}"
    echo ""
    echo "Ready to deploy:"
    echo "  ./deploy-to-vercel.sh preview"
    echo "  ./deploy-to-vercel.sh production"
else
    echo ""
    echo "After fixing the issues above, run:"
    echo "  ./deploy-to-vercel.sh [preview|production]"
fi
echo ""

# Show dashboard link
echo -e "${CYAN}Useful Links:${NC}"
echo "  Vercel Dashboard: https://vercel.com/$PROJECT_NAME"
echo "  Environment Variables: https://vercel.com/$PROJECT_NAME/settings/environment-variables"
echo "  Build & Deployment: https://vercel.com/$PROJECT_NAME/deployments"
echo ""
