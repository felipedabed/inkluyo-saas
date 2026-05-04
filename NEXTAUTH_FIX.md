# NextAuth Supabase Adapter Fix - Complete Guide

## Problem
The app was throwing `adapter_error_getUserByEmail` when users tried to sign in. This prevented email authentication from working.

## Root Cause
The **NextAuth tables were created in the wrong database schema**.

- **Created in**: `public` schema  
- **Expected by @auth/supabase-adapter**: `next_auth` schema  

The adapter explicitly looks for tables in `next_auth` schema (see line 33 in `/node_modules/@auth/supabase-adapter/index.js`):
```javascript
const supabase = createClient(url, secret, {
  db: { schema: "next_auth" },  // <-- HERE
  ...
});
```

## Solution

### Step 1: Update Supabase Database Schema

**Open the Supabase SQL Editor** for your project and run the migration script below.

**IMPORTANT**: This will preserve existing data if you have any users.

```sql
-- Migration: Move NextAuth tables to correct schema
-- This fixes the adapter_error_getUserByEmail issue

-- 1. Create the next_auth schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS next_auth AUTHORIZATION postgres;

-- 2. Create the tables in the correct schema (if they don't already exist)
CREATE TABLE IF NOT EXISTS next_auth.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  email TEXT UNIQUE,
  email_verified TIMESTAMP WITH TIME ZONE,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS next_auth.accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES next_auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_account_id TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  UNIQUE(provider, provider_account_id)
);

CREATE TABLE IF NOT EXISTS next_auth.sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES next_auth.users(id) ON DELETE CASCADE,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,
  session_token TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS next_auth.verification_tokens (
  identifier TEXT,
  token TEXT UNIQUE,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY (identifier, token)
);

-- 3. (OPTIONAL) If you had tables in public schema, migrate data:
-- Only run these if you have existing users in public.users
BEGIN;
  INSERT INTO next_auth.users (id, name, email, email_verified, image, created_at)
  SELECT id, name, email, email_verified, image, created_at FROM public.users
  ON CONFLICT (email) DO NOTHING;
  
  INSERT INTO next_auth.accounts (id, user_id, type, provider, provider_account_id, refresh_token, access_token, expires_at, token_type, scope, id_token, session_state)
  SELECT id, user_id, type, provider, provider_account_id, refresh_token, access_token, expires_at, token_type, scope, id_token, session_state FROM public.accounts
  ON CONFLICT (provider, provider_account_id) DO NOTHING;
  
  INSERT INTO next_auth.sessions (id, user_id, expires, session_token)
  SELECT id, user_id, expires, session_token FROM public.sessions
  ON CONFLICT (session_token) DO NOTHING;
  
  INSERT INTO next_auth.verification_tokens (identifier, token, expires)
  SELECT identifier, token, expires FROM public.verification_tokens
  ON CONFLICT (identifier, token) DO NOTHING;
COMMIT;

-- 4. (OPTIONAL) Drop old tables if migration was successful
-- Uncomment ONLY after verifying users can sign in
-- DROP TABLE IF EXISTS public.verification_tokens CASCADE;
-- DROP TABLE IF EXISTS public.sessions CASCADE;
-- DROP TABLE IF EXISTS public.accounts CASCADE;
-- DROP TABLE IF EXISTS public.users CASCADE;
```

### Step 2: Verify Environment Variables in Vercel

1. Go to your Vercel Project Dashboard: https://vercel.com/felipedabeds-projects/inkluyo
2. Navigate to **Settings → Environment Variables**
3. Verify these are set (they should match `.env.local`):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL=https://inkluyo.com`

4. If any are missing, copy them from `.env.local` and add them.

### Step 3: Test Authentication Locally

```bash
# 1. Pull latest code
git pull origin main

# 2. Install dependencies
npm install

# 3. Verify .env.local has correct credentials
cat apps/landing/.env.local | grep SUPABASE

# 4. Start dev server
npm run landing:dev

# 5. Go to http://localhost:3000/auth/signin
# 6. Enter your email and click "Send sign-in link"
# 7. Check console for magic link (or Resend dashboard)
# 8. Click the magic link to verify it works
```

### Step 4: Deploy to Production

```bash
# 1. Commit the schema fix
git add schema.sql
git commit -m "fix: move NextAuth tables to correct next_auth schema for adapter compatibility"

# 2. Push to main (auto-deploys via GitHub Actions)
git push origin main

# 3. Monitor the deployment
# Go to https://github.com/felipedabed/inkluyo-saas/actions
# Wait for the workflow to complete (~2-3 minutes)

# 4. Test production signin
# Go to https://inkluyo.com/auth/signin
# Try signing in with your email
```

## Verification Checklist

- [ ] NextAuth tables exist in `next_auth` schema (not `public`)
- [ ] Vercel environment variables are set correctly
- [ ] Can sign in locally at `http://localhost:3000/auth/signin`
- [ ] Magic link email arrives (check Resend dashboard or console)
- [ ] Can click magic link and get redirected to dashboard
- [ ] Can sign in on production at `https://inkluyo.com/auth/signin`
- [ ] Dashboard loads after authentication
- [ ] Session persists after page refresh

## Troubleshooting

### Still getting `adapter_error_getUserByEmail`?

1. **Check Supabase schema**:
   ```sql
   SELECT table_name FROM information_schema.tables 
   WHERE table_schema = 'next_auth';
   ```
   Should return: `users`, `accounts`, `sessions`, `verification_tokens`

2. **Verify credentials in Vercel**:
   - Log into Vercel
   - Check the `SUPABASE_SERVICE_ROLE_KEY` matches Supabase dashboard
   - Redeploy: Go to Deployments → Redeploy latest

3. **Check logs**:
   ```bash
   # Local dev
   npm run landing:dev
   # Look for errors in console

   # Production
   vercel logs --prod
   ```

### Users can't verify email?

Check Resend configuration:
1. Verify `RESEND_API_KEY` is set in Vercel
2. Go to https://resend.com → API Keys
3. Confirm key is active (not revoked)

### Old data loss concern?

The migration script uses `ON CONFLICT ... DO NOTHING` to safely migrate data without overwriting existing records. If you had users in `public.users`, they'll be copied to `next_auth.users` before the old tables are dropped (step 4, which is optional).

## Files Modified

- `schema.sql` - Updated to create tables in `next_auth` schema
- No code changes needed (adapter is already configured correctly)

## References

- [@auth/supabase-adapter documentation](https://authjs.dev/reference/adapters/supabase)
- [Supabase SQL Editor Guide](https://supabase.com/docs/guides/database/postgres/connecting)
- [NextAuth.js Configuration](https://next-auth.js.org/getting-started/example)

## Questions?

If authentication still doesn't work after these steps:
1. Check `vercel logs --prod` for detailed errors
2. Verify the SQL migration ran without errors
3. Clear browser cookies and try again
4. Check Resend dashboard for email delivery issues
