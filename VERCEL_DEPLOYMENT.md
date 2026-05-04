# Vercel Deployment Guide

This guide covers deploying Inkluyo to Vercel and troubleshooting common issues.

## Quick Start

### Prerequisites
1. Vercel CLI installed: `npm install -g vercel`
2. Logged in to Vercel: `vercel login`
3. Environment variables configured in `.env.local`

### Deploy to Preview
```bash
./deploy-to-vercel.sh preview
```

### Deploy to Production
```bash
./deploy-to-vercel.sh production
```

## Environment Variables Setup

The deployment script automatically sets up all required environment variables in Vercel across all environments (development, preview, production).

### Required Variables
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- `RESEND_API_KEY` - Resend email service API key
- `NEXTAUTH_SECRET` - NextAuth secret for sessions
- `NEXTAUTH_URL` - NextAuth callback URL

### Manual Setup
If you need to manually set up environment variables without running a full deployment:

```bash
./scripts/setup-vercel-env.sh
```

This script will:
1. Read variables from `.env.local`
2. Set them in Vercel for all environments
3. Provide verification steps

## Troubleshooting

### Issue: "supabaseUrl is required" during build

This error means environment variables are not available during the Next.js build process.

**Solutions (in order of preference):**

#### 1. Verify Variables in Vercel Dashboard
1. Go to https://vercel.com/inkluyo/settings/environment-variables
2. Confirm all variables are set for:
   - Development
   - Preview
   - Production
3. If missing, run: `./scripts/setup-vercel-env.sh`

#### 2. Force a Rebuild
After setting variables, trigger a rebuild:
```bash
vercel redeploy          # Preview
vercel redeploy --prod   # Production
```

#### 3. Clear Vercel Cache
Pull the latest configuration from Vercel:
```bash
cd apps/landing
vercel env pull
cd ../..
```

#### 4. Check Build Command
Ensure the build command in `vercel.json` is correct:
```json
{
  "buildCommand": "npm run landing:build",
  "outputDirectory": "apps/landing/.next"
}
```

#### 5. Verify Environment Variable References
The `apps/landing/vercel.json` file references variables with the `@` prefix:
```json
{
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@next_public_supabase_url",
    "STRIPE_SECRET_KEY": "@stripe_secret_key"
  }
}
```

These must match the actual variable names set in Vercel.

### Issue: Widget Not Building

The widget must be embedded in the public directory before deployment.

**Solution:**
```bash
npm run widget:embed
```

This is automatically run by the deployment script, but can be manually triggered.

### Issue: Build Timeout

If the build times out, it may be due to:
1. Large dependencies in node_modules
2. Build process too slow
3. Network issues

**Solutions:**
1. Clear Vercel cache and rebuild:
   ```bash
   vercel env pull
   vercel redeploy
   ```

2. Increase build timeout in Vercel dashboard (if applicable to your plan)

3. Optimize dependencies:
   ```bash
   npm install --save-dev --legacy-peer-deps
   npm run landing:build
   ```

### Issue: Authentication Failing

Make sure `NEXTAUTH_URL` is set correctly:
- For preview: `https://inkluyo.vercel.app` (or your actual preview domain)
- For production: `https://inkluyo.com` (or your production domain)

Update in `.env.local` and re-run the deployment script.

## Deployment Script Details

The `deploy-to-vercel.sh` script performs the following steps:

1. **Checks prerequisites** - Vercel CLI, login status, .env.local file
2. **Loads environment variables** - From `.env.local`
3. **Links/creates Vercel project** - If not already linked
4. **Configures environment variables** - Sets in all Vercel environments
5. **Verifies variables** - Confirms they're stored in Vercel
6. **Checks build configuration** - Validates `vercel.json`
7. **Embeds widget** - Builds and copies widget to public directory
8. **Triggers rebuild** - Uses `vercel redeploy` to ensure variables are used during build
9. **Provides next steps** - Links to monitoring and testing

## Monitoring Deployment

After running the deployment script:

1. **Watch the build**: https://vercel.com/inkluyo (click on the deployment)
2. **Check logs**: Click the deployment to see build output
3. **Test endpoints**: Once deployed, run `./test-endpoints.sh`

## Environment-Specific Variables

Some variables need to be environment-specific:

| Variable | Development | Preview | Production |
|----------|-------------|---------|------------|
| NEXTAUTH_URL | http://localhost:3000 | https://inkluyo.vercel.app | https://inkluyo.com |
| STRIPE_PUBLIC_KEY | pk_test_... (test) | pk_test_... (test) | pk_live_... (live) |
| STRIPE_SECRET | sk_test_... (test) | sk_test_... (test) | sk_live_... (live) |

To set environment-specific variables:
```bash
# Development
echo "value" | vercel env add VARIABLE_NAME

# Preview
echo "value" | vercel env add VARIABLE_NAME preview

# Production
echo "value" | vercel env add VARIABLE_NAME production
```

## Best Practices

1. **Always verify variables** - Check the Vercel dashboard after running the setup script
2. **Use the deployment script** - It handles all the complex setup automatically
3. **Test after deployment** - Run `./test-endpoints.sh` to verify everything works
4. **Keep .env.local updated** - This is the source of truth for all environment variables
5. **Use `.env.local` locally** - Never commit `.env.local` to git

## Related Files

- `deploy-to-vercel.sh` - Main deployment script
- `scripts/setup-vercel-env.sh` - Environment variables setup utility
- `vercel.json` - Root Vercel configuration
- `apps/landing/vercel.json` - Landing app-specific Vercel configuration
- `apps/landing/.env.local` - Local environment variables
- `apps/landing/.env.example` - Environment variables template

## Getting Help

If you encounter issues:

1. Check this guide's troubleshooting section
2. Review the deployment script output for errors
3. Check Vercel dashboard for build logs
4. Verify all environment variables are set correctly
5. Try manual rebuild: `vercel redeploy`
