# Inkluyo Deployment Checklist

## ✅ Code & Build Status

- [x] Build passes successfully
- [x] No TypeScript errors
- [x] All dependencies installed
- [x] Environment variables configured locally
- [x] Authentication system integrated (NextAuth + Supabase)
- [x] Stripe checkout configured
- [x] Resend email service configured
- [x] Analytics API endpoints working
- [x] Widget build & embedding configured
- [x] vercel.json properly configured

## 📋 Pre-Deployment Verification

### Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anonymous key
- [ ] `SUPABASE_SERVICE_ROLE_KEY` — Service role key
- [ ] `STRIPE_SECRET_KEY` — Use production key (sk_live_) for prod
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Publishable key
- [ ] `STRIPE_WEBHOOK_SECRET` — From Stripe dashboard
- [ ] `RESEND_API_KEY` — Resend API key
- [ ] `NEXTAUTH_SECRET` — Random secure value (openssl rand -base64 32)
- [ ] `NEXTAUTH_URL` — Your Spaceship domain (e.g., https://inkluyo.spaceship.com)

### Stripe Setup
- [ ] Create/verify Stripe account
- [ ] Add product with pricing in Stripe dashboard
- [ ] Copy production keys (sk_live_, pk_live_)
- [ ] Configure webhook endpoint: `{YOUR_DOMAIN}/api/webhook/stripe`
- [ ] Test checkout flow locally

### Resend Setup
- [ ] Create Resend account
- [ ] Get API key
- [ ] Configure sender email (e.g., login@yourdomain.com)
- [ ] Test email sending

### Supabase Setup
- [ ] Create Supabase project
- [ ] Copy credentials (URL, anon key, service role key)
- [ ] Run schema.sql in Supabase SQL Editor
  - Creates `activations` table for analytics
  - Creates `auth` tables (auto-created by Supabase)
- [ ] Verify tables are created correctly

### NextAuth Setup
- [ ] Generate secure NEXTAUTH_SECRET
  ```bash
  openssl rand -base64 32
  ```
- [ ] Set NEXTAUTH_URL to your production domain
- [ ] Configure OAuth provider if needed (optional)

### Spaceship Domain Setup
- [ ] Domain purchased and ownership verified
- [ ] DNS records accessible at registrar

## 🚀 Vercel Deployment Steps

### Step 1: GitHub Repository
- [ ] Push code to GitHub main branch
- [ ] Ensure commit history is clean

### Step 2: Vercel Project Creation
- [ ] Go to https://vercel.com/new
- [ ] Select GitHub repository
- [ ] Framework: "Other" (we use custom Next.js setup)
- [ ] Root Directory: `.` (default)
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `apps/landing/.next`
- [ ] Install Command: `npm install --registry https://registry.npmjs.org/`

### Step 3: Environment Variables (in Vercel)
- [ ] Add all required variables to Vercel project settings
- [ ] Set for Production, Preview, and Development environments
- [ ] Use production keys for Production environment
- [ ] Use test keys for Preview/Development

### Step 4: Custom Domain (Spaceship)
- [ ] In Vercel: Settings → Domains
- [ ] Add your Spaceship domain
- [ ] Vercel provides nameservers/CNAME record
- [ ] Update DNS at registrar:
  - [ ] Option A: Change nameservers to Vercel's
  - [ ] Option B: Add CNAME record to Vercel subdomain
- [ ] Wait for DNS propagation (can take up to 48 hours)
- [ ] Verify domain is active in Vercel (green checkmark)

### Step 5: Stripe Configuration
- [ ] Go to Stripe Dashboard → Webhooks
- [ ] Add endpoint: `https://YOUR_DOMAIN.spaceship.com/api/webhook/stripe`
- [ ] Select events: `checkout.session.completed`, `invoice.payment_succeeded`
- [ ] Copy signing secret to Vercel `STRIPE_WEBHOOK_SECRET`
- [ ] Test webhook with Stripe CLI (optional but recommended)

### Step 6: Deployment
- [ ] Deploy from Vercel Dashboard
  - [ ] Or push to main branch (auto-deploy)
- [ ] Wait for build to complete
- [ ] Check build logs for errors
- [ ] Verify deployment successful (green checkmark)

## 🧪 Post-Deployment Testing

### Core Functionality
- [ ] Landing page loads at `https://your-domain.spaceship.com`
- [ ] Pages are responsive on mobile/tablet/desktop
- [ ] Hero section displays correctly
- [ ] Navigation works (language switcher, etc.)

### Authentication
- [ ] Sign in page is accessible at `/auth/signin`
- [ ] Magic link login works
- [ ] Email is received for login
- [ ] User can access protected dashboard
- [ ] Session persists across page reloads
- [ ] Sign out works properly

### Pricing & Checkout
- [ ] Pricing page displays all plans
- [ ] "Subscribe" buttons are clickable
- [ ] Stripe checkout modal/page loads
- [ ] Can complete test payment
- [ ] Dashboard updates after successful payment

### Analytics
- [ ] Dashboard displays real-time metrics
- [ ] Recent activations list updates
- [ ] Feature breakdown chart displays correctly
- [ ] API endpoints respond with data

### Widget
- [ ] Widget IIFE script is cached (check headers)
- [ ] Cache-Control headers are set correctly
- [ ] CORS headers allow cross-origin requests

### Email
- [ ] Verification emails are sent/received
- [ ] Email sender is correct (from your domain if configured)
- [ ] Email styling is correct

## 🔐 Security Checklist (Production)

- [ ] Use HTTPS only (Vercel provides by default)
- [ ] NEXTAUTH_SECRET is strong and unique
- [ ] All environment variables use production keys
- [ ] Stripe keys are production keys (sk_live_, pk_live_)
- [ ] No secrets in git history (verify with `git log -p`)
- [ ] Database RLS (Row Level Security) enabled in Supabase
- [ ] API endpoints validate user authentication
- [ ] CORS is properly configured

## 📊 Monitoring & Maintenance

### Post-Launch
- [ ] Monitor Vercel deployment logs
- [ ] Check Stripe Dashboard for transactions
- [ ] Verify email delivery (Resend dashboard)
- [ ] Monitor Supabase database usage
- [ ] Set up error tracking (optional: Sentry, LogRocket, etc.)

### Ongoing
- [ ] Monitor analytics for traffic patterns
- [ ] Check email bounce rates
- [ ] Review Stripe disputes/chargebacks
- [ ] Keep dependencies updated
- [ ] Regular database backups (Supabase provides auto-backups)

## 🚨 Troubleshooting

### Build Fails on Vercel
- [ ] Check Vercel build logs for errors
- [ ] Verify all environment variables are set
- [ ] Ensure Node.js version compatibility
- [ ] Clear Vercel cache and redeploy

### Domain Not Resolving
- [ ] Verify DNS records are set correctly
- [ ] Check propagation with `nslookup` or online tools
- [ ] Wait up to 48 hours for full propagation
- [ ] Try from incognito/private window (clear cache)

### Authentication Not Working
- [ ] Verify `NEXTAUTH_URL` matches deployed domain
- [ ] Check Supabase credentials are correct
- [ ] Verify Resend API key works
- [ ] Check email sending in Resend dashboard
- [ ] Review NextAuth logs in Vercel

### Stripe Payments Not Working
- [ ] Verify webhook is configured correctly
- [ ] Check webhook secret matches in Vercel
- [ ] Review Stripe logs for failed requests
- [ ] Test with Stripe test keys first
- [ ] Ensure product/price exists in Stripe

### Analytics Not Updating
- [ ] Verify Supabase credentials
- [ ] Check `activations` table exists in Supabase
- [ ] Review Vercel function logs
- [ ] Test API endpoint with cURL:
  ```bash
  curl -X GET "https://your-domain.spaceship.com/api/analytics?siteId=test"
  ```

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Stripe Docs**: https://stripe.com/docs
- **NextAuth.js Docs**: https://next-auth.js.org
- **Resend Docs**: https://resend.com/docs

## ✨ Completion Status

- [ ] All checklists completed
- [ ] App deployed to Vercel
- [ ] Custom domain active
- [ ] All integrations verified
- [ ] Testing completed
- [ ] Ready for production users

---

**Last Updated**: May 3, 2026
**Status**: Ready for Deployment ✅
