# Inkluyo Deployment - Quick Start Reference

**For complete details, see `DEPLOYMENT_GUIDE.md`**

## In 3 Commands

```bash
# 1. Verify all integrations
./verify-integrations.sh

# 2. Test endpoints locally
npm run landing:dev &
./test-endpoints.sh
kill %1

# 3. Deploy to preview, then production
./deploy-to-vercel.sh preview
./test-endpoints.sh https://inkluyo.vercel.app
./deploy-to-vercel.sh production
```

## Prerequisites Checklist

- [ ] Vercel CLI installed: `npm install -g vercel`
- [ ] Logged in to Vercel: `vercel login`
- [ ] `.env.local` exists with all credentials
- [ ] All credentials verified: `./verify-integrations.sh`

## Script Quick Reference

### `verify-integrations.sh`
Tests all services locally without deploying:
- Environment variables
- Supabase connectivity
- Stripe API keys
- Resend API key
- NextAuth configuration

```bash
./verify-integrations.sh
```

**Expected:** All ✓ PASS or ⚠ WARN

---

### `deploy-to-vercel.sh`
Deploys to Vercel with environment setup:

```bash
# Preview deployment
./deploy-to-vercel.sh preview

# Production deployment
./deploy-to-vercel.sh production
```

**What it does:**
1. Checks prerequisites (Vercel CLI, .env.local)
2. Links project to Vercel
3. Configures environment variables
4. Sets up build configuration
5. Deploys your app

**URLs:**
- Preview: `https://inkluyo.vercel.app`
- Production: Domain configured in Step 5

---

### `test-endpoints.sh`
Tests API endpoints after deployment:

```bash
# Test localhost (dev server)
./test-endpoints.sh

# Test deployed preview
./test-endpoints.sh https://inkluyo.vercel.app

# Test production
./test-endpoints.sh https://inkluyo.spaceship.com
```

**Tests:**
- Analytics API
- Checkout API
- Send Snippet API
- Authentication flow

---

## Deployment Checklist

### Before Deployment
- [ ] Run `./verify-integrations.sh` - all pass
- [ ] Run `./test-endpoints.sh` locally - all pass
- [ ] Test checkout flow manually
- [ ] Test authentication (magic link)

### Preview Deployment
- [ ] Run `./deploy-to-vercel.sh preview`
- [ ] Run `./test-endpoints.sh https://inkluyo.vercel.app`
- [ ] Verify analytics dashboard loads
- [ ] Test checkout flow
- [ ] Check Resend for sent emails

### Production Deployment
- [ ] Run `./deploy-to-vercel.sh production`
- [ ] Configure Spaceship domain DNS records
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Run `./test-endpoints.sh https://inkluyo.spaceship.com`
- [ ] Monitor Vercel logs for errors

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Vercel CLI not found" | `npm install -g vercel` |
| "Not logged in" | `vercel login` |
| ".env.local not found" | Verify file at `apps/landing/.env.local` |
| Endpoints failing | Check dev server: `npm run landing:dev` |
| Domain not resolving | DNS propagation takes 24-48 hours |
| Checkout not working | Verify Stripe priceId and keys |

---

## File Locations

```
inkluyo-main/
├── verify-integrations.sh     ← Pre-deployment checks
├── deploy-to-vercel.sh        ← Deployment automation
├── test-endpoints.sh          ← API endpoint testing
├── DEPLOYMENT_QUICK_START.md  ← This file
├── DEPLOYMENT_GUIDE.md        ← Full guide
└── apps/landing/
    └── .env.local             ← Your credentials
```

---

## Environment Variables Reference

All must be in `apps/landing/.env.local`:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Resend
RESEND_API_KEY=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

---

## Helpful Commands

```bash
# Verify all env vars are set
grep "=" apps/landing/.env.local | wc -l

# Start dev server
npm run landing:dev

# Check Vercel login status
vercel whoami

# List Vercel deployments
vercel list

# View Vercel logs
vercel logs

# List configured domains
vercel domains list
```

---

## Key Service URLs

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Console:** https://app.supabase.com
- **Stripe Dashboard:** https://dashboard.stripe.com
- **Resend Console:** https://resend.com/emails

---

**Need more help?** See `DEPLOYMENT_GUIDE.md` for detailed instructions.
