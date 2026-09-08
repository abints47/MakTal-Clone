# MakTal Clone

A modern marketing and web agency landing page inspired by the [MAKTAL Technologies](https://maktalseo.com/) website, built with Next.js 16, React 19, and Tailwind CSS.

This project recreates the visual style and structure of the original brand experience — hero section, services, process, portfolio showcase, team, blog, and conversion-focused CTAs — while layering in scroll-driven motion effects for a polished, agency-grade feel.

## ✨ Features

- **Parallax hero** with gradient orbs and scroll indicator
- **Floating navigation** with services dropdown and mobile menu
- **Services section** — web development, digital marketing, and SEO
- **Process section** — strategy → build → launch timeline
- **Brand showcase, stats counter & Google reviews** strips
- **Selected works** — project cards with image/video hover previews
- **Dedicated works page** (`/works`) with the full project portfolio
- **Team & blog sections**, plus a floating WhatsApp contact button
- **Scroll-driven motion** — scroll reveal, blur text, smooth scrolling, page transitions, and a follow-cursor effect
- **Fully responsive** across mobile, tablet, and desktop

## 🛠 Tech Stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org) 16 (App Router) |
| Language   | [TypeScript](https://www.typescriptlang.org) |
| UI         | [React](https://react.dev) 19                |
| Styling    | [Tailwind CSS](https://tailwindcss.com) 4    |
| Animation  | [GSAP](https://gsap.com), [Lenis](https://github.com/darkroomengineering/lenis), [Motion](https://motion.dev) |
| Icons      | [Lucide](https://lucide.dev)                 |

## 📁 Project Structure

```text
maktal-clone/
├── app/
│   ├── works/            # Portfolio showcase page
│   │   ├── data.ts       # Project data + types
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── globals.css       # Global styles & Tailwind entry
│   ├── layout.tsx        # Root layout, fonts & metadata
│   └── page.tsx          # Homepage
├── components/
│   ├── bits/             # Small reusable pieces (e.g. BlurText)
│   ├── BlogSection/      # Blog preview section
│   ├── BrandShowcase/    # Brand logo strip
│   ├── FloatingNav/      # Floating navigation bar
│   ├── Footer/           # Page footer
│   ├── GoogleReviews/    # Google reviews strip
│   ├── ParallaxHero/     # Parallax hero + orbs
│   ├── ProjectCard/      # Portfolio project card
│   ├── StatsCounter/     # Animated stats
│   ├── TeamSection/      # Team grid
│   ├── ...               # Motion & utility components
├── public/               # Static assets
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js ≥ 20.9** (required by Next.js 16)
- npm (or your preferred package manager)

### 1. Clone the repository

```bash
git clone https://github.com/abints47/MakTal-Clone.git
cd maktal-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the Next.js development server |
| `npm run build`    | Create an optimized production build |
| `npm start`        | Start the production server          |
| `npm run lint`     | Run ESLint checks                    |

### Production build

```bash
npm run build
npm start
```

## 📝 Notes

This project is a front-end clone/redesign concept intended for demonstration, learning, and UI practice. If you plan to use it as a production client site, update the branding, copy, assets, and contact details to match the actual business.

## 🤝 Contributing

Pull requests and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📬 Contact

Project repository: <https://github.com/abints47/MakTal-Clone>