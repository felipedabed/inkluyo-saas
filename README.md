# Inkluyo – Accessibility Widget Platform

An open-source accessibility widget with real-time analytics, multi-language support, and seamless integration.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run landing:dev

# Build for production
npm run landing:build
```

The app will be available at `http://localhost:3000`.

### Environment Setup

Copy the example environment file and add your credentials:

```bash
cp apps/landing/.env.example apps/landing/.env.local
```

Configure these services:
- **Supabase**: Database and authentication
- **Stripe**: Payment processing
- **Resend**: Email service
- **NextAuth**: Authentication

## 📦 Project Structure

```
.
├── apps/
│   ├── landing/          # Next.js landing page & dashboard
│   └── wordpress-plugin/ # WordPress integration plugin
├── packages/
│   └── widget/          # Embeddable accessibility widget (Vite)
├── DEPLOYMENT.md        # Vercel deployment guide
└── schema.sql           # Supabase database schema
```

## 🎯 Features

- ✅ **Multi-language Support** – i18n with language switcher
- ✅ **Authentication** – NextAuth with Magic Link (Supabase adapter)
- ✅ **Payment Processing** – Stripe checkout integration
- ✅ **Email Service** – Resend for transactional emails
- ✅ **Real-time Analytics** – Protected dashboard with live metrics
- ✅ **Embeddable Widget** – Accessibility widget as IIFE script
- ✅ **Responsive Design** – Built with Tailwind CSS

## 🔧 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Node.js with Next.js API routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js + Supabase Adapter
- **Payments**: Stripe
- **Email**: Resend
- **Package Manager**: npm workspaces + Turbo

## 📋 Available Scripts

```bash
# Development
npm run dev              # Run all services in dev mode
npm run landing:dev     # Run landing page only
npm run widget:dev      # Run widget in watch mode

# Building
npm run build           # Build all packages
npm run landing:build   # Build landing page
npm run widget:build    # Build widget
npm run widget:embed    # Build & embed widget in landing

# Linting
npm run lint           # Lint all packages

# Production
npm start --workspace=apps/landing  # Start production server
```

## 🚢 Deployment

### Vercel (Recommended)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions.

**Quick steps:**
1. Connect GitHub repository to Vercel
2. Add environment variables from `.env.local`
3. Configure custom domain (Spaceship)
4. Deploy!

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `apps/landing/.next`
- Install Command: `npm install --registry https://registry.npmjs.org/`

### Local Production Build

```bash
# Build the app
npm run landing:build

# Start the server
npm start --workspace=apps/landing
```

## 🔐 Environment Variables

All required environment variables are documented in `apps/landing/.env.example`. Set them in Vercel's project settings for production.

**Key Variables:**
- `NEXT_PUBLIC_SUPABASE_URL` – Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` – Supabase public key
- `STRIPE_SECRET_KEY` – Stripe secret (production: sk_live_)
- `RESEND_API_KEY` – Resend API key
- `NEXTAUTH_SECRET` – Random secret for auth sessions
- `NEXTAUTH_URL` – Your domain (e.g., https://yourspaceship.domain)

## 📊 API Routes

- `POST /api/checkout` – Stripe checkout session
- `POST /api/send-snippet` – Send widget installation snippet via email
- `GET /api/analytics` – Real-time analytics data

## 🎨 Components

### Landing Page
- Hero section with feature showcase
- Pricing page with plan options
- Installation snippet generator
- Demo/preview section

### Dashboard
- Protected authentication-required area
- Real-time analytics display
- User profile management

### Widget
- Embeddable accessibility features
- IIFE script format for easy integration
- Cached for optimal performance

## 🧪 Testing

The project uses Next.js built-in linting. Run type checks with:

```bash
npm run lint
```

For testing, start the dev server and manually verify:
- [ ] Landing page loads
- [ ] Authentication flow works
- [ ] Stripe checkout integrates properly
- [ ] Dashboard is protected
- [ ] Analytics display real-time data

## 📚 Database

Supabase schema is defined in `schema.sql`. Set up with:

```sql
-- Create tables in Supabase SQL Editor
-- Use schema.sql as reference
```

## 🐛 Troubleshooting

**Build fails?**
- Run `npm install` to ensure all dependencies are installed
- Check that `packageManager` is set in root `package.json`
- Verify Node.js version >=18

**Dev server won't start?**
- Kill any processes on port 3000: `lsof -ti:3000 | xargs kill -9`
- Clear `.next` cache: `rm -rf apps/landing/.next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Environment variables not loading?**
- Ensure `.env.local` is in `apps/landing/` directory
- Restart dev server after changing env vars
- For Vercel: add vars to project Settings → Environment Variables

## 📄 License

[Add your license here]

## 🤝 Contributing

[Contributing guidelines]

---

**Built with ❤️ for accessibility**
