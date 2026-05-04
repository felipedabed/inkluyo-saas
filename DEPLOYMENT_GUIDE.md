# Inkluyo Vercel Deployment Guide

This guide walks you through deploying Inkluyo to Vercel with a Spaceship domain using the automated scripts provided.

## Prerequisites

Before starting, ensure you have:

1. **Vercel CLI installed**
   ```bash
   npm install -g vercel
   ```

2. **Logged in to Vercel**
   ```bash
   vercel login
   ```

3. **All credentials in `.env.local`**
   - The file should already exist at `apps/landing/.env.local`
   - Verify it contains all required variables (see [Environment Variables](#environment-variables) section)

4. **Spaceship domain**
   - Domain registered with Spaceship
   - Access to DNS settings

## Quick Start (5 minutes)

### Step 1: Verify All Integrations Locally

```bash
./verify-integrations.sh
```

This script checks:
- ✓ Environment variables are set
- ✓ Supabase connectivity
- ✓ Stripe API keys are valid
- ✓ Resend API key is valid
- ✓ NextAuth configuration

**Expected output:** All checks should show ✓ PASS or ⚠ WARN (warnings can be resolved during deployment)

### Step 2: Test Endpoints Locally

Before deploying, test your endpoints locally:

```bash
# Make sure the dev server is running
npm run landing:dev

# In another terminal:
./test-endpoints.sh
```

This verifies:
- ✓ Analytics API (/api/analytics)
- ✓ Checkout API (/api/checkout)
- ✓ Send Snippet API (/api/send-snippet)
- ✓ Authentication flow (/api/auth)

### Step 3: Deploy to Preview

Preview deployments allow you to test on a live URL before going to production:

```bash
./deploy-to-vercel.sh preview
```

This will:
1. Link your project to Vercel (if not already linked)
2. Configure all environment variables
3. Set up build settings
4. Deploy to preview environment
5. Provide a preview URL: `https://inkluyo.vercel.app`

### Step 4: Test Preview Deployment

```bash
./test-endpoints.sh https://inkluyo.vercel.app
```

Verify:
- All endpoints respond correctly
- Analytics dashboard works
- Checkout flow initiates
- Emails are sent (check Resend dashboard)

### Step 5: Deploy to Production

Once preview testing is complete:

```bash
./deploy-to-vercel.sh production
```

This will:
1. Configure production environment variables
2. Deploy to production
3. Provide domain configuration instructions

### Step 6: Configure Spaceship Domain

After production deployment, configure your Spaceship domain:

#### Option A: Through Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `inkluyo` project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your Spaceship domain (e.g., `inkluyo.spaceship.com`)
6. Follow the DNS configuration instructions

#### Option B: Using Vercel CLI

```bash
vercel domains add inkluyo.spaceship.com
```

#### DNS Configuration

Configure these DNS records in your Spaceship account:

| Type  | Name | Value              |
|-------|------|-------------------|
| CNAME | @    | cname.vercel-dns.com |
| CNAME | www  | cname.vercel-dns.com |

Verify DNS propagation (can take 24-48 hours):
```bash
nslookup inkluyo.spaceship.com
```

### Step 7: Test Production Deployment

```bash
./test-endpoints.sh https://inkluyo.spaceship.com
```

Verify all endpoints work with your production domain.

## Environment Variables

Your `.env.local` file must contain:

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Stripe Configuration
```
STRIPE_SECRET_KEY=sk_test_... (or sk_live_... for production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (or pk_live_... for production)
STRIPE_WEBHOOK_SECRET=whsec_... (optional, add if using webhooks)
```

### Resend Configuration
```
RESEND_API_KEY=re_...
```

### NextAuth Configuration
```
NEXTAUTH_SECRET=your-secure-random-secret
NEXTAUTH_URL=https://your-domain.com
```

## Troubleshooting

### "Vercel CLI not found"
```bash
npm install -g vercel
```

### "Not logged in to Vercel"
```bash
vercel login
```

### "Cannot read environment variables"
```bash
# Ensure .env.local exists
ls -la apps/landing/.env.local

# Verify it contains all required variables
cat apps/landing/.env.local
```

### "Endpoint tests failing"

1. **Check if dev server is running**
   ```bash
   npm run landing:dev
   ```

2. **Verify environment variables**
   ```bash
   ./verify-integrations.sh
   ```

3. **Check server logs**
   ```bash
   # Look for error messages in the dev server output
   npm run landing:dev
   ```

### "Domain not resolving"

1. **Verify DNS records are set correctly**
   ```bash
   dig inkluyo.spaceship.com CNAME
   ```

2. **Check Vercel domain configuration**
   ```bash
   vercel domains list
   ```

3. **Wait for DNS propagation** (24-48 hours typical)

### "Stripe checkout not working"

1. Verify Stripe keys are correct
2. Check that the priceId matches a real Stripe price in your account
3. Ensure webhook secret is configured if using webhooks

### "Authentication not working"

1. Verify NEXTAUTH_SECRET is set
2. Check NEXTAUTH_URL matches your domain
3. Verify Supabase adapter credentials

### "Emails not being sent"

1. Verify RESEND_API_KEY is correct
2. Check Resend dashboard for failed deliveries
3. Verify sender email is configured in Resend

## Monitoring After Deployment

### Check Deployment Status
```bash
vercel list
```

### View Logs
```bash
vercel logs
```

### Monitor Errors
- Vercel Dashboard: https://vercel.com/dashboard
- Check application logs for API errors
- Monitor Supabase, Stripe, and Resend dashboards

## Rollback Procedure

If you need to rollback to a previous deployment:

```bash
# List deployments
vercel list

# Rollback to a previous version
vercel rollback <deployment-url>
```

## File Structure

The deployment tools are organized as follows:

```
inkluyo-main/
├── verify-integrations.sh    # Pre-deployment verification
├── deploy-to-vercel.sh       # Vercel deployment automation
├── test-endpoints.sh          # Endpoint testing
├── DEPLOYMENT_GUIDE.md        # This file
└── apps/landing/
    ├── .env.local            # Your credentials
    ├── .env.example          # Template
    └── vercel.json           # Vercel configuration
```

## Additional Resources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [NextAuth.js Docs](https://next-auth.js.org)
- [Supabase Docs](https://supabase.com/docs)
- [Stripe Integration](https://stripe.com/docs)
- [Resend Email](https://resend.com/docs)

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Review script output for specific error messages
3. Check individual service dashboards (Supabase, Stripe, Resend, Vercel)
4. Review application logs on Vercel

---

**Last updated:** 2026-05-03
**Inkluyo Version:** 1.0.0
