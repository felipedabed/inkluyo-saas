# Retomar mañana — Inkluyo

> Lo último que hicimos esta sesión, dónde dejamos cosas, y qué viene siguiente.

## Para arrancar mañana

```bash
cd /Users/felipe.dabed/Documents/inclusive
npm run landing:dev
# abre http://localhost:3000 (o 3001 si el 3000 está ocupado por un zombie)
```

Ese comando re-compila el widget, lo copia a `apps/landing/public/widget/`, y arranca Next dev server en `localhost:3000`. Las preferencias del widget en localStorage quedaron guardadas, pero el server arranca limpio.

## Lo que está terminado y funcional

✅ **Widget `@inkluyo/widget`** (27.01 kB)
- Shadow DOM Fortalecido: Reseteo CSS agresivo (`!important`) para aislamiento total contra estilos del cliente.
- Sistema de Analíticas: El widget envía *pings* en tiempo real a `/api/analytics` cuando se activan features (si tiene `data-site-id`).
- 6 features base + i18n ES/EN/PT con persistencia y API global.
- Versión 0.4.0 instalada en la landing.
- Removida funcionalidad experimental de IA (Auto-Alt) para estabilidad comercial.

✅ **Landing `@inkluyo/landing`** (Next.js 15 + Tailwind)
- Diseño Moderno: Separación total entre la landing profesional (`/`) y el playground interactivo horrible (`/demo`).
- Onboarding B2B: `/get-started` con generador de snippet interactivo y simulación de envío de instrucciones por email.
- Dashboard Funcional: Conectado a una API de analíticas con *polling* en tiempo real que captura los pings del widget.
- Pricing Optimizado: Cálculo anual con descuento del 20% y números redondeados atractivos ($15/mo, $39/mo).
- Fix de Hidratación: Añadido `suppressHydrationWarning` al body para compatibilidad con extensiones de navegador.

✅ **WordPress Plugin (`apps/wordpress-plugin`)**
- Plugin oficial listo para distribución (.zip).
- Panel de configuración nativo en WP Admin (Color Picker, Posición, Idioma).
- Inyector automático vía `wp_footer`.

✅ **Infraestructura y Estrategia**
- CI/CD: Workflow de GitHub Actions (`widget-build.yml`) para compilación automática del widget.
- Estrategia validada: Modelo "Stateless" para MVP rápido y "Stateful" para planes Enterprise.


## Lo que NO está terminado (pickup points)

❌ **No hay base de datos persistente (EN PROCESO)**
- Se ha integrado `@supabase/supabase-js` y configurado el cliente.
- La API de analíticas ya soporta Supabase (con fallback a memoria si faltan las keys).
- Se ha creado el archivo `schema.sql` para inicializar la DB.

❌ **El snippet usa CDN simulado**
- El snippet generado apunta a `window.location.origin` o una URL estática, falta el deploy final a producción (ej. inkluyo.com).


❌ **No deployado**
- Todo corre solo en local (`localhost:3000`)
- Para que sea "instalable" en cualquier sitio web del mundo, hay que deployar el widget a un CDN público

### Fase 4: Persistencia y Monetización (Backend)
1. ✅ **Conexión a Base de Datos (Supabase/Postgres):** Integrado `@supabase/supabase-js` y lógica de persistencia en la API.
2. **Setup de Email Real:** Conectar Resend o SendGrid para el flujo de onboarding.
3. **Integración de Stripe:** Checkout real en la página de pricing.
4. **Auth:** Implementar NextAuth para que los clientes gestionen sus propios `siteId` y analíticas.

### Producto
5. ✅ **Soporte Brasil**: Traducir widget y landing a PT-BR.
6. [ ] **Marketing**: Publicar el plugin en el repositorio oficial de WordPress.org.
7. **Remediación ARIA (Futuro):** Hacer que el widget no solo cambie CSS, sino que intente arreglar etiquetas de formularios (depriorizado frente a estabilidad).


## Estructura del proyecto

```
inclusive/
├── apps/landing/          ← Next.js 15 (Landing + Onboarding + Dashboard)
├── apps/wordpress-plugin/ ← Plugin de WordPress (PHP)
├── packages/widget/       ← Widget principal (Vanilla TS + Vite)
├── shared/                ← Tipos compartidos
├── .github/workflows/     ← CI/CD (GitHub Actions)
└── package.json           ← Root (npm workspaces)
```
```

## Comandos útiles

```bash
# Dev
npm run landing:dev          # builds widget + corre Next dev en :3000
npm run widget:dev           # builds widget en watch mode (sin landing)

# Build
npm run landing:build        # build de producción de la landing
npm run widget:build         # solo widget
npm run widget:embed         # build widget + lo copia a apps/landing/public/widget/

# Test del widget aislado (sin landing)
open packages/widget/demo.html
```
