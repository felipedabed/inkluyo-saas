#!/bin/bash

##############################################################################
# Inkluyo Integration Verification Script
#
# This script validates all critical integrations before deployment:
# - Environment variables configuration
# - Supabase connectivity
# - Stripe API key validity
# - Resend API key validity
# - NextAuth configuration
#
# Usage: ./verify-integrations.sh
##############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
PASSED=0
FAILED=0
WARNINGS=0

# Project paths
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${PROJECT_ROOT}/apps/landing/.env.local"

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║          Inkluyo Integration Verification Script               ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to print results
print_check() {
    local name="$1"
    local status="$2"
    local details="$3"

    if [ "$status" = "PASS" ]; then
        echo -e "${GREEN}✓ PASS${NC}: $name"
        ((PASSED++))
    elif [ "$status" = "WARN" ]; then
        echo -e "${YELLOW}⚠ WARN${NC}: $name"
        ((WARNINGS++))
    else
        echo -e "${RED}✗ FAIL${NC}: $name"
        ((FAILED++))
    fi

    if [ -n "$details" ]; then
        echo "       $details"
    fi
}

# ============================================================================
# 1. ENVIRONMENT FILE CHECKS
# ============================================================================
echo -e "${BLUE}[1/5] Checking Environment Files...${NC}"
echo ""

if [ -f "$ENV_FILE" ]; then
    print_check "Environment file exists" "PASS" "$ENV_FILE"
else
    print_check "Environment file exists" "FAIL" "Missing: $ENV_FILE"
    echo ""
    echo -e "${RED}Cannot proceed without .env.local file${NC}"
    exit 1
fi

# Function to get env value
get_env() {
    local key="$1"
    local file="$2"
    grep "^${key}=" "$file" 2>/dev/null | cut -d'=' -f2- || echo ""
}

# ============================================================================
# 2. SUPABASE CHECKS
# ============================================================================
echo -e "${BLUE}[2/5] Checking Supabase Configuration...${NC}"
echo ""

SUPABASE_URL=$(get_env "NEXT_PUBLIC_SUPABASE_URL" "$ENV_FILE")
SUPABASE_ANON=$(get_env "NEXT_PUBLIC_SUPABASE_ANON_KEY" "$ENV_FILE")
SUPABASE_SERVICE=$(get_env "SUPABASE_SERVICE_ROLE_KEY" "$ENV_FILE")

if [ -z "$SUPABASE_URL" ] || [ "$SUPABASE_URL" = "https://your-project.supabase.co" ]; then
    print_check "Supabase URL configured" "FAIL"
else
    print_check "Supabase URL configured" "PASS" "${SUPABASE_URL:0:30}..."
fi

if [ -z "$SUPABASE_ANON" ]; then
    print_check "Supabase Anon Key configured" "FAIL"
else
    # Verify JWT format (should have 3 parts separated by dots)
    if [[ "$SUPABASE_ANON" == *.*.* ]]; then
        print_check "Supabase Anon Key format valid" "PASS" "JWT structure confirmed"
    else
        print_check "Supabase Anon Key format valid" "WARN" "Key may not be valid JWT"
    fi
fi

if [ -z "$SUPABASE_SERVICE" ]; then
    print_check "Supabase Service Role Key configured" "FAIL"
else
    if [[ "$SUPABASE_SERVICE" == *.*.* ]]; then
        print_check "Supabase Service Role Key format valid" "PASS" "JWT structure confirmed"
    else
        print_check "Supabase Service Role Key format valid" "WARN" "Key may not be valid JWT"
    fi
fi

# Test Supabase connectivity
if [ ! -z "$SUPABASE_URL" ] && [ "$SUPABASE_URL" != "https://your-project.supabase.co" ]; then
    echo ""
    echo "Testing Supabase connectivity..."
    if curl -s -f -o /dev/null -w "%{http_code}" "$SUPABASE_URL" > /dev/null 2>&1; then
        print_check "Supabase endpoint reachable" "PASS"
    else
        print_check "Supabase endpoint reachable" "WARN" "Could not reach endpoint (may be DNS/network issue)"
    fi
fi

# ============================================================================
# 3. STRIPE CHECKS
# ============================================================================
echo ""
echo -e "${BLUE}[3/5] Checking Stripe Configuration...${NC}"
echo ""

STRIPE_SECRET=$(get_env "STRIPE_SECRET_KEY" "$ENV_FILE")
STRIPE_PUBLIC=$(get_env "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" "$ENV_FILE")
STRIPE_WEBHOOK=$(get_env "STRIPE_WEBHOOK_SECRET" "$ENV_FILE")

if [ -z "$STRIPE_SECRET" ] || [ "$STRIPE_SECRET" = "sk_test_your_secret_key" ]; then
    print_check "Stripe Secret Key configured" "FAIL"
else
    # Stripe secret keys start with sk_test_ or sk_live_
    if [[ "$STRIPE_SECRET" =~ ^sk_(test|live)_ ]]; then
        print_check "Stripe Secret Key format valid" "PASS" "${STRIPE_SECRET:0:20}..."
    else
        print_check "Stripe Secret Key format valid" "FAIL" "Invalid format: should start with sk_test_ or sk_live_"
    fi
fi

if [ -z "$STRIPE_PUBLIC" ] || [ "$STRIPE_PUBLIC" = "pk_test_your_publishable_key" ]; then
    print_check "Stripe Publishable Key configured" "FAIL"
else
    # Stripe public keys start with pk_test_ or pk_live_
    if [[ "$STRIPE_PUBLIC" =~ ^pk_(test|live)_ ]]; then
        print_check "Stripe Publishable Key format valid" "PASS" "${STRIPE_PUBLIC:0:20}..."
    else
        print_check "Stripe Publishable Key format valid" "FAIL" "Invalid format: should start with pk_test_ or pk_live_"
    fi
fi

if [ -z "$STRIPE_WEBHOOK" ] || [ "$STRIPE_WEBHOOK" = "whsec_placeholder" ]; then
    print_check "Stripe Webhook Secret configured" "WARN" "Required only if using webhooks. Can be added later."
else
    # Stripe webhook secrets start with whsec_
    if [[ "$STRIPE_WEBHOOK" =~ ^whsec_ ]]; then
        print_check "Stripe Webhook Secret format valid" "PASS" "${STRIPE_WEBHOOK:0:15}..."
    else
        print_check "Stripe Webhook Secret format valid" "FAIL" "Invalid format: should start with whsec_"
    fi
fi

# ============================================================================
# 4. RESEND CHECKS
# ============================================================================
echo ""
echo -e "${BLUE}[4/5] Checking Resend Configuration...${NC}"
echo ""

RESEND_KEY=$(get_env "RESEND_API_KEY" "$ENV_FILE")

if [ -z "$RESEND_KEY" ] || [ "$RESEND_KEY" = "re_your_api_key" ]; then
    print_check "Resend API Key configured" "FAIL"
else
    # Resend keys start with re_
    if [[ "$RESEND_KEY" =~ ^re_ ]]; then
        print_check "Resend API Key format valid" "PASS" "${RESEND_KEY:0:15}..."
    else
        print_check "Resend API Key format valid" "FAIL" "Invalid format: should start with re_"
    fi
fi

# ============================================================================
# 5. NEXTAUTH CHECKS
# ============================================================================
echo ""
echo -e "${BLUE}[5/5] Checking NextAuth Configuration...${NC}"
echo ""

NEXTAUTH_SECRET=$(get_env "NEXTAUTH_SECRET" "$ENV_FILE")
NEXTAUTH_URL=$(get_env "NEXTAUTH_URL" "$ENV_FILE")

if [ -z "$NEXTAUTH_SECRET" ] || [ "$NEXTAUTH_SECRET" = "generate-a-strong-random-secret" ]; then
    print_check "NextAuth Secret configured" "FAIL"
else
    if [ ${#NEXTAUTH_SECRET} -ge 20 ]; then
        print_check "NextAuth Secret length valid" "PASS" "Length: ${#NEXTAUTH_SECRET} characters"
    else
        print_check "NextAuth Secret length valid" "WARN" "Length: ${#NEXTAUTH_SECRET} characters (recommend 32+)"
    fi
fi

if [ -z "$NEXTAUTH_URL" ] || [ "$NEXTAUTH_URL" = "https://your-domain.com" ]; then
    print_check "NextAuth URL configured" "WARN" "Will need to be set for production deployment"
else
    print_check "NextAuth URL configured" "PASS" "$NEXTAUTH_URL"
fi

# ============================================================================
# SUMMARY
# ============================================================================
echo ""
echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                      VERIFICATION SUMMARY                      ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${GREEN}✓ Passed:${NC}  $PASSED"
echo -e "  ${YELLOW}⚠ Warnings:${NC} $WARNINGS"
echo -e "  ${RED}✗ Failed:${NC}  $FAILED"
echo ""

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Deployment blocked: $FAILED critical issues must be resolved.${NC}"
    echo ""
    exit 1
elif [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}Deployment ready but $WARNINGS warnings detected.${NC}"
    echo "Review and address them before going to production."
    echo ""
    exit 0
else
    echo -e "${GREEN}✓ All integrations verified successfully!${NC}"
    echo "Ready for deployment to Vercel."
    echo ""
    exit 0
fi
