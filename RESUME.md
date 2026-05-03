# Inkluyo — Project Resume

**Status**: LIVE on https://inkluyo.com/ | **Date**: May 3, 2026

Inkluyo is an open-source accessibility widget platform with real-time analytics, multi-language support, and a modern SaaS infrastructure. The product is live on Vercel with full integrations (Supabase, Stripe, NextAuth, Resend) and automated CI/CD.

---

## 🎯 Project Summary

**Inkluyo** is an accessibility-first SaaS built with:
- Embeddable accessibility widget (27KB IIFE)
- Multi-language support (Spanish, English, Portuguese-BR)
- Freemium pricing model ($0/$15/$39 per month)
- Real-time analytics dashboard
- WordPress plugin distribution ready
- Full authentication system with Magic Links
- Stripe payment processing

**Team**: Felipe (Solo Founder) | **Location**: LATAM-focused

---

## ✅ What's Live & Functional

### ✅ **Widget Core** (`packages/widget`)
- **Size**: 27KB minified (IIFE format)
- **Features**:
  - High contrast mode with custom colors
  - Adjustable text size (100% → 200%)
  - Font selection (Dyslexia-friendly fonts)
  - Line height & letter spacing tuning
  - Focus indicators for keyboard navigation
  - Dark mode toggle
- **Architecture**: Shadow DOM + aggressive CSS reset for total isolation
- **Telemetry**: Real-time analytics pings to `/api/analytics` (with `data-site-id`)
- **i18n**: Spanish (ES), English (EN), Portuguese-BR (PT-BR) with localStorage persistence
- **Status**: v0.4.0 - Stable, production-ready

### ✅ **Landing & Web App** (`apps/landing` - Next.js 15)
- **Routes**:
  - `/[lang]/` – Modern hero + feature showcase
  - `/[lang]/demo` – Interactive playground for widget
  - `/[lang]/pricing` – Pricing plans ($0/$15/$39/mo)
  - `/[lang]/get-started` – B2B onboarding + snippet generator
  - `/[lang]/dashboard` – Protected analytics dashboard (auth-required)
- **Design**: Tailwind CSS 4, responsive, modern UI
- **Performance**: SSR optimized, hydration fixes for browser extensions
- **Status**: Live on Vercel

### ✅ **Authentication** (NextAuth.js + Supabase)
- **Method**: Magic Links via email (Resend)
- **Provider**: Supabase Adapter
- **Features**:
  - Passwordless authentication
  - Session persistence
  - Protected routes (dashboard)
- **Email**: Resend integration for transactional emails
- **Status**: Fully functional, tested

### ✅ **Payments** (Stripe)
- **Integration**: Stripe Checkout sessions
- **Endpoint**: `POST /api/checkout`
- **Features**:
  - Monthly and annual billing
  - 20% discount on annual plans
  - Automatic redirect to Stripe hosted checkout
- **Status**: Connected, awaiting customer base

### ✅ **Database** (Supabase/PostgreSQL)
- **Tables**: users, sites, analytics, subscriptions
- **Features**:
  - User profiles
  - Site registrations (for widget tracking)
  - Real-time analytics storage
  - Subscription management
- **Status**: Schema created, integrated with API routes

### ✅ **WordPress Plugin** (`apps/wordpress-plugin`)
- **Format**: PHP plugin ready for .zip distribution
- **Features**:
  - Native WP Admin dashboard
  - Color picker for widget customization
  - Position toggle (bottom-left, bottom-right, top-right, top-left)
  - Language selector (ES, EN, PT-BR)
  - Auto-injection via `wp_footer` hook
- **Status**: Ready for WordPress.org directory submission

### ✅ **CI/CD & Deployment**
- **GitHub Actions**:
  - `widget-build.yml` – Auto-compile widget on push to main
  - `deploy.yml` – Full deployment workflow (lint → build → deploy to Vercel)
- **Vercel**: Connected with environment variables
- **Domain**: inkluyo.com (via Spaceship registrar)
- **Headers**: CORS-enabled for widget, long-term caching for assets
- **Status**: Automated, fully functional


---

## 📊 Metrics & Numbers

| Metric | Value | Status |
|--------|-------|--------|
| **Widget Size** | 27KB | ✅ Production-ready |
| **Languages** | 3 (ES/EN/PT-BR) | ✅ Complete |
| **Auth System** | Magic Links + Supabase | ✅ Live |
| **Payment Gateway** | Stripe | ✅ Connected |
| **Email Service** | Resend | ✅ Working |
| **Database** | PostgreSQL/Supabase | ✅ Active |
| **Deployment** | Vercel + Custom Domain | ✅ Live at inkluyo.com |
| **CI/CD** | GitHub Actions | ✅ Automated |

---

## 🚀 What's Next (Prioritized)

### Phase 2 — Traction & Distribution (Q2-Q3 2026)
1. **WordPress.org Directory**: Submit plugin for organic discovery (target: 100-500 installations)
2. **Content Marketing**: Blog launch with SEO-optimized guides
3. **Enhanced Dashboards**: Real-time metrics, custom reports, CSV export
4. **Shopify App Store**: Expand distribution to e-commerce
5. **User Research**: Interview early WordPress installations for feature feedback

### Phase 3 — Enterprise & Scale (Q3-Q4 2026)
- White-label customization
- Enterprise support & SLAs
- Advanced analytics & compliance reporting
- Possible second distribution channel (Shopify if WordPress traction is strong)

---

## 📁 Project Structure

```
inkluyo-main/
├── apps/
│   ├── landing/          # Next.js 15 app (production app)
│   │   ├── src/
│   │   │   ├── app/         # Page routes + API endpoints
│   │   │   ├── components/  # React components
│   │   │   ├── lib/         # Utilities (auth, stripe, etc)
│   │   │   └── types/       # TypeScript types
│   │   └── public/widget/   # Embedded widget IIFE
│   └── wordpress-plugin/ # PHP plugin
├── packages/
│   └── widget/          # Vanilla TS widget (Vite, IIFE)
├── .github/workflows/   # GitHub Actions (widget-build.yml, deploy.yml)
└── schema.sql          # Supabase database schema
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15 + React 19 + TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Backend** | Node.js (Next.js API routes) |
| **Database** | Supabase (PostgreSQL) |
| **Authentication** | NextAuth.js (Magic Links) |
| **Payments** | Stripe |
| **Email** | Resend |
| **Widget** | Vanilla TypeScript + Vite |
| **Deployment** | Vercel |
| **Domain** | Spaceship registrar |

---

## 👤 Team

- **Felipe Dabed** – Solo Founder
  - Full-stack development
  - Product strategy
  - Marketing & distribution
- **Email**: For partnership/customer inquiries: support@inkluyo.com
- **Based**: LATAM (timezone-optimized for ES, PT-BR markets)

---

## 📞 Quick Links

- **Live Site**: https://inkluyo.com/
- **GitHub**: [Repo link]
- **Widget CDN**: https://inkluyo.com/widget/widget.iife.js
- **Dashboard**: https://inkluyo.com/[lang]/dashboard
- **Pricing**: https://inkluyo.com/[lang]/pricing

---

**Last Updated**: May 3, 2026 | **Status**: LIVE & OPERATIONAL


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
