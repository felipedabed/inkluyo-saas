-- Habilitar extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear schema para NextAuth (el adapter busca las tablas aquí)
CREATE SCHEMA IF NOT EXISTS next_auth AUTHORIZATION postgres;

-- Tablas para NextAuth en el schema correcto
CREATE TABLE next_auth.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  email TEXT UNIQUE,
  email_verified TIMESTAMP WITH TIME ZONE,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE next_auth.accounts (
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

CREATE TABLE next_auth.sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES next_auth.users(id) ON DELETE CASCADE,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,
  session_token TEXT UNIQUE NOT NULL
);

CREATE TABLE next_auth.verification_tokens (
  identifier TEXT,
  token TEXT UNIQUE,
  expires TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY (identifier, token)
);

-- Crear tabla de sitios (vincular a usuario)
CREATE TABLE public.sites (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  owner_id UUID REFERENCES next_auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de activaciones
CREATE TABLE public.activations (
  id BIGSERIAL PRIMARY KEY,
  site_id TEXT NOT NULL,
  page_path TEXT NOT NULL,
  feature_key TEXT NOT NULL,
  country_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para rendimiento
CREATE INDEX idx_activations_site_id ON public.activations(site_id);
CREATE INDEX idx_activations_created_at ON public.activations(created_at);

-- RLS (Row Level Security) - Por ahora permitimos inserts anónimos para el widget
ALTER TABLE public.activations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.activations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated selects" ON public.activations
  FOR SELECT USING (auth.role() = 'authenticated');
