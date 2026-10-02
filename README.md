# 🏎️ McLaren 720S - Scroll Car Animation

An interactive, high-performance scroll-driven web experience built with **React**, **TypeScript**, and **GSAP ScrollTrigger**. As the user scrolls vertically, a top-down McLaren 720S smoothly drives across a central racing strip, progressively unrolling a vibrant trail that reveals a bold typographic headline while staggering statistical cards into view.

---

## ✨ Features

- **Smooth Scroll-Driven Physics**: Controlled by GSAP's `ScrollTrigger` with sub-pixel interpolation and smooth scrubbing.
- **Dynamic Road & Headline Reveal**: The green track (`#45dc7a`) expands in lockstep with the car's rear wheel, progressively unveiling the `"WELCOME ITZFI"` headline.
- **Staggered Metric Cards**: Four distinct statistical cards fade, scale, and slide into place across different scroll thresholds:
  - **Card 1 (`#DEF54F` / Lime Yellow)**: `58%` — *Increase in pick up point use*
  - **Card 2 (`#333333` / Charcoal Dark)**: `27%` — *Increase in pick up point use*
  - **Card 3 (`#6AC9FF` / Electric Blue)**: `23%` — *Decreased in customer phone calls*
  - **Card 4 (`#FA7328` / Vivid Orange)**: `40%` — *Decreased in customer phone calls*
- **Responsive & Fluid Design**: Fully responsive layout utilizing CSS `clamp()` and viewport-based dimensions (`vw`/`vh`) to ensure flawless display across all screen sizes.
- **Optimized Initial Render**: Pre-aligned inline styles ensure zero layout shift or visual popping prior to animation hydration.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation Engine**: [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS

---

## 📁 Project Structure

```text
Car-Animation/
├── public/
│   └── car.png          # High-resolution car asset backup
├── src/
│   ├── assets/
│   │   └── car.png      # Top-down McLaren 720S PNG asset
│   ├── App.tsx          # Main animation timeline and layout
│   ├── index.css        # Global design tokens and scrollbar styles
│   └── main.tsx         # React application entry point
├── index.html           # HTML document entry
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript compiler configuration
└── vite.config.ts       # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/unbothered-29/Car-Animation.git
cd Car-Animation
npm install
```

### Running Locally

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000/`.

### Building for Production

Create an optimized production bundle:

```bash
npm run build
```

The compiled assets will be output to the `dist/` directory.

### Code Quality & Type Checking

Run the TypeScript compiler to check for type errors:

```bash
npm run lint
```

---

## 📄 License

This project is licensed under the Apache-2.0 License.
