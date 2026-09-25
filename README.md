# TEDx KLH Bowrampet 2026 — Metamorphosis

> **The Unseen Process of Becoming**

Official website for **TEDx KLH University Bowrampet 2026** — an independently organized TED event on **04 November 2026** at KLH University Bowrampet Campus, Hyderabad.

---

## 🦋 About

**METAMORPHOSIS** — 100 exclusive delegates. 8 transformative talks. One unforgettable day.

Tickets at ₹511 (unified pass). Live at KLH Bowrampet, Hyderabad.

---

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** — lightning-fast build tool
- **Tailwind CSS v4** — utility-first styling
- **Motion (Framer Motion)** — animations
- **WebGL / GLSL** — hero shader background
- **Google Material Symbols** — icon system

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── MetamorphosisIntro.tsx   # Full-screen video opening animation
│   ├── HeroShader.tsx           # WebGL procedural hero background
│   ├── MetamorphosisArtwork.tsx # SVG butterfly centerpiece
│   ├── ThemeDossier.tsx         # Theme deep-dive section
│   ├── ExperienceShowcase.tsx   # Tabbed experience showcase
│   ├── SpeakerRoster.tsx        # Speaker management
│   ├── BookingEngine.tsx        # ₹511 ticket booking
│   ├── CheckoutModal.tsx        # Checkout flow
│   ├── Countdown.tsx            # Live countdown timer
│   ├── TeamSection.tsx          # Team showcase
│   ├── VenueSection.tsx         # Venue + Google Maps
│   └── FaqSection.tsx           # FAQ accordion
├── hooks/
│   └── useScrollReveal.ts       # IntersectionObserver scroll animations
├── App.tsx
├── main.tsx
└── index.css                    # Global styles + animations
public/
└── butterfly-transformation.mp4 # Opening animation video
```

---

## 🌐 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Framework: **Vite** — auto-detected
4. Deploy ✓

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder at netlify.com/drop
```

---

## 📝 License

This independent TEDx event is operated under license from TED.  
© 2026 TEDxKLH University Bowrampet. All Rights Reserved.
