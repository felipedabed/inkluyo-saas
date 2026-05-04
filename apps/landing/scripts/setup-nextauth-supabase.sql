-- NextAuth.js v4 PostgreSQL Adapter Schema
-- This script sets up the required tables for NextAuth with Supabase

-- Create next_auth schema
CREATE SCHEMA IF NOT EXISTS next_auth;

-- Create users table
CREATE TABLE IF NOT EXISTS next_auth.users (
  id TEXT NOT NULL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  "emailVerified" TIMESTAMP WITH TIME ZONE,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create accounts table
CREATE TABLE IF NOT EXISTS next_auth.accounts (
  id TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  "providerAccountId" TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY ("userId") REFERENCES next_auth.users(id) ON DELETE CASCADE,
  UNIQUE(provider, "providerAccountId")
);

-- Create sessions table
CREATE TABLE IF NOT EXISTS next_auth.sessions (
  id TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,
  "sessionToken" TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY ("userId") REFERENCES next_auth.users(id) ON DELETE CASCADE
);

-- Create verification_tokens table
CREATE TABLE IF NOT EXISTS next_auth.verification_tokens (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(identifier, token)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_accounts_userId ON next_auth.accounts("userId");
CREATE INDEX IF NOT EXISTS idx_accounts_provider_providerAccountId ON next_auth.accounts(provider, "providerAccountId");
CREATE INDEX IF NOT EXISTS idx_sessions_userId ON next_auth.sessions("userId");
CREATE INDEX IF NOT EXISTS idx_sessions_sessionToken ON next_auth.sessions("sessionToken");
CREATE INDEX IF NOT EXISTS idx_verification_tokens_identifier ON next_auth.verification_tokens(identifier);
CREATE INDEX IF NOT EXISTS idx_verification_tokens_token ON next_auth.verification_tokens(token);

-- Enable Row Level Security
ALTER TABLE next_auth.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE next_auth.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE next_auth.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE next_auth.verification_tokens ENABLE ROW LEVEL SECURITY;

-- Create RLS policies to allow service_role to perform all operations
-- Users can read their own data
CREATE POLICY "Allow service role to do all operations on users" ON next_auth.users
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow service role to do all operations on accounts" ON next_auth.accounts
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow service role to do all operations on sessions" ON next_auth.sessions
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow service role to do all operations on verification_tokens" ON next_auth.verification_tokens
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Optional: Grant permissions to service role on the schema
GRANT USAGE ON SCHEMA next_auth TO service_role;
GRANT CREATE ON SCHEMA next_auth TO service_role;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA next_auth TO service_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA next_auth TO service_role;
