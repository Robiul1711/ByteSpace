🚀 ByteSpace — Modern E-Learning & Course Platform

ByteSpace is a modern, responsive, and interactive e-learning platform built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion.

The project focuses on a clean and engaging learning experience with a modern landing page, course catalog, authentication interface, interactive animations, testimonials, theme switching, and responsive design.

---

Live Links

- Live Demo: https://byte-space-ashiq.vercel.app
- Repository: https://github.com/Robiul1711/ByteSpace
- Pull Request: https://github.com/Robiul1711/ByteSpace/pull/1

---

Features

Dynamic Landing Page

- Pixel-perfect and responsive UI
- Dynamic hero section
- Smooth SVG path drawing animation
- Staggered entrance animations
- Ambient floating 3D elements
- Optimized layout to minimize cumulative layout shift
- Responsive navigation and footer

Brand Partners

- Animated partner logo ticker
- Smooth infinite scrolling animation
- Responsive logo presentation

Course Catalog

- Dynamic course cards
- Course ratings
- Instructor information
- Dynamic pricing
- Course category filtering

Available categories:

- Development
- Design
- Business
- Marketing

Features & Testimonials

- Bento-style feature grid
- Platform feature highlights
- Student testimonials
- Responsive testimonial sections
- Interactive UI elements

Authentication

- Login page
- Sign Up page
- Form validation
- Social SSO options
- Responsive authentication layouts

Routes:

/login
/signup

Theme Switcher

- Dark mode
- Light mode
- Persistent theme state
- Smooth theme switching

---

Architecture

ByteSpace uses the Next.js App Router with a hybrid Server-Side and Client-Side architecture.

Server-Side

Next.js Server Components are used for content that does not require browser-side interaction.

- Rendering static and SEO-focused content
- Generating the initial page structure
- Handling page metadata
- Improving initial page loading
- Reducing unnecessary client-side JavaScript
- Delivering optimized server-rendered content

Client-Side

Client Components are used where user interaction, browser APIs, or dynamic UI state are required.

- Theme switching
- Course filtering
- Form interactions
- Authentication UI
- Interactive navigation
- Framer Motion animations
- Client-side UI state
- Browser-based interactions

This hybrid approach keeps the application performant and SEO-friendly while providing smooth client-side interactions where needed.

---

Tech Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Architecture

- Next.js App Router
- Server Components
- Client Components
- Component-based architecture

Deployment

- Vercel

---

Project Structure

```text
ByteSpace/
│
├── public/
│   └── images/
│       └── SVG shapes, logos, and image assets
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   └── signup/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── landing/
│   │   ├── layout/
│   │   └── providers/
│   │
│   └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md