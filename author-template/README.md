# Aria Vance | Bestselling Sci-Fi & Fantasy Author Template

A premium, cinematic author website designed for high-end science fiction and fantasy storytelling. This template incorporates advanced UI techniques, local asset optimization, and robust SEO to elevate the author's digital brand.

---

## 📚 Technical Documentation

Explore the following guides to fully customize your author platform:
- 🚀 **[Installation](./documentation/installation.md)**
- 🎨 **[Customization](./documentation/customization.md)**
- 🏗️ **[Page Structure](./documentation/structure.md)**
- 🆘 **[Support](./documentation/support.md)**

---

## ⚡ Key Cinematic Features

- **Liquid Glass UI**: Stunning glassmorphism navbars and cards with `backdrop-filter: blur(20px)`.
- **Advanced GSAP Animations**: Smooth transitions and parallax effects across the starfield banners.
- **Atmospheric Starborn Backgrounds**: High-end sci-fi visuals and nebula gradients.
- **Framer Motion Micro-interactions**: Hover-triggered shine layers and 3D card tilts.
- **Premium Dark Mode**: Deep night-navy and champagne gold theme for a professional literary feel.

---

## 🚀 Performance & SEO

- **Local Hosting (No CDN)**: All fonts (**Poppins**) are hosted locally in `assets/fonts/` for privacy and speed.
- **WebP Image Ecosystem**: All images are serving in `.webp` format with a 70%+ reduction in payload.
- **Search Engine Ready**: 
  - Complete `<head>` meta-data (description, keywords, OG:Tags).
  - JSON-LD Structured Data (`Person` & `Book` Schema).
  - Pre-configured `robots.txt` and `sitemap.xml`.
- **LCP-First Asset Strategy**: Hero assets are pre-loaded; secondary images use `loading="lazy"`.

---

## 🏗️ Project Architecture

```text
author-template/
├── assets/
│   ├── css/            # Style.css, dark-mode.css, etc.
│   ├── fonts/          # Local Poppins WOFF2 files.
│   ├── images/
│   │   ├── hero/       # Hero backgrounds (hero-new.webp).
│   │   ├── content/    # Book covers and portal visuals.
│   │   └── ui/         # Favicons and logos.
│   └── js/             # GSAP, AOS, and custom scripts.
├── documentation/      # Detailed UI/SEO optimization guides.
├── pages/              # All HTML pages (index, books, blog, etc.).
├── robots.txt          # SEO crawler management.
└── sitemap.xml         # Search engine index map.
```

---

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript.
- **Styling**: Tailwind CSS & Vanilla CSS (Custom Tokens).
- **Animations**: GSAP, Framer Motion, AOS.
- **Iconography**: Font Awesome 6 Pro (CDN-integrated).
- **Interactivity**: Swiper.js for book carousels.

---

## 💡 Quick Start

1.  **Clone** the repository.
2.  **Run** a local dev server (e.g., Live Server or `npx serve`).
3.  **Explore** the `documentation/` folder for customization tips.

---

Designed for the Cosmos. Crafted by Antigravity.
