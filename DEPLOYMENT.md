# Inkluyo Deployment Guide

## Overview

This guide covers deploying Inkluyo to Vercel with your custom Spaceship domain.

## Prerequisites

- Vercel account (https://vercel.com)
- Git repository pushed to GitHub
- Spaceship domain purchased and ready
- All environment variables configured

## Environment Variables

All environment variables are stored in `apps/landing/.env.local`. For Vercel deployment, you need to add them to your Vercel project settings.

### Required Variables

```
NEXT_PUBLIC_SUPABASE_URL         # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY    # Supabase anonymous key
SUPABASE_SERVICE_ROLE_KEY        # Supabase service role key
STRIPE_SECRET_KEY                # Stripe secret key (sk_test_ or sk_live_)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY # Stripe publishable key
STRIPE_WEBHOOK_SECRET            # Stripe webhook signing secret
RESEND_API_KEY                   # Resend email service API key
NEXTAUTH_SECRET                  # NextAuth secret (generate: openssl rand -base64 32)
NEXTAUTH_URL                     # Your domain URL (e.g., https://yourspaceship.domain)
```

## Deployment Steps

### 1. Connect to Vercel

```bash
# Install Vercel CLI (optional but recommended)
npm install -g vercel

# Or use the Vercel web dashboard at https://vercel.com/new
```

### 2. Create Vercel Project

**Via Web Dashboard:**
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Select "Other" for framework (we use Next.js with a custom build script)
4. Set Build Command: `npm run build`
5. Set Output Directory: `apps/landing/.next`
6. Set Install Command: `npm install --registry https://registry.npmjs.org/`

**Via CLI:**
```bash
vercel
```

### 3. Configure Environment Variables in Vercel

In your Vercel project dashboard:

1. Go to Settings → Environment Variables
2. Add all variables from `.env.local`:
   - `NEXT_PUBLIC_*` variables are available to the browser
   - Other variables are server-only
3. Make sure to add them for all environments (Production, Preview, Development)

### 4. Configure Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your Spaceship domain
3. Follow Vercel's DNS configuration instructions
4. Update DNS records at your domain registrar with Vercel's nameservers

### 5. Update NEXTAUTH_URL

Once your domain is configured:

1. Update `NEXTAUTH_URL` in Vercel environment variables to your actual domain
2. Example: `NEXTAUTH_URL=https://inkluyo.spaceship.com`

### 6. Configure Stripe Webhooks

1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://your-domain.com/api/webhook/stripe`
3. Copy the signing secret to `STRIPE_WEBHOOK_SECRET` in Vercel

### 7. Deploy

```bash
# Automatic deployment on git push to main
# Or manually via Vercel dashboard or CLI
vercel deploy --prod
```

## Post-Deployment Verification

- [ ] Landing page loads at your domain
- [ ] Authentication works (Magic Link login)
- [ ] Dashboard is protected (requires login)
- [ ] Pricing page loads correctly
- [ ] Stripe checkout works
- [ ] Email sending works (Resend)
- [ ] Real-time analytics dashboard functions

## Production Considerations

### Security Checklist

- [ ] Use production Stripe keys (sk_live_, pk_live_)
- [ ] Update `NEXTAUTH_SECRET` to a secure random value
- [ ] Configure Stripe webhook signing secret
- [ ] Enable HTTPS (Vercel does this by default)
- [ ] Set secure cookie flags in NextAuth config if needed

### Performance Optimization

- [ ] Enable caching in Vercel headers (configured in vercel.json)
- [ ] Widget IIFE file is cached for 1 year (31536000s)
- [ ] Monitor Vercel Analytics for performance metrics

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Ensure all environment variables are set
- Verify TypeScript types: `npm run lint`

### Authentication Issues
- Verify `NEXTAUTH_URL` matches your domain exactly
- Check Supabase credentials are correct
- Ensure Magic Link email sending works (Resend)

### Stripe Integration Issues
- Verify webhook secret in Stripe dashboard
- Check webhook endpoint is publicly accessible
- Review Stripe Dashboard → Logs for webhook failures

### Domain Not Working
- Check DNS propagation (can take up to 48 hours)
- Verify domain is added correctly in Vercel
- Ensure nameservers are updated at registrar

## Local Development

```bash
# Copy environment variables
cp apps/landing/.env.example apps/landing/.env.local
# Update with your actual values

# Run development server
npm run landing:dev

# Build and test production build
npm run landing:build
npm start --workspace=apps/landing
```

## CI/CD

Vercel automatically deploys:
- Production: on merge to `main` branch
- Preview: on pull requests
- Staging: manual deployment if configured

Configure branch protection rules in GitHub to require passing CI checks before merging.
