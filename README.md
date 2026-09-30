# 🚀 ByteSpace - Modern E-Learning & Course Platform

A pixel-perfect, highly responsive, and interactive Landing Page & Authentication platform built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://byte-space-ashiq.vercel.app)
[![Pull Request](https://img.shields.io/badge/Pull_Request-PR_%231-238636?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Robiul1711/ByteSpace/pull/1)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🌐 Live Preview

- **Production URL:** [https://byte-space-ashiq.vercel.app](https://byte-space-ashiq.vercel.app)
- **GitHub Repository:** [https://github.com/Robiul1711/ByteSpace](https://github.com/Robiul1711/ByteSpace)
- **Working Branch:** [`feature/bytespace-landing-auth`](https://github.com/Robiul1711/ByteSpace/tree/feature/bytespace-landing-auth)

---

## 🌟 Key Features

### 1. 🎨 Dynamic & Animated Hero Section
- **Custom Vector SVG Arc Sweep:** Smooth `pathLength` vector drawing animation curving seamlessly from bottom-left across the apex to bottom-right.
- **Coordinated Staggered Entrance:** Sequenced reveals for headlines, search pill, student showcase, floating metric badges, and 3D shapes.
- **Zero CLS (Cumulative Layout Shift):** Intrinsic aspect-ratio space reservation prevents any layout jumping during hydration and image loading.
- **Edge-Floating 3D Elements:** Ambient floating micro-animations on decorative spring, torus, cylinder, and cone geometries.

### 2. 🏢 Logo Cloud / Brand Partners
- Dynamic brand partner ticker with slow, silky blur-flip transitions between partner sets.

### 3. 📚 Course Catalog & Category Explorer
- High-conversion course cards with rating metrics, instructor avatars, dynamic pricing, and tag filters.
- Curated learning paths for Development, Design, Business, and Marketing.

### 4. 💎 Features Bento Grid & Testimonials
- Interactive feature matrix highlighting interactive courses, mentor support, and certification perks.
- Social proof testimonial cards with student feedback and avatar stacks.

### 5. 🔐 Authentication Pages (Bonus Extra Credit)
- **Login (`/login`):** Clean authentication form with password visibility toggle, remember-me checkbox, and social SSO buttons.
- **Signup (`/signup`):** Full onboarding form with input validation, terms confirmation, and seamless redirection.

### 6. 🌓 Theme System (Dark / Light Mode)
- Full dark & light theme support powered by `next-themes` with persistent state across sessions.

---

## 🛠️ Tech Stack & Engineering Decisions

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server-Side Rendering (SSR), optimal SEO, and Turbopack build engine. |
| **Language** | TypeScript (Strict Mode) | Full type-safety, maintainable interfaces, and clean component contracts. |
| **Styling** | Tailwind CSS & CSS Variables | Utility-first styling with custom design tokens for typography & colors. |
| **Animations** | Framer Motion | Hardware-accelerated transitions, SVG path drawing, and scroll triggers. |
| **Icons** | Lucide React | Lightweight, consistent, and accessible SVG icon set. |
| **Deployment**| Vercel | Instant global edge CDN distribution with automated CI/CD pipelines. |

---

## 📁 Project Architecture

```
ByteSpace/
├── public/
│   └── images/               # Optimized SVG shapes, logos, and raster assets
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts, metadata, and ThemeProvider
│   │   ├── page.tsx          # Main Landing Page composition
│   │   ├── globals.css       # Tailwind directives & design token variables
│   │   ├── login/
│   │   │   └── page.tsx      # Sign In page
│   │   └── signup/
│   │       └── page.tsx      # Sign Up page
│   ├── components/
│   │   ├── common/
│   │   │   └── ThemeToggle.tsx # Dark/Light theme switcher
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LogoBar.tsx
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── CoursesSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CreatorCTASection.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── providers/
│   │       └── ThemeProvider.tsx
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Robiul1711/ByteSpace.git
cd ByteSpace
```

### 2. Switch to Working Branch
```bash
git checkout feature/bytespace-landing-auth
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 👨‍💻 Candidate Information

- **Name:** Robiul Islam Ashiq
- **Position Applied:** Jr. Software Engineer (Frontend)
- **Live Submission:** [https://byte-space-ashiq.vercel.app](https://byte-space-ashiq.vercel.app)
- **Pull Request:** [#1 - Feature Landing & Auth](https://github.com/Robiul1711/ByteSpace/pull/1)
