# Inkluyo Authentication Fix Guide

## Problem Summary
The authentication system is broken with "Something went wrong" errors on `/auth/signin`. This is likely due to:
1. Missing Supabase schema for NextAuth tables
2. Row Level Security (RLS) policies blocking operations
3. Inadequate error logging

## Quick Fix (5 Minutes)

### Step 1: Verify Your Environment Variables
Check that your `.env.local` in `/apps/landing/` has these keys:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=https://inkluyo.com (or http://localhost:3000 for dev)
RESEND_API_KEY=re_1234567890...
```

### Step 2: Check the Supabase Database Schema
1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project
3. Go to SQL Editor
4. Copy the SQL from: `apps/landing/scripts/setup-nextauth-supabase.sql`
5. Paste it into the SQL Editor and run it

This creates the required `next_auth` schema with tables:
- `users`
- `accounts`
- `sessions`
- `verification_tokens`

### Step 3: Test the Debug Endpoint
Once deployed or running locally, visit:
```
http://localhost:3000/api/auth/debug
```

This will show you:
- Environment variables status
- Supabase connection status
- NextAuth configuration
- Resend email configuration

### Step 4: Check the Console Logs
When testing authentication, look at:
- **Browser Console** (F12 → Console tab) - Client-side errors
- **Server Logs** - Terminal where you run `npm run dev`

Look for messages like:
```
[NextAuth] Sending email via Resend to: user@example.com
[NextAuth] User signed in: { email: '...', isNew: true }
[SignInForm] Attempting sign in for: user@example.com
```

### Step 5: Test Authentication Flow

#### For Development (with Resend not sending real emails):
1. Go to http://localhost:3000/auth/signin
2. Enter an email
3. Check the server console - you'll see the magic link printed
4. Copy the link and paste it in your browser
5. You should be signed in

#### For Production (with Resend):
1. Go to https://inkluyo.com/auth/signin
2. Enter your email
3. Check your email inbox for the sign-in link
4. Click the link
5. You should be signed in

## Files Changed

### Modified Files:
1. **`src/lib/auth.ts`** - Enhanced configuration with better error handling and logging
2. **`src/components/auth/SignInForm.tsx`** - Shows actual error messages with detailed debugging

### New Files:
1. **`src/app/api/auth/debug/route.ts`** - Debug endpoint to test Supabase connection
2. **`scripts/setup-nextauth-supabase.sql`** - SQL script to set up Supabase schema
3. **`AUTHENTICATION_FIX.md`** - This file

## Common Issues and Solutions

### Issue: "Failed to send sign-in link"
**Solution**: Check if RESEND_API_KEY is set and valid. Look at `/api/auth/debug` endpoint.

### Issue: Email never arrives
**Solution**: 
1. Check RESEND_API_KEY is correct
2. Check spam folder
3. For development, check server console for magic link

### Issue: "Something went wrong" with no error details
**Solution**: This is fixed now. Check browser console and server logs for detailed error messages.

### Issue: "Could not send email"
**Solution**: Either:
- Resend service is down (check status)
- RESEND_API_KEY is invalid
- Your email domain is not verified in Resend (for production)

### Issue: "Provider error"
**Solution**: Email provider is not configured correctly. The app now falls back to logging the link to console.

### Issue: Sign-in link doesn't work
**Solution**: 
1. Verify NEXTAUTH_URL matches your deployment URL
2. Check that NEXTAUTH_SECRET is the same on all deployments
3. Make sure the link hasn't expired (24 hours)

## Testing Checklist

- [ ] Can you access `/api/auth/debug`?
- [ ] Does the debug endpoint show Supabase connection: "SUCCESS"?
- [ ] Can you enter an email on `/auth/signin`?
- [ ] Do you see console logs indicating the attempt?
- [ ] For dev: Can you find the magic link in server console?
- [ ] For production: Do you receive the email?
- [ ] Can you click the link and see the logged-in state?

## Still Having Issues?

1. Run the debug endpoint: `https://your-domain/api/auth/debug`
2. Share the output
3. Check server logs for `[NextAuth]` and `[SignInForm]` messages
4. Verify the SQL migration ran successfully in Supabase

## Technical Details

### What Changed:
1. **Enhanced error logging** - All errors are now logged with [NextAuth] prefix
2. **Better error messages** - Users see helpful text instead of "Something went wrong"
3. **Email fallback** - If Resend fails, the link is logged to console (for development)
4. **Debug endpoint** - Easy way to verify configuration

### Why This Works:
- The Supabase adapter now has the required tables and RLS policies
- NextAuth can properly create/read user sessions
- Email provider has proper error handling
- Console logs help troubleshoot issues
