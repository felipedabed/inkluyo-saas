# Shopify App Setup & Implementation Guide

**Status:** 📋 Planning Phase  
**Timeline:** 3-5 days development  
**Expected Launch:** Q2 2026  

---

## Overview

Converting Inkluyo into a Shopify App will unlock a new distribution channel with:
- 💰 Revenue sharing: 70% Inkluyo, 30% Shopify  
- 🌐 Listing on Shopify App Store (1M+ potential merchants)
- 🚀 Estimated: 500+ installations in first 30 days

---

## Architecture

### Tech Stack
```
Frontend: Next.js + React (existing)
Backend: Node.js (existing)
Shopify: Custom Shopify App (new)
Database: Supabase (existing)
Auth: Shopify OAuth (new)
```

### Shopify App Types Considered
- **Custom App** ❌ (Can't be listed in App Store)
- **Public App** ✅ (Listed in App Store, this is what we want)
- **Private App** ❌ (For single store)

### App Flow
```
1. Merchant installs "Inkluyo Accessibility" from Shopify App Store
2. OAuth: Merchant authorizes with Shopify account
3. App: Creates Shopify API credentials
4. Injection: Snippet auto-injected into merchant's theme
5. Dashboard: Merchant sees analytics in our app
6. Revenue: Shopify takes 30%, we keep 70%
```

---

## Implementation Roadmap

### Phase 1: Shopify App Infrastructure (Days 1-2)
- [ ] Create Shopify app on Partner account (shop.app.shopify.com)
- [ ] Generate API credentials (API key, secret)
- [ ] Setup Shopify API OAuth flow
- [ ] Configure app settings in shopify.app.toml
- [ ] Setup webhooks for install/uninstall events

### Phase 2: Backend API Integration (Day 2-3)
- [ ] Create `/api/shopify/auth` endpoint for OAuth
- [ ] Create `/api/shopify/webhooks` endpoint for events
- [ ] Implement shop table in database:
  ```sql
  CREATE TABLE shops (
    id SERIAL PRIMARY KEY,
    shop_id VARCHAR UNIQUE,
    shop_name VARCHAR,
    access_token VARCHAR UNIQUE,
    scope TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    active BOOLEAN DEFAULT true
  );
  ```
- [ ] Implement token storage (encrypted in Supabase)
- [ ] Create install/uninstall webhook handlers

### Phase 3: Shopify Theme Integration (Day 3)
- [ ] Create Shopify Script Tag endpoint to inject widget
- [ ] Generate unique shop identifier
- [ ] Inject tracking pixel for analytics
- [ ] Test on dev Shopify store

### Phase 4: Dashboard & Settings (Day 4)
- [ ] Create Shopify settings page (iframe in admin)
- [ ] Add color/position customization
- [ ] Link Shopify analytics to dashboard
- [ ] Create shop-specific metrics views

### Phase 5: Testing & Submission (Day 5)
- [ ] Test on 3+ Shopify dev stores
- [ ] Complete Shopify app checklist
- [ ] Prepare store listing (screenshots, description)
- [ ] Submit to Shopify App Store review

---

## API Endpoints to Create

### Authentication
```
POST /api/shopify/auth
  - Purpose: OAuth callback
  - Params: code, hmac, shop
  - Returns: redirect to dashboard

POST /api/shopify/webhooks
  - Purpose: Handle shop events
  - Webhooks: app/installed, app/uninstalled
  - Returns: 200 OK
```

### Shop Management
```
GET /api/shopify/shops/:shop_id
  - Purpose: Get shop data
  - Returns: { shop_id, shop_name, widget_config }

PUT /api/shopify/shops/:shop_id/config
  - Purpose: Update widget settings
  - Body: { color, position, hide_badge }
  - Returns: updated config
```

### Analytics
```
GET /api/shopify/analytics/:shop_id
  - Purpose: Get shop analytics
  - Params: date_range, metric
  - Returns: { installations, active_users, feature_usage }
```

---

## Database Schema

```sql
-- Shops table
CREATE TABLE shops (
  id SERIAL PRIMARY KEY,
  shop_id VARCHAR(255) UNIQUE NOT NULL,
  shop_name VARCHAR(255),
  shop_domain VARCHAR(255),
  access_token VARCHAR(255) UNIQUE NOT NULL,
  scope TEXT,
  plan VARCHAR(50),
  installed_at TIMESTAMP DEFAULT NOW(),
  uninstalled_at TIMESTAMP,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Shop configurations
CREATE TABLE shop_configs (
  id SERIAL PRIMARY KEY,
  shop_id VARCHAR(255) UNIQUE,
  primary_color VARCHAR(7),
  widget_position VARCHAR(20),
  language VARCHAR(5),
  hide_badge BOOLEAN DEFAULT false,
  custom_css TEXT,
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (shop_id) REFERENCES shops(shop_id)
);

-- Shop analytics
CREATE TABLE shop_analytics (
  id SERIAL PRIMARY KEY,
  shop_id VARCHAR(255),
  date DATE,
  active_users INT,
  total_activations INT,
  feature_used VARCHAR(50),
  count INT,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (shop_id) REFERENCES shops(shop_id)
);
```

---

## Shopify App.toml Configuration

```toml
scopes = "write_script_tags,read_script_tags,write_products,read_products"
admin_api_access_token = "GENERATED_BY_SHOPIFY"

[webhooks.app_installed]
uri = "https://inkluyo.com/api/shopify/webhooks"
include_fields = []

[webhooks.app_uninstalled]
uri = "https://inkluyo.com/api/shopify/webhooks"
include_fields = []

[build]
dev = "npm run dev"
```

---

## Revenue Model

**Pricing Tiers for Shopify:**
- **Free**: Basic widget (limited to 1 domain)
- **Shopify Plus**: Full features (unlimited domains)
- **Enterprise**: Custom integration + support

**Revenue Split:**
- Shopify takes 30%
- Inkluyo keeps 70%
- Expected: $1,000-2,000 MRR from Shopify in first 6 months

---

## Shopify App Store Listing

**Title:** Inkluyo Accessibility Widget

**Description:**
```
Make your Shopify store accessible to everyone with one click.

Inkluyo is a lightweight accessibility widget that lets your customers 
customize your store to their needs—without touching your theme code.

Features:
✅ Dyslexia-friendly fonts
✅ High contrast mode
✅ Text sizing (100-200%)
✅ Dark mode
✅ Animated pause
✅ Focus indicators
✅ Real-time analytics

WCAG 2.1 AA Compliant • ADA Friendly • 7KB widget
```

**Categories:** Accessibility, Compliance  
**Pricing:** Free plan + Premium tiers  

---

## Security Checklist

- [ ] HMAC verification for Shopify webhooks
- [ ] Access token encrypted in database
- [ ] OAuth state parameter validated
- [ ] Rate limiting on API endpoints
- [ ] CORS configured for Shopify
- [ ] CSP headers for iframe embedding
- [ ] Regular security audits

---

## Testing Checklist

- [ ] OAuth flow works end-to-end
- [ ] Widget loads on Shopify storefront
- [ ] Analytics data captured correctly
- [ ] Uninstall removes snippet cleanly
- [ ] Works with all Shopify themes
- [ ] Mobile responsiveness tested
- [ ] Performance: <100ms load time

---

## Next Steps

1. **Register Shopify Partner Account** (if not done)
   - Visit shop.app.shopify.com
   - Create partner app

2. **Create Development Store**
   - Use Shopify for testing
   - Install app locally
   - Test widget injection

3. **Implement OAuth**
   - Set up `/api/shopify/auth`
   - Test authentication flow
   - Store access tokens securely

4. **Build Widget Injection**
   - Use Shopify Script Tag API
   - Auto-inject on app install
   - Remove on uninstall

5. **Create Admin Dashboard**
   - Build settings UI
   - Link to Shopify metrics

6. **Submit for Review**
   - Complete Shopify checklist
   - Submit store listing
   - Wait for approval (usually 2-5 days)

---

## Resources

- **Shopify Apps Docs:** https://shopify.dev/docs
- **Shopify API Reference:** https://shopify.dev/api
- **Script Tags API:** https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag
- **Webhooks:** https://shopify.dev/docs/admin-api/rest/reference/events/webhook
- **OAuth:** https://shopify.dev/docs/admin-api/access-control/oauth

---

## Estimated Effort

- **Planning:** 2 hours ✅
- **Backend OAuth:** 4 hours
- **Database Schema:** 2 hours
- **Widget Injection:** 3 hours
- **Admin Dashboard:** 4 hours
- **Testing:** 3 hours
- **Submission:** 1 hour

**Total: ~20 hours = 2-3 days of focused development**

---

## Success Metrics

- ✅ App approved by Shopify
- ✅ 50+ installations in first 30 days
- ✅ 4.5+ star rating
- ✅ $500+MRR within 3 months
- ✅ <5% uninstall rate

---

**Created:** May 9, 2026  
**Next Review:** After WordPress.org submission  
**Owner:** Felipe Dabed / Inkluyo Team
