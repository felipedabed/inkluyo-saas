# Inkluyo — Development Guide

**Project**: Accessibility Widget SaaS  
**Last Updated**: May 3, 2026  
**Audience**: Developers, Contributors

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18+ (check with `node --version`)
- **npm**: v9+ (check with `npm --version`)
- **Git**: For version control
- **Environment Variables**: See [Environment Setup](#environment-setup) section

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/inkluyo.git
cd inkluyo-main

# Install dependencies
npm install

# Verify installation
npm run --list
```

### 2. Environment Setup

```bash
# Copy example env file
cp apps/landing/.env.example apps/landing/.env.local

# Edit and add your keys
nano apps/landing/.env.local
```

**Required Environment Variables**:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-here

# Stripe (test keys for development)
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_key

# Resend (email service)
RESEND_API_KEY=your-resend-api-key
```

**How to generate NEXTAUTH_SECRET**:
```bash
openssl rand -base64 32
```

### 3. Start Development Server

```bash
# This rebuilds the widget, embeds it, and starts the Next.js dev server
npm run landing:dev

# Development server starts on http://localhost:3000
```

### 4. Verify Everything Works

- [ ] Visit http://localhost:3000 – landing page loads
- [ ] Click "Get Started" – snippet generator appears
- [ ] Try language switcher (EN/ES/PT-BR)
- [ ] Visit /demo – widget appears and is interactive
- [ ] Visit /pricing – pricing page loads
- [ ] Check browser console – no errors

---

## 📁 Project Structure

```
inkluyo-main/
├── apps/
│   ├── landing/                    # Main Next.js application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── api/            # API routes (/api/*)
│   │   │   │   │   ├── analytics/  # Widget telemetry
│   │   │   │   │   ├── auth/       # NextAuth routes
│   │   │   │   │   ├── checkout/   # Stripe integration
│   │   │   │   │   └── send-snippet/
│   │   │   │   ├── [lang]/         # Dynamic language routes
│   │   │   │   │   ├── page.tsx    # Home page
│   │   │   │   │   ├── demo/       # Widget demo
│   │   │   │   │   ├── pricing/    # Pricing page
│   │   │   │   │   ├── get-started/# Onboarding
│   │   │   │   │   └── dashboard/  # Protected dashboard
│   │   │   │   ├── layout.tsx      # Root layout
│   │   │   │   └── page.tsx        # Redirect to [lang]
│   │   │   ├── components/         # React components
│   │   │   │   ├── widget/         # Widget-related components
│   │   │   │   ├── dashboard/      # Dashboard components
│   │   │   │   └── ...
│   │   │   ├── lib/                # Utilities & helpers
│   │   │   │   ├── auth.ts         # NextAuth config
│   │   │   │   ├── stripe.ts       # Stripe utilities
│   │   │   │   ├── supabase.ts     # Supabase client
│   │   │   │   └── i18n.ts         # i18n helpers
│   │   │   └── types/              # TypeScript interfaces
│   │   ├── public/
│   │   │   └── widget/
│   │   │       └── widget.iife.js  # Embedded widget (auto-generated)
│   │   ├── .next/                  # Next.js build output (ignored)
│   │   └── next.config.ts
│   │
│   └── wordpress-plugin/           # PHP plugin
│       ├── inkluyo.php            # Main plugin file
│       ├── admin/                  # WP Admin settings
│       └── public/                 # Frontend implementation
│
├── packages/
│   └── widget/                     # Core widget (Vanilla TS + Vite)
│       ├── src/
│       │   ├── main.ts            # Widget entry point
│       │   ├── features/          # Feature implementations
│       │   │   ├── contrast.ts
│       │   │   ├── text-size.ts
│       │   │   └── ...
│       │   └── utils/             # Helpers
│       ├── dist/                  # Built output (IIFE format)
│       │   └── widget.iife.js    # Production bundle
│       └── vite.config.ts
│
├── shared/                        # Shared types & utilities
│   └── types/                     # Common TypeScript types
│
├── .github/workflows/
│   ├── widget-build.yml          # Auto-build widget on push
│   └── deploy.yml                # CI/CD deployment
│
├── schema.sql                     # Supabase database schema
├── vercel.json                    # Vercel config
├── tsconfig.base.json            # Root TypeScript config
├── turbo.json                     # Turbo build config
└── package.json                   # Root workspace config
```

---

## 🛠️ Development Workflow

### Available Commands

```bash
# Development
npm run dev              # Run all services in dev mode
npm run landing:dev     # Landing + widget dev (most common)
npm run widget:dev      # Widget only (watch mode)

# Building
npm run build           # Build all packages
npm run landing:build   # Build landing for production
npm run widget:build    # Build widget only
npm run widget:embed    # Build widget + copy to public/

# Linting
npm run lint           # Lint all packages
npm run lint -- --fix  # Auto-fix lint errors

# Production
npm start --workspace=apps/landing  # Start production server
```

### Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes** to code in `apps/landing/` or `packages/widget/`

3. **Test locally**:
   ```bash
   npm run landing:dev
   # Visit http://localhost:3000 and test your changes
   ```

4. **Run linting**:
   ```bash
   npm run lint
   npm run lint -- --fix  # Auto-fix if possible
   ```

5. **Build to verify**:
   ```bash
   npm run build
   ```

6. **Commit & push**:
   ```bash
   git add .
   git commit -m "feat: description of change"
   git push origin feature/my-feature
   ```

7. **Open a Pull Request** on GitHub
   - GitHub Actions will run lint + build checks
   - Fix any issues
   - Merge when ready

8. **Verify deployment**:
   ```bash
   # Push to main triggers automatic deployment
   git checkout main
   git pull origin main
   
   # Check Vercel dashboard or
   # Visit https://inkluyo.com to verify
   ```

---

## 🧪 Testing Procedures

### Manual Testing Checklist

#### Widget Features
- [ ] High Contrast: Click toggle, verify colors change
- [ ] Text Size: Drag slider, verify text grows/shrinks
- [ ] Font: Select different font, verify it applies
- [ ] Line Height: Adjust slider, verify spacing changes
- [ ] Focus Indicators: Tab through page, verify focus visible
- [ ] Dark Mode: Toggle, verify background/text colors invert

#### Language Support
- [ ] Spanish (ES): Click language switcher, verify all text in Spanish
- [ ] English (EN): Verify English text
- [ ] Portuguese-BR (PT-BR): Verify Portuguese text

#### Authentication
- [ ] Visit /dashboard without login → redirects to sign-in
- [ ] Enter email → receive Magic Link email
- [ ] Click Magic Link → authenticated, can see dashboard
- [ ] Sign out → redirected to home
- [ ] Try accessing dashboard again → requires sign-in

#### Payments
- [ ] Visit /pricing
- [ ] Click "Get Started" on a plan
- [ ] Go through Stripe checkout (use test card `4242 4242 4242 4242`)
- [ ] Verify subscription active in dashboard

#### Analytics
- [ ] Open widget demo page
- [ ] Enable features (contrast, text size, etc)
- [ ] Check /api/analytics endpoint receives data
- [ ] Dashboard shows real-time metrics

#### Responsiveness
- [ ] Test on mobile (dev tools: iPhone 12, Samsung Galaxy S10)
- [ ] Test on tablet (iPad)
- [ ] Test on desktop (1920x1080)
- [ ] Verify layout adapts correctly

### Automated Testing

```bash
# Type checking
npm run lint

# Build verification (catches compilation errors)
npm run build
```

### Browser Compatibility

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Testing

```bash
# Build with profiling
npm run landing:build

# Check bundle size
npm run widget:build

# Use Vercel Analytics
# Visit https://vercel.com/dashboard → Project → Analytics
```

---

## 🔧 Common Development Tasks

### Adding a New API Endpoint

1. Create new file: `apps/landing/src/app/api/[name]/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Your logic here
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

2. Test with curl:
```bash
curl -X POST http://localhost:3000/api/[name] \
  -H "Content-Type: application/json" \
  -d '{"key":"value"}'
```

### Adding a New Page

1. Create directory: `apps/landing/src/app/[lang]/new-page/`
2. Create file: `page.tsx`

```typescript
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

3. Access at: `http://localhost:3000/en/new-page`

### Modifying the Widget

1. Edit files in `packages/widget/src/`
2. Widget rebuilds automatically in watch mode
3. Changes appear in landing at `http://localhost:3000/demo`

### Updating Database Schema

1. Edit `schema.sql`
2. Apply changes in Supabase SQL Editor
3. Update types in `shared/types/` if needed

### Adding Environment Variables

1. Add to `apps/landing/.env.local`
2. For client-side: prefix with `NEXT_PUBLIC_`
3. Restart dev server
4. In production: add to Vercel project settings

---

## 🐛 Troubleshooting

### "Port 3000 already in use"

```bash
# Find process using port 3000
lsof -ti:3000

# Kill it
kill -9 <PID>

# Or use different port
PORT=3001 npm run landing:dev
```

### Build fails: "Module not found"

```bash
# Clear caches and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### "Cannot find module '@inkluyo/widget'"

```bash
# Make sure workspaces are installed
npm install

# Verify the widget package exists
ls packages/widget/package.json
```

### Widget not appearing on demo page

```bash
# Rebuild widget
npm run widget:embed

# Check if file exists
ls apps/landing/public/widget/widget.iife.js

# Restart dev server
npm run landing:dev
```

### Environment variables not loading

```bash
# Verify file exists in correct location
ls apps/landing/.env.local

# Check values are set
cat apps/landing/.env.local

# Restart dev server (always required after env changes)
# Stop (Ctrl+C) and run: npm run landing:dev
```

### "NEXTAUTH_SECRET is not set"

```bash
# Generate secret
openssl rand -base64 32

# Add to .env.local
echo "NEXTAUTH_SECRET=your-generated-value" >> apps/landing/.env.local

# Restart dev server
```

### Stripe checkout not working

```bash
# Verify test keys in .env.local
echo $STRIPE_SECRET_KEY

# Use test card: 4242 4242 4242 4242
# Expiry: Any future date
# CVC: Any 3 digits
```

### Magic links not sending

```bash
# Check Resend API key
echo $RESEND_API_KEY

# Verify email in Resend dashboard (resend.com)
# Check spam folder

# In dev: check console for errors
# In production: check Vercel function logs
```

### Dashboard shows "Loading..." forever

```bash
# Check browser console for errors (F12)
# Verify authentication token exists
# Check Supabase connection in .env.local
# Try signing out and back in
```

### TypeScript errors

```bash
# Build to see all errors
npm run build

# Type check only
npx tsc --noEmit

# In VS Code: ensure TypeScript extension installed
```

---

## 📊 Debugging

### Browser DevTools

1. Open DevTools: `F12` or `Cmd+Option+I`
2. Check Console tab for errors
3. Check Network tab to see API calls
4. Use Sources tab to set breakpoints

### Server Logs

```bash
# Vercel logs (for production)
vercel logs

# Local dev logs appear in terminal where you ran npm run landing:dev
```

### Database Debugging

1. Open Supabase Dashboard
2. Select your project
3. Go to SQL Editor
4. Run queries to inspect data

### API Debugging

```bash
# Test endpoint directly
curl http://localhost:3000/api/analytics \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"event":"test"}'
```

---

## 🚀 Deployment Process

### Automatic Deployment (Recommended)

1. Push to main branch:
   ```bash
   git push origin main
   ```

2. GitHub Actions runs:
   - Linting
   - Build verification
   - Widget compilation
   - Vercel deployment

3. Vercel auto-deploys to production:
   - https://inkluyo.com

4. Verify deployment:
   - Check Vercel dashboard
   - Visit https://inkluyo.com

### Manual Deployment (Emergency)

```bash
# If GitHub Actions fails, deploy manually
npm run landing:build

# Using Vercel CLI
vercel --prod

# Or check in with your Git provider for automated retry
```

### Rollback

If deployment breaks production:

1. **Quick rollback** via Vercel Dashboard:
   - Deployments → Select previous version → Promote

2. **Code rollback**:
   ```bash
   git revert HEAD
   git push origin main
   ```

3. **Verify**: https://inkluyo.com loads correctly

---

## 📚 Useful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [NextAuth.js Docs](https://next-auth.js.org)

### Tools
- [VS Code](https://code.visualstudio.com/) – Recommended editor
- [Vercel CLI](https://vercel.com/cli) – For local Vercel emulation
- [Supabase CLI](https://supabase.com/docs/reference/cli) – For local DB
- [Stripe CLI](https://stripe.com/docs/stripe-cli) – For webhook testing

### Learning
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Grid & Flexbox](https://web.dev/learn/css/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🤝 Contributing

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Run `npm run lint -- --fix` before committing
- Write descriptive commit messages

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: format code
refactor: reorganize code
test: add tests
chore: update dependencies
```

Example:
```bash
git commit -m "feat: add dark mode toggle to widget"
```

### Pull Request Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how to test these changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests pass (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated
```

---

## 📞 Support & Questions

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Email**: support@inkluyo.com

---

## 🎓 Next Steps

1. Complete [Quick Start](#quick-start) section
2. Read [Development Workflow](#development-workflow)
3. Make your first change
4. Run tests and linting
5. Create a PR
6. Deploy!

---

**Happy coding! 🚀**

For more info, see:
- STRATEGY.md – Product vision
- TODO.md – Feature roadmap
- DEPLOYMENT_SUCCESS.md – Production deployment details
- README.md – Project overview

Last Updated: May 3, 2026
