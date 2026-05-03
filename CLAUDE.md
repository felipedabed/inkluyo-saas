# Inkluyo Project Context for Claude

**Last Updated**: May 3, 2026  
**Project Status**: ✅ **LIVE in Production** at https://inkluyo.com/  
**Current Phase**: Maintenance + Q2-Q3 2026 Roadmap

---

## 🎯 Quick Context

**Inkluyo** is a SaaS platform for accessibility widgets with real-time analytics. It's currently **live and working** with paying customers.

**Tech Stack:**
- Frontend: Next.js 15 + React 19 + TypeScript + Tailwind
- Backend: Node.js (Next.js API routes)
- Database: Supabase (PostgreSQL)
- Auth: NextAuth.js + Magic Link (via Resend)
- Payments: Stripe (subscriptions)
- Deployment: Vercel + Custom Domain (inkluyo.com via Spaceship)
- CI/CD: GitHub Actions (auto-deploy on push to main)

---

## 📂 Key Files to Know

### Documentation (Start Here)
- **TODO.md** — What's done, what's next, roadmap
- **STRATEGY.md** — Architecture, tech decisions, roadmap
- **DEVELOPMENT.md** — How to develop locally, debugging, testing
- **DEPLOYMENT_SUCCESS.md** — How the live deployment works
- **README.md** — Project overview

### Configuration
- **vercel.json** — Build command: `npm run landing:build`
- **.github/workflows/deploy.yml** — Auto-deploys on push to main
- **apps/landing/.env.local** — Environment variables (DON'T COMMIT)
- **apps/landing/.env.example** — Template for env vars

### Code Structure
```
apps/landing/              # Main Next.js app
  ├── src/
  │   ├── app/           # Next.js app router
  │   ├── components/    # React components
  │   ├── lib/           # Utilities (auth, stripe, supabase, etc)
  │   └── types/         # TypeScript types
  └── public/widget/     # Embeddable widget IIFE

packages/widget/          # Widget source (Vite build)
```

---

## 🚀 Workflow

### Every Time You Open the Project

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install dependencies (if needed)
npm install

# 3. Start development
npm run landing:dev

# 4. Open browser
open http://localhost:3000
```

### Making Changes

```bash
# 1. Create feature branch
git checkout -b feature/your-feature

# 2. Make changes and test locally
npm run landing:dev

# 3. Commit
git add .
git commit -m "feat: description of change"

# 4. Push (GitHub Actions will auto-deploy to preview)
git push origin feature/your-feature

# 5. Create PR on GitHub
# 6. Merge to main (auto-deploys to production)
git checkout main && git pull
git merge feature/your-feature
git push origin main
```

### GitHub Actions Auto-Deploy

When you push to `main`:
1. GitHub Actions runs linting + build checks
2. If everything passes, Vercel auto-deploys
3. Your changes are live at https://inkluyo.com/ in ~1-2 minutes
4. **No manual deployment needed!**

---

## 🔑 Important Environment Variables

Located in `apps/landing/.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://sdepoxqavgoicjtnpocl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_API_KEY=re_...
NEXTAUTH_SECRET=incluyo_super_secret_prod_key_2026_xYz
NEXTAUTH_URL=https://inkluyo.com
```

⚠️ **These are real credentials.** Never commit `.env.local` to Git.

---

## ✅ Current Features (Live)

- ✅ Multi-language landing (EN, ES, PT)
- ✅ Magic Link authentication
- ✅ Protected dashboard
- ✅ Stripe subscriptions (3 tiers)
- ✅ Real-time analytics
- ✅ Embeddable widget
- ✅ Email notifications (Resend)
- ✅ Custom domain (inkluyo.com)

---

## 📋 Next Steps (From TODO.md)

### Immediate (This Sprint)
- [ ] Monitor Stripe transactions
- [ ] Track user signups
- [ ] Fix any bugs from users
- [ ] Optimize performance

### Q2 2026
- [ ] Advanced analytics (charts, trends)
- [ ] Webhook system
- [ ] Public API for partners
- [ ] Enhanced dashboard

### Q3 2026
- [ ] Widget marketplace
- [ ] Affiliate program
- [ ] Mobile app
- [ ] Multi-language widget

---

## 🐛 Debugging

### Dev Server Won't Start
```bash
# Kill any process on port 3000
lsof -ti:3000 | xargs kill -9

# Clear cache
rm -rf apps/landing/.next

# Restart
npm run landing:dev
```

### Build Fails Locally
```bash
# Verify environment
./verify-integrations.sh

# Try clean build
npm run build
```

### Deployment Issues
```bash
# Check Vercel status
vercel list --prod

# Check recent logs
vercel logs --prod
```

---

## 🔗 Important Links

| Resource | Link |
|----------|------|
| **Live Site** | https://inkluyo.com/ |
| **Vercel Dashboard** | https://vercel.com/felipedabeds-projects/inkluyo |
| **GitHub Repo** | https://github.com/felipedabed/inkluyo-saas |
| **Supabase** | https://app.supabase.com/project/sdepoxqavgoicjtnpocl |
| **Stripe Dashboard** | https://dashboard.stripe.com |
| **Resend** | https://resend.com |

---

## 👤 Team

- **Developer**: Felipe Dabe (felipedabeds@gmail.com)
- **Designer/Product**: [Add if applicable]

---

## 🎓 References

When Claude needs context:
1. Read **TODO.md** for what's next
2. Read **DEVELOPMENT.md** for how to dev
3. Read **STRATEGY.md** for architecture decisions
4. Check git log: `git log --oneline` to see history

---

## 📝 Common Commands

```bash
# Development
npm run landing:dev              # Start dev server
npm run build                    # Full build
npm run lint                     # Check code quality

# Deployment
git push origin main             # Auto-deploys via GitHub Actions

# Verification
./verify-integrations.sh         # Check env vars
./test-endpoints.sh http://localhost:3000  # Test APIs
vercel domains list              # Check domain status

# Git
git status                       # See what changed
git log --oneline -10            # Recent commits
git branch -a                    # All branches
```

---

## ⚡ Remember

1. **Everything is documented** — Check TODO.md, STRATEGY.md, DEVELOPMENT.md
2. **Push to main = auto-deploy** — No manual steps needed
3. **Env vars in .env.local** — Real credentials, keep secure
4. **GitHub Actions runs on every push** — Check Actions tab if deploy fails
5. **The app is LIVE** — Be careful with production changes

---

## 🆘 When Stuck

1. **Check TODO.md** — See what was planned
2. **Read DEVELOPMENT.md** — Debugging section has solutions
3. **Look at git history** — `git log --oneline` shows what was done
4. **Test endpoints** — `./test-endpoints.sh https://inkluyo.com/`
5. **Check Vercel logs** — `vercel logs --prod`

---

**Status**: 🟢 Production Ready  
**Last Deploy**: May 3, 2026  
**Next Review**: Q2 2026 Roadmap
