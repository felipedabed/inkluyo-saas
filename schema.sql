-- Crear tabla de sitios (para el futuro dashboard multi-sitio)
CREATE TABLE sites (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  owner_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de activaciones
CREATE TABLE activations (
  id BIGSERIAL PRIMARY KEY,
  site_id TEXT NOT NULL,
  page_path TEXT NOT NULL,
  feature_key TEXT NOT NULL,
  country_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para rendimiento
CREATE INDEX idx_activations_site_id ON activations(site_id);
CREATE INDEX idx_activations_created_at ON activations(created_at);

-- RLS (Row Level Security) - Por ahora permitimos inserts anónimos para el widget
ALTER TABLE activations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON activations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated selects" ON activations
  FOR SELECT USING (auth.role() = 'authenticated');
