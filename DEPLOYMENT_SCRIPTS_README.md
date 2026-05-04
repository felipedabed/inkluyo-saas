# Inkluyo Deployment Scripts

This directory contains automated scripts to verify, test, and deploy Inkluyo to Vercel with minimal manual steps.

## Files Overview

### Scripts (Executable)

1. **`verify-integrations.sh`** (9.2 KB)
   - Pre-deployment verification tool
   - Tests all integrations locally
   - No network calls, no side effects
   - **Run this first before deployment**

2. **`deploy-to-vercel.sh`** (9.8 KB)
   - Automated Vercel deployment
   - Supports preview and production deployments
   - Configures environment variables in Vercel
   - Sets up domain configuration
   - **Run after verification passes**

3. **`test-endpoints.sh`** (7.1 KB)
   - Endpoint testing utility
   - Tests all API endpoints
   - Works locally, on preview, and production deployments
   - Run before and after deployment

### Documentation

1. **`DEPLOYMENT_QUICK_START.md`** (Quick reference)
   - 3-command deployment process
   - Troubleshooting table
   - Command reference

2. **`DEPLOYMENT_GUIDE.md`** (Full guide - 6.8 KB)
   - Step-by-step deployment walkthrough
   - Environment variable details
   - DNS configuration instructions
   - Troubleshooting with solutions
   - Monitoring and rollback procedures

3. **`DEPLOYMENT_SCRIPTS_README.md`** (This file)
   - Scripts overview
   - Detailed usage instructions
   - Features and limitations

## Quick Start

```bash
# Step 1: Verify integrations
./verify-integrations.sh

# Step 2: Test endpoints locally (in separate terminal)
npm run landing:dev &
./test-endpoints.sh
kill %1

# Step 3: Deploy to preview
./deploy-to-vercel.sh preview

# Step 4: Test preview deployment
./test-endpoints.sh https://inkluyo.vercel.app

# Step 5: Deploy to production
./deploy-to-vercel.sh production

# Step 6: Configure domain and test production
# (Follow domain setup in DEPLOYMENT_GUIDE.md)
./test-endpoints.sh https://inkluyo.spaceship.com
```

## Detailed Script Usage

### `verify-integrations.sh`

Verifies all integrations are properly configured before deployment.

**Usage:**
```bash
./verify-integrations.sh
```

**What it checks:**
- ✓ Environment file exists
- ✓ Supabase URL and keys configured
- ✓ Stripe API keys configured and valid format
- ✓ Resend API key configured and valid format
- ✓ NextAuth secret and URL configured
- ✓ Supabase endpoint reachable

**Exit codes:**
- `0` - All checks passed
- `1` - Critical failures detected (blocks deployment)

**Output:**
```
✓ PASS: Check description
⚠ WARN: Non-critical issue
✗ FAIL: Critical issue

SUMMARY:
  ✓ Passed: 9
  ⚠ Warnings: 2
  ✗ Failed: 0
```

**When to run:**
- Before every deployment
- After updating environment variables
- When troubleshooting integration issues

---

### `deploy-to-vercel.sh`

Automates deployment to Vercel with full environment setup.

**Usage:**
```bash
# Preview deployment (default)
./deploy-to-vercel.sh preview

# Production deployment
./deploy-to-vercel.sh production
```

**Prerequisites:**
- Vercel CLI installed: `npm install -g vercel`
- Logged in to Vercel: `vercel login`
- `.env.local` file exists with all credentials
- `verify-integrations.sh` passes

**What it does:**
1. Checks prerequisites (Vercel CLI, login status, .env.local)
2. Loads environment variables from `.env.local`
3. Links project to Vercel (creates if needed)
4. Configures environment variables in Vercel
5. Sets up build configuration
6. Initiates deployment

**Environment variables configured:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (auto-configured if not set)

**Exit codes:**
- `0` - Deployment initiated successfully
- `1` - Prerequisites not met

**Output:**
- Vercel deployment URL
- Domain configuration instructions (for production)
- Next steps

**Deployment URLs:**
- **Preview:** `https://inkluyo.vercel.app`
- **Production:** Your Spaceship domain (configured after DNS setup)

**Notes:**
- Script reads all env vars from `.env.local`
- Only sets env vars in Vercel if value is non-empty
- For production, script provides domain configuration instructions

---

### `test-endpoints.sh`

Tests all API endpoints and authentication flow.

**Usage:**
```bash
# Test localhost (default)
./test-endpoints.sh

# Test specific URL
./test-endpoints.sh https://example.com
```

**What it tests:**
1. **Health Check** - Server connectivity
2. **Analytics Endpoints**
   - POST /api/analytics - Record activation
   - GET /api/analytics - Retrieve data
   - Missing parameter handling

3. **Checkout Endpoints**
   - POST /api/checkout - Valid request
   - Missing priceId handling

4. **Send Snippet Endpoints**
   - POST /api/send-snippet - Send email
   - Missing email handling
   - Missing snippet handling

5. **Authentication**
   - GET /auth/signin - Sign-in page
   - POST /api/auth/callback/email - Magic link flow

**Exit codes:**
- `0` - All tests passed
- `1` - Some tests failed

**Output:**
```
Testing: Test description
  URL: https://example.com/api/endpoint
  Method: POST
  Data: {...}
  ✓ Status: 200 (expected)
  Response: {...}

TEST SUMMARY:
  ✓ Passed: 10
  ✗ Failed: 0
```

**When to run:**
- Before and after deployment
- When testing endpoint changes
- To verify server health

**Notes:**
- Requires server to be running (dev or deployed)
- Makes real HTTP requests (may trigger side effects)
- Uses `/tmp` for temporary response storage
- Runs without user interaction

---

## Environment Variables

The `.env.local` file must contain all required variables. Scripts read from here and configure Vercel accordingly.

**Required Variables:**
```bash
# Supabase (3 variables)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe (3 variables)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Resend (1 variable)
RESEND_API_KEY=

# NextAuth (2 variables)
NEXTAUTH_SECRET=
NEXTAUTH_URL=

Total: 9 variables
```

See `DEPLOYMENT_GUIDE.md` for detailed environment variable documentation.

---

## Troubleshooting

### Common Issues

**"Vercel CLI not found"**
```bash
npm install -g vercel
```

**"Not logged in to Vercel"**
```bash
vercel login
```

**"Cannot connect to server at http://localhost:3000"**
- Make sure dev server is running: `npm run landing:dev`
- Check if port 3000 is available

**"Script permission denied"**
```bash
chmod +x verify-integrations.sh deploy-to-vercel.sh test-endpoints.sh
```

**"Endpoint tests failing"**
1. Run `./verify-integrations.sh` to check configuration
2. Check dev server logs for errors
3. Verify environment variables are set correctly

**"Environment variables not being set in Vercel"**
1. Verify `.env.local` has correct values
2. Check Vercel dashboard: Settings → Environment Variables
3. Redeploy after adding variables

**"Domain not resolving"**
1. Verify DNS records are configured in Spaceship
2. Wait for DNS propagation (up to 48 hours)
3. Check with: `nslookup inkluyo.spaceship.com`

---

## Features & Limitations

### Features
✓ Non-destructive verification (no side effects)
✓ Automatic error detection and reporting
✓ Color-coded output for easy reading
✓ Reads credentials from `.env.local` (no hardcoding)
✓ Works offline for verification
✓ Comprehensive error messages
✓ Support for preview and production deployments
✓ Domain configuration guidance

### Limitations
- Requires Vercel CLI to be installed
- Cannot auto-login to Vercel (manual step required)
- Endpoint tests require running server
- DNS propagation not instant (24-48 hours typical)
- Cannot test webhook callbacks
- Does not verify database schema

---

## File Locations

```
inkluyo-main/
├── verify-integrations.sh         ← Verification script
├── deploy-to-vercel.sh            ← Deployment script
├── test-endpoints.sh              ← Testing script
├── DEPLOYMENT_QUICK_START.md      ← Quick reference
├── DEPLOYMENT_GUIDE.md            ← Detailed guide
├── DEPLOYMENT_SCRIPTS_README.md   ← This file
└── apps/landing/
    ├── .env.local                 ← Your credentials
    ├── .env.example               ← Template
    ├── vercel.json                ← Vercel config
    └── src/app/api/
        ├── checkout/route.ts
        ├── analytics/route.ts
        ├── send-snippet/route.ts
        └── auth/[...nextauth]/route.ts
```

---

## Integration Dependency Map

```
verify-integrations.sh
├─ Checks .env.local
├─ Verifies Supabase credentials
├─ Verifies Stripe credentials
├─ Verifies Resend credentials
└─ Verifies NextAuth configuration

deploy-to-vercel.sh
├─ Requires: verify-integrations.sh passed
├─ Requires: Vercel CLI logged in
├─ Reads: .env.local
├─ Creates: .vercel/project.json
└─ Sets: Environment variables in Vercel

test-endpoints.sh
├─ Requires: Running server (dev or deployed)
├─ Calls: All API endpoints
├─ Requires: Proper .env.local configuration
└─ Generates: Test report
```

---

## Support & Next Steps

1. **Read:** `DEPLOYMENT_QUICK_START.md` for quick reference
2. **Follow:** `DEPLOYMENT_GUIDE.md` for detailed steps
3. **Run:** Scripts in order: verify → test locally → deploy → test deployed
4. **Monitor:** Check Vercel dashboard for logs and errors

For detailed help on each step, refer to the appropriate section in `DEPLOYMENT_GUIDE.md`.

---

**Created:** 2026-05-03
**Inkluyo Version:** 1.0.0
**Compatible with:** Next.js 15, Node 18+
