# Inkluyo Vercel Deployment - START HERE

Welcome! You now have a complete deployment toolkit for Inkluyo. This document will guide you to the right resources.

## What Was Created

**3 Executable Scripts:**
- `verify-integrations.sh` - Pre-deployment checks
- `deploy-to-vercel.sh` - Automated Vercel deployment
- `test-endpoints.sh` - API endpoint testing

**4 Documentation Files:**
- `DEPLOYMENT_QUICK_START.md` - Quick reference (5 min read)
- `DEPLOYMENT_GUIDE.md` - Complete walkthrough (10 min read)
- `DEPLOYMENT_SCRIPTS_README.md` - Technical details (15 min read)
- `SCRIPTS_CREATED.txt` - This toolkit overview

## Choose Your Path

### Path 1: Quick Deploy (Experienced Developers)

You already know what you're doing? Here's the fast track:

```bash
1. ./verify-integrations.sh
2. ./deploy-to-vercel.sh preview
3. ./test-endpoints.sh https://inkluyo.vercel.app
4. ./deploy-to-vercel.sh production
```

**Quick reference:** Open `DEPLOYMENT_QUICK_START.md`

---

### Path 2: Step-by-Step (First Time Deploying)

Never deployed to Vercel before? Follow this path:

**Step 1:** Read `DEPLOYMENT_QUICK_START.md` (5 minutes)
- Overview of the process
- Prerequisites checklist
- Quick command reference

**Step 2:** Read `DEPLOYMENT_GUIDE.md` (10 minutes)
- Detailed 7-step process
- Environment variable setup
- Domain configuration
- Troubleshooting guide

**Step 3:** Run the scripts in order
```bash
./verify-integrations.sh       # Check configuration
./deploy-to-vercel.sh preview  # Deploy to preview
./test-endpoints.sh            # Test endpoints
./deploy-to-vercel.sh production  # Deploy to production
```

**Step 4:** Configure your Spaceship domain
- Follow Step 6 in `DEPLOYMENT_GUIDE.md`

---

### Path 3: Technical Deep Dive (Developers & DevOps)

Want to understand how the scripts work or customize them?

**Read:** `DEPLOYMENT_SCRIPTS_README.md`

Contains:
- Detailed explanation of each script
- How scripts read from .env.local
- Integration dependency map
- Features and limitations
- How to customize

---

## Prerequisites Checklist

Before running any scripts, verify you have:

- [ ] **Vercel CLI installed**
  ```bash
  npm install -g vercel
  ```

- [ ] **Logged in to Vercel**
  ```bash
  vercel login
  ```

- [ ] **All credentials in `.env.local`**
  ```bash
  cat apps/landing/.env.local
  ```
  Should show 9 variables (Supabase, Stripe, Resend, NextAuth)

- [ ] **.env.local variables verified**
  ```bash
  ./verify-integrations.sh
  ```
  Should show "✓ Passed" for critical items

---

## The 3-Step Deployment Process

### Step 1: Verify (2 minutes)
```bash
./verify-integrations.sh
```
**Checks:**
- All environment variables are set
- Keys are in valid format
- External services are reachable

**Expected:** All ✓ PASS (or ⚠ WARN which is OK)

---

### Step 2: Test Locally (3 minutes)
```bash
# Terminal 1: Start dev server
npm run landing:dev

# Terminal 2: Test endpoints
./test-endpoints.sh

# Kill dev server when done
```

**Tests:**
- Analytics API
- Checkout API
- Send Snippet API
- Authentication flow

**Expected:** "All endpoint tests passed!"

---

### Step 3: Deploy (5 minutes)
```bash
# Preview deployment (optional but recommended)
./deploy-to-vercel.sh preview
./test-endpoints.sh https://inkluyo.vercel.app

# Production deployment
./deploy-to-vercel.sh production

# Configure domain (see DEPLOYMENT_GUIDE.md)
# Then test production
./test-endpoints.sh https://inkluyo.spaceship.com
```

**What happens:**
- Project linked to Vercel
- Environment variables configured
- Build and deployment initiated
- Deployment URL provided

---

## Understanding the Toolkit

### Environment Variables (9 total)

Your `.env.local` must contain:

| Service | Variables | Count |
|---------|-----------|-------|
| Supabase | URL, Anon Key, Service Role | 3 |
| Stripe | Secret, Public, Webhook Secret | 3 |
| Resend | API Key | 1 |
| NextAuth | Secret, URL | 2 |

All scripts read from `apps/landing/.env.local` - no hardcoding.

---

### Deployment Targets

| Environment | URL | When |
|-------------|-----|------|
| Local | `http://localhost:3000` | Testing locally |
| Preview | `https://inkluyo.vercel.app` | Test live deployment |
| Production | `https://inkluyo.spaceship.com` | Live website |

---

### API Endpoints Being Tested

Your Inkluyo has 4 main endpoints:

1. **Analytics** (`/api/analytics`)
   - Records feature usage
   - Returns analytics data

2. **Checkout** (`/api/checkout`)
   - Creates Stripe checkout sessions
   - Initiates payment flow

3. **Send Snippet** (`/api/send-snippet`)
   - Emails installation code
   - Uses Resend

4. **Authentication** (`/api/auth`)
   - Magic link login
   - NextAuth powered

---

## Troubleshooting

### Most Common Issues

| Problem | Solution |
|---------|----------|
| "Vercel CLI not found" | `npm install -g vercel` |
| "Not logged in" | `vercel login` |
| ".env.local not found" | Check `apps/landing/.env.local` exists |
| "Endpoint tests failing" | Run `./verify-integrations.sh` first |
| "Domain not resolving" | DNS takes 24-48 hours to propagate |

**Full troubleshooting guide:** See `DEPLOYMENT_GUIDE.md` → Troubleshooting section

---

## File Map

```
inkluyo-main/
├── DEPLOYMENT_START_HERE.md          ← You are here
├── DEPLOYMENT_QUICK_START.md         ← Quick reference
├── DEPLOYMENT_GUIDE.md               ← Detailed guide
├── DEPLOYMENT_SCRIPTS_README.md      ← Technical details
├── SCRIPTS_CREATED.txt               ← What was created
│
├── verify-integrations.sh            ← Run first
├── deploy-to-vercel.sh               ← Deployment
├── test-endpoints.sh                 ← Verify everything works
│
└── apps/landing/
    └── .env.local                    ← Your credentials
```

---

## Next Steps

### Right Now

1. **Check prerequisites:**
   ```bash
   vercel login  # Verify logged in
   ls -la apps/landing/.env.local  # Verify file exists
   ```

2. **Pick your documentation:**
   - Quick: `DEPLOYMENT_QUICK_START.md`
   - Complete: `DEPLOYMENT_GUIDE.md`
   - Technical: `DEPLOYMENT_SCRIPTS_README.md`

3. **Run verification:**
   ```bash
   ./verify-integrations.sh
   ```

### Then

- Follow your chosen path (Quick or Step-by-Step)
- Run scripts in order
- Test at each stage

### After Deployment

- Monitor Vercel dashboard: https://vercel.com/dashboard
- Check logs: `vercel logs`
- Monitor third-party services (Stripe, Resend, Supabase)

---

## Quick Command Reference

```bash
# Verification
./verify-integrations.sh

# Local Testing
npm run landing:dev &
./test-endpoints.sh
kill %1

# Preview Deployment
./deploy-to-vercel.sh preview
./test-endpoints.sh https://inkluyo.vercel.app

# Production Deployment
./deploy-to-vercel.sh production
vercel domains add inkluyo.spaceship.com
./test-endpoints.sh https://inkluyo.spaceship.com

# Troubleshooting
vercel whoami                    # Check login
cat apps/landing/.env.local      # Check credentials
vercel list                      # List deployments
vercel logs                      # View live logs
vercel domains list              # List configured domains
```

---

## Support Resources

**External Documentation:**
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs/deployment
- NextAuth: https://next-auth.js.org
- Supabase: https://supabase.com/docs
- Stripe: https://stripe.com/docs
- Resend: https://resend.com/docs

**Dashboards:**
- Vercel: https://vercel.com/dashboard
- Supabase: https://app.supabase.com
- Stripe: https://dashboard.stripe.com
- Resend: https://resend.com/emails

---

## You're All Set!

You have everything you need to deploy Inkluyo to Vercel with a Spaceship domain.

### The Simplest Path

```bash
# 1. Verify everything is configured
./verify-integrations.sh

# 2. Read the quick start
# DEPLOYMENT_QUICK_START.md

# 3. Deploy!
./deploy-to-vercel.sh preview
./deploy-to-vercel.sh production
```

---

**Ready to deploy?**

Start with: `./verify-integrations.sh`

Questions? Check the troubleshooting sections in the documentation.

Good luck! 🚀
