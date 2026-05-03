# Inkluyo — Feature Roadmap & Status

**Project**: Accessibility Widget SaaS  
**Status**: LIVE on https://inkluyo.com/  
**Last Updated**: May 3, 2026

---

## ✅ Completed Features (15+ shipped)

### Core Widget (6 features)
- [x] High contrast mode with custom color support
- [x] Text size adjustment (100% → 200%)
- [x] Font selection (Dyslexia-friendly fonts included)
- [x] Line height and letter spacing tuning
- [x] Focus indicators for keyboard navigation
- [x] Dark mode toggle

### Multi-Language Support (3 languages)
- [x] Spanish (ES) – Full translation
- [x] English (EN) – Full translation
- [x] Portuguese-Brazil (PT-BR) – Full translation

### Landing & Web Experience (5+ features)
- [x] Modern hero section with feature highlights
- [x] Interactive demo page (/demo)
- [x] Pricing page with annual discount calculation
- [x] Get-started onboarding flow (/get-started)
- [x] Interactive snippet generator
- [x] Real-time analytics dashboard (protected)

### Authentication & Authorization
- [x] Magic Link authentication (passwordless)
- [x] NextAuth.js integration with Supabase
- [x] Protected dashboard routes
- [x] Session persistence

### Payments & Monetization
- [x] Stripe checkout integration
- [x] Multiple pricing tiers ($0/$15/$39/mo)
- [x] Annual billing with 20% discount
- [x] Payment processing

### Email & Communications
- [x] Resend email service integration
- [x] Transactional email sending (snippets, confirmations)
- [x] Email templates

### Database & Analytics
- [x] Supabase PostgreSQL integration
- [x] User account persistence
- [x] Site registration and tracking
- [x] Real-time analytics collection
- [x] Analytics dashboard (real-time polling)

### Distribution & Packaging
- [x] WordPress plugin (ready for .zip distribution)
- [x] WordPress Admin dashboard
- [x] Widget color customization
- [x] Widget position selector
- [x] Auto-injection via wp_footer hook

### Deployment & Infrastructure
- [x] Vercel deployment (custom domain)
- [x] inkluyo.com domain (Spaceship registrar)
- [x] GitHub Actions CI/CD (widget build)
- [x] GitHub Actions deployment workflow
- [x] Environment variable management
- [x] CORS headers for widget embedding
- [x] Long-term caching for assets
- [x] .env configuration system

### Code Quality & Architecture
- [x] TypeScript throughout (type-safe)
- [x] Tailwind CSS 4 styling
- [x] Monorepo setup (npm workspaces + Turbo)
- [x] Responsive design
- [x] Shadow DOM isolation for widget
- [x] CSS reset for embedding safety
- [x] SEO optimization (meta tags, structured data)

---

## 🚀 In Progress

### Q2 2026 (May-June)
- [ ] WordPress.org directory submission (plugin review process)
- [ ] Enhanced analytics dashboard (drill-down metrics, CSV export)
- [ ] Performance monitoring (widget load times, error tracking)
- [ ] Blog launch with accessibility guides

### Q3 2026 (July-September)
- [ ] Shopify App Store submission
- [ ] Expanded white-label options
- [ ] API documentation for custom integrations
- [ ] Third-party integration examples (Zapier, webhooks)

---

## 📋 Next Steps — Planned Features (5-10 items)

### High Priority (Ship Next)

1. **WordPress.org Directory Listing** 🎯
   - Submit plugin to WordPress.org for organic discovery
   - Expected reach: 100-500 installations in 30 days
   - Effort: 1-2 hours (documentation + submission)

2. **Enhanced Dashboard Analytics**
   - Real-time user metrics (active users, peak hours)
   - Feature usage breakdown (which features used most)
   - Conversion tracking (free → paid users)
   - Custom date range filtering
   - CSV/PDF export
   - Effort: 2-3 days

3. **Blog & SEO Content Hub**
   - Launch `/blog` section with 10+ accessibility guides
   - Target keywords: "accessibility widget", "WCAG compliance", "accessibility overlay"
   - SEO optimization (meta tags, internal linking, structured data)
   - Effort: 1-2 weeks (content creation)

4. **Content Marketing Strategy**
   - Case studies from WordPress users
   - Video tutorials (widget features, integration)
   - Spanish & Portuguese-BR versions of guides
   - Effort: 2-3 weeks

### Medium Priority (Months 2-3)

5. **Shopify App Store Integration**
   - Convert WordPress plugin to Shopify App
   - Custom settings for e-commerce (product recommendation accessibility, etc)
   - Stripe revenue share (30%)
   - Effort: 3-5 days

6. **White-Label Customization**
   - Custom branding (logo, colors)
   - Removal of "Powered by Inkluyo" badge for higher tiers
   - Custom domain support (clients.example.com)
   - Effort: 2-3 days

7. **Advanced Widget Features**
   - Reading guide (follows cursor line-by-line)
   - Text-to-speech (accessibility feature)
   - Color blindness simulation modes
   - Text ducking (reduces opacity of non-focused areas)
   - Effort: 1-2 weeks per feature

8. **Performance Optimization**
   - Reduce widget bundle size to <20KB
   - Implement lazy-loading for non-critical features
   - Service Worker for offline support
   - Effort: 2-3 days

### Lower Priority (Future Roadmap)

9. **Enterprise Features**
   - Custom support channels (Slack, email)
   - SLA guarantees (99.5% uptime)
   - Dedicated account manager
   - Custom analytics retention (up to 2 years)
   - Effort: 1 week planning + 2 weeks development

10. **AI-Powered Accessibility Remediation**
    - Auto-generate alt text for images (vision AI)
    - Suggest form labels and ARIA roles
    - Auto-transcription for videos
    - Generate GitHub PRs with fixes
    - Effort: 2-4 weeks (AI integration + testing)

11. **Compliance Reporting**
    - Generate "Accessibility Statement" PDFs per jurisdiction
    - WCAG 2.1 Level AA/AAA compliance tracking
    - Regional compliance (Chile NMX-R-050, Brazil LBI, etc)
    - Effort: 1-2 weeks

12. **Developer Tools**
    - VS Code extension for real-time accessibility checking
    - GitHub Action for CI/CD integration
    - Browser DevTools panel
    - Effort: 2-3 weeks per tool

---

## 🐛 Known Issues

### Current (May 3, 2026)
- None reported yet (fresh launch)

### Potential Issues to Monitor
- [ ] Widget performance on low-bandwidth connections (test on 3G)
- [ ] Compatibility with old browser versions (IE11 not targeted)
- [ ] Widget conflicts with other overlays (need real-world testing)
- [ ] Supabase cold starts (monitor latency)

### Past Issues (Resolved)
- ✅ Hydration warnings (fixed with suppressHydrationWarning)
- ✅ Widget CSS isolation (fixed with Shadow DOM + CSS reset)
- ✅ CDN snippet generation (fixed with dynamic origin)
- ✅ Build command for Vercel (fixed in vercel.json)

---

## 📊 Success Metrics

| Goal | Target | Timeline | Status |
|------|--------|----------|--------|
| WordPress installs | 100+ | 30 days | ⏳ Starting |
| Blog visitors | 500/month | 60 days | 🔄 In progress |
| Paid customers | 5+ | 90 days | 🔄 Targeting |
| MRR | $500+ | 120 days | 🔄 Targeting |
| Widget integrations | 50+ | 180 days | 🔄 Targeting |

---

## 🔄 Development Workflow

**Branch Strategy**: 
- `main` – Production (auto-deployed to Vercel)
- Feature branches (`feature/xyz`) → PR → merge to main

**Release Process**:
1. Feature development on branch
2. Open PR with description
3. GitHub Actions runs lint + build
4. Code review (self-review for solo dev)
5. Merge to main
6. Auto-deploy to Vercel (production)
7. Tag release in GitHub

**Communication**:
- GitHub Issues for bugs/features
- Discussions for larger strategy decisions
- Commits follow conventional commit format

---

## 💡 Notes for Future Work

**WordPress.org Submission**:
- Plugin needs: README.txt, full documentation, support forum
- Approval time: typically 2-4 weeks
- Requirements: GPL license, no upsell in free version (badge OK with privacy notice)

**Shopify App Requirements**:
- Must use Shopify's OAuth flow
- Revenue: 30% Shopify takes, 70% us
- Listing takes 1-2 weeks approval

**Performance Budget**:
- Widget: keep under 25KB (currently 27KB, room for optimization)
- Landing: keep Core Web Vitals green (LCP <2.5s, FID <100ms, CLS <0.1)
- Monitor with Vercel Analytics

---

**Last Updated**: May 3, 2026  
**Owner**: Felipe Dabed  
**Questions?**: Check DEVELOPMENT.md for setup & troubleshooting
