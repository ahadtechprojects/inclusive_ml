# Inclusive Market Limited (IML) — Corporate Platform

An institutional-grade, modern corporate web platform for **Inclusive Market Limited (IML)**, a diversified Nigerian corporate enterprise operating across commercial trading, logistics, warehousing, digital ICT infrastructure, marketing, and human capital consulting.

---

## Brand Architecture & Color Palette
- **Primary Color**: `#B03104` (IML Terracotta / Crimson Ochre)
- **Secondary**: Clean white / Off-white (Light Mode) and Deep Slate / Charcoal (`#080b11`, `#101622` in Dark Mode)
- **Design System**: Liquid Glassmorphism (`backdrop-filter: blur(20px) saturate(190%)`), multi-layered specular reflections, and responsive 2-tier media design.

---

## 6 Core Business Pillars
1. **Commerce & Trading**: Multi-sector sourcing, wholesale trading, and B2B market corridors.
2. **Logistics & Distribution**: Inter-state haulage, fleet coordination, and last-mile distribution.
3. **Warehousing & Storage**: Secure dry storage and temperature-controlled cold chain facilities.
4. **Technology & ICT**: Cloud architecture, custom software development, and automated workflow systems.
5. **Marketing & Business Services**: Data-informed market research, brand identity, and customer acquisition.
6. **Consulting & Human Capital**: Corporate strategy, supply chain optimization, and executive training.

---

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Runtime & Language**: Node.js 20+, TypeScript (Strict mode)
- **Styling**: Tailwind CSS v4, Vanilla CSS Design System with Liquid Glassmorphism tokens
- **Animations**: Framer Motion (Scroll spy, animated timeline, morphing cards, bottom-sheet mobile navigation)
- **Theme**: `next-themes` (Dark Mode / Light Mode with zero flash)
- **Form Validation**: React Hook Form + Zod
- **Email Delivery**: Resend API (with inline letterhead logo embedding)
- **CI/CD**: GitHub Actions (Lint, Typecheck, Build, GitHub Pages)

---

## Getting Started

### 1. Prerequisites
- Node.js 20+
- npm 10+

### 2. Installation
```bash
git clone https://github.com/ahadtechprojects/inclusive_ml.git
cd inclusive_ml
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_RECEIVER_EMAIL=YOUR_RECEIVING_MAIL
```

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the platform.

### 5. Production Build & Quality Checks
```bash
npx tsc --noEmit   # TypeScript Typecheck
npm run lint       # ESLint Validation
npm run build      # Production Next.js Build
```

---

## Corporate Notice
Inclusive Market Limited is incorporated in the Federal Republic of Nigeria under the Companies and Allied Matters Act (CAMA 2020) as a Private Company Limited by Shares.
