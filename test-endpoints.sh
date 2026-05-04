#!/bin/bash

##############################################################################
# Inkluyo Endpoint Testing Script
#
# This script tests all critical API endpoints after deployment:
# - /api/checkout (Stripe)
# - /api/analytics (Supabase)
# - /api/send-snippet (Resend)
# - /api/auth (NextAuth)
#
# Usage:
#   ./test-endpoints.sh                    # Test against localhost:3000
#   ./test-endpoints.sh https://example.com
#
##############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
BASE_URL="${1:-http://localhost:3000}"
PASSED=0
FAILED=0

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║           Inkluyo Endpoint Testing Script                      ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo "Testing against: ${CYAN}${BASE_URL}${NC}"
echo ""

# Function to test endpoint
test_endpoint() {
    local method="$1"
    local endpoint="$2"
    local data="$3"
    local expected_status="$4"
    local description="$5"

    local url="${BASE_URL}${endpoint}"
    local response_file="/tmp/inkluyo_test_response.json"

    echo -e "${YELLOW}Testing:${NC} $description"
    echo "  URL: $url"
    echo "  Method: $method"

    if [ -n "$data" ]; then
        echo "  Data: $(echo "$data" | jq -c . 2>/dev/null || echo "$data")"
    fi

    # Make the request
    local http_code
    local response
    if [ "$method" = "GET" ]; then
        http_code=$(curl -s -w "%{http_code}" -o "$response_file" "$url")
    else
        http_code=$(curl -s -X "$method" \
            -H "Content-Type: application/json" \
            -d "$data" \
            -w "%{http_code}" \
            -o "$response_file" \
            "$url")
    fi

    response=$(cat "$response_file" 2>/dev/null || echo "{}")

    # Check response
    if [ "$http_code" = "$expected_status" ]; then
        echo -e "  ${GREEN}✓ Status: $http_code (expected)${NC}"
        echo "  Response: $(echo "$response" | jq -c . 2>/dev/null || echo "$response")"
        echo ""
        ((PASSED++))
        return 0
    else
        echo -e "  ${RED}✗ Status: $http_code (expected $expected_status)${NC}"
        echo "  Response: $(echo "$response" | jq -c . 2>/dev/null || echo "$response")"
        echo ""
        ((FAILED++))
        return 1
    fi
}

# ============================================================================
# TEST 1: HEALTH CHECK
# ============================================================================
echo -e "${BLUE}[1/4] Health Checks${NC}"
echo ""

# Check if server is running
echo -e "${YELLOW}Testing:${NC} Server connectivity"
if curl -s -f "$BASE_URL" > /dev/null 2>&1; then
    echo -e "  ${GREEN}✓ Server is running${NC}"
    echo ""
    ((PASSED++))
else
    echo -e "  ${RED}✗ Cannot connect to server at $BASE_URL${NC}"
    echo "  Make sure the dev server is running: npm run landing:dev"
    echo ""
    exit 1
fi

# ============================================================================
# TEST 2: ANALYTICS ENDPOINT
# ============================================================================
echo -e "${BLUE}[2/4] Analytics Endpoint Tests${NC}"
echo ""

# Test POST /api/analytics (record activation)
test_endpoint "POST" "/api/analytics" \
    '{"siteId":"test-site-001","feature":"dyslexia","url":"https://example.com/"}' \
    "200" \
    "POST /api/analytics - Record activation"

# Test GET /api/analytics (retrieve data)
test_endpoint "GET" "/api/analytics?siteId=test-site-001" \
    "" \
    "200" \
    "GET /api/analytics - Retrieve analytics data"

# Test missing siteId
test_endpoint "POST" "/api/analytics" \
    '{"feature":"dyslexia"}' \
    "400" \
    "POST /api/analytics - Missing siteId (should fail)"

# ============================================================================
# TEST 3: CHECKOUT ENDPOINT
# ============================================================================
echo -e "${BLUE}[3/4] Checkout Endpoint Tests${NC}"
echo ""

# Test valid checkout request
test_endpoint "POST" "/api/checkout" \
    '{"priceId":"price_test_123","planName":"Pro","lang":"en"}' \
    "200" \
    "POST /api/checkout - Valid checkout request"

# Test missing priceId
test_endpoint "POST" "/api/checkout" \
    '{"planName":"Pro","lang":"en"}' \
    "400" \
    "POST /api/checkout - Missing priceId (should fail)"

# ============================================================================
# TEST 4: SEND-SNIPPET ENDPOINT
# ============================================================================
echo -e "${BLUE}[4/4] Send Snippet Endpoint Tests${NC}"
echo ""

# Test valid send-snippet request
test_endpoint "POST" "/api/send-snippet" \
    '{"email":"test@example.com","snippet":"<script src=\"https://cdn.example.com/widget.js\"></script>"}' \
    "200" \
    "POST /api/send-snippet - Send installation snippet"

# Test missing email
test_endpoint "POST" "/api/send-snippet" \
    '{"snippet":"<script>...</script>"}' \
    "400" \
    "POST /api/send-snippet - Missing email (should fail)"

# Test missing snippet
test_endpoint "POST" "/api/send-snippet" \
    '{"email":"test@example.com"}' \
    "400" \
    "POST /api/send-snippet - Missing snippet (should fail)"

# ============================================================================
# AUTHENTICATION FLOW TEST
# ============================================================================
echo -e "${BLUE}[5/5] Authentication Flow Tests${NC}"
echo ""

# Test sign-in page availability
test_endpoint "GET" "/auth/signin" \
    "" \
    "200" \
    "GET /auth/signin - Sign-in page"

# Test magic link flow
test_endpoint "POST" "/api/auth/callback/email?token=test&email=test@example.com" \
    "" \
    "404" \
    "POST /api/auth/callback/email - Magic link callback (expected 404 without valid token)"

# ============================================================================
# SUMMARY
# ============================================================================
echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                      TEST SUMMARY                              ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${GREEN}✓ Passed:${NC}  $PASSED"
echo -e "  ${RED}✗ Failed:${NC}  $FAILED"
echo ""

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Some tests failed. Check the output above for details.${NC}"
    exit 1
else
    echo -e "${GREEN}✓ All endpoint tests passed!${NC}"
    exit 0
fi
