# NextAuth Fix - Quick Implementation (5 minutes)

## The Problem
Users see `adapter_error_getUserByEmail` when trying to sign in. NextAuth can't find the database tables.

## The Root Cause (1 minute read)
- NextAuth tables were created in `public` schema
- The `@auth/supabase-adapter` looks for them in `next_auth` schema
- This mismatch causes the signin to fail

## How to Fix (2 steps, 5 minutes)

### Step 1: Run SQL Migration in Supabase (2 minutes)

1. Open https://app.supabase.com → Select project `sdepoxqavgoicjtnpocl`
2. Go to **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy and paste this SQL:

```sql
CREATE SCHEMA IF NOT EXISTS next_auth AUTHORIZATION postgres;

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
```

5. Click **Run** (blue button)
6. Wait for "Success" message

### Step 2: Redeploy on Vercel (3 minutes)

1. Go to https://vercel.com/felipedabeds-projects/inkluyo
2. Click **Deployments** tab
3. Find the latest deployment (top one)
4. Click the **Redeploy** button (three dots menu)
5. Click **Redeploy** again to confirm
6. Wait ~2 minutes for deployment to complete

## Test It Works

### Local Test (Optional)
```bash
npm run landing:dev
# Go to http://localhost:3000/auth/signin
# Enter your email, should get magic link
```

### Production Test
1. Go to https://inkluyo.com/auth/signin
2. Enter your email
3. Check email for magic link
4. Click link → should go to dashboard
5. ✅ You're logged in!

## Done!

If it still doesn't work:
- Check browser console (F12) for errors
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set in Vercel environment variables
- Check `vercel logs --prod` for server errors
- See full guide: `NEXTAUTH_FIX.md`

## What Was Changed
- Updated `schema.sql` to create tables in `next_auth` schema (required by @auth/supabase-adapter)
- Added migration guide (`NEXTAUTH_FIX.md`) for reference
