# Mall of America — Interactive Sales Deck

A cinematic, fully interactive browser-based sales deck built for Mall of America. Designed to replace fragmented pitch processes with a single, immersive experience for prospective tenants, sponsors, and event partners.

**Live Demo:** [Add your Netlify URL here after deployment]

---

## What This Is

This is not a website or a slide deck exported to HTML. It is a purpose-built interactive sales tool that tells Mall of America's story through data, imagery, and narrative — with the visual polish of a luxury brand and the interactivity of a modern web experience.

Built for three audiences:
- **Retail tenants** — luxury, flagship, mid-tier, F&B, pop-up
- **Brand sponsors** — naming rights, activations, digital inventory
- **Event partners** — concerts, corporate events, product launches

---

## Features

- Deck-style navigation (non-linear, arrow + dot controls)
- Animated stat counters on the Why MOA slide
- Tiered retail environment with brand positioning
- Entertainment & attractions showcase
- Events platform with venue capacity data
- Interactive CTA with three leasing/sponsorship/event paths
- Contact form with confirmation state
- Local image assets from Mall of America

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React + Vite | Frontend framework & build tool |
| Framer Motion | Animations & transitions |
| Plain CSS-in-JS | Styling (no CSS framework) |

---

## AI Tools Used

| Tool | How I Used It |
|------|--------------|
| Claude (Anthropic) | Code generation, component architecture, copy writing, debugging |
| Midjourney / DALL·E | Supplemental image generation where real assets were unavailable |

---

## Setup Instructions

**Requirements:** Node.js 18+ installed

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mall-deck.git

# Navigate into the project
cd mall-deck

# Install dependencies
npm install

# Run locally
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Project Structure

mall-deck/
├── public/
│   └── images/          # Local MOA image assets
├── src/
│   ├── components/
│   │   └── Nav.jsx      # Fixed navigation bar
│   ├── sections/
│   │   ├── Hero.jsx         # Opening cinematic slide
│   │   ├── WhyMOA.jsx       # Data & stats slide
│   │   ├── Retail.jsx       # Retail environment slide
│   │   ├── Entertainment.jsx # Attractions slide
│   │   ├── Events.jsx       # Events platform slide
│   │   └── CTA.jsx          # Contact & action slide
│   ├── App.jsx          # Deck controller & navigation logic
│   └── index.css        # Global styles & CSS variables
└── README.md

---

## Design Decisions

**Deck over scroll:** The brief explicitly referenced Digideck as the format. A scroll-based site would feel like a website. Full-screen slides with arrow navigation feel like a premium pitch tool a salesperson can screen-share live.

**Gold & dark palette:** Inspired by luxury brand references in the brief (Hermès, Saint Laurent). Dark backgrounds make imagery pop. Gold signals premium positioning without being loud.

**Framer Motion for animations:** Entrance animations on every slide make content feel intentional and cinematic rather than static. Counters on the Why MOA slide make data feel alive.

**Local images over CDN:** External image URLs introduced reliability issues during development. All images are bundled locally for consistent load performance.

---

## What I Would Improve With More Time

- Add a real MOA background video to the hero (autoplay, muted, looped)
- Build a full Sponsorship sub-module with tier packages and pricing
- Build a Leasing sub-module segmented by tenant category
- Add keyboard arrow navigation for the deck
- Add swipe gesture support for tablet users
- Improve mobile layout (currently optimized for desktop/tablet)
- Add a Lighthouse performance audit and lazy loading
- Integrate real MOA visitor data via a live API

---

## Image Credits

Images sourced from Wikimedia Commons under Creative Commons licenses.
All Mall of America trademarks and branding belong to Triple Five Group.
This project is a portfolio/interview submission and is not affiliated with Mall of America.

---

*Built as part of an interview project for Liat.ai*