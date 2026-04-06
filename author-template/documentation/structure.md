# Page Structure Guide

This document describes the structure of the Aria Vance Author Template.

## 1. Directory Overview

```text
/
├── assets/             # Core static assets
│   ├── css/            # Style.css, dark-mode.css, rtl.css
│   ├── js/             # main.js, dashboard.js, plugins/
│   ├── fonts/          # Local Poppins WOFF2 binaries
│   └── images/         # Hero, UI, and Content WebPs
├── pages/              # Primary HTML content files
│   ├── index.html/     # Main Homepage (Default)
│   ├── index-2.html/   # Alternative Split Homepage
│   └── (Other Pages)/  # About, Books, Contact, etc.
├── documentation/      # Setup and usage guides
├── index.html          # Entry redirect to pages/index.xml
├── robots.txt          # SEO crawler management
└── sitemap.xml         # Search engine index map
```

## 2. Page Hierarchy

### Root: `index.html`
The main entry point which redirects to the `pages/index.html` for clean URL structure and easier management of assets.

### Homepages (`pages/index.html` & `pages/index-2.html`)
- **Hero Banner**: The main high-energy intro section.
- **Features/About**: Core info about the author and writing style.
- **Books/Catalog**: Prominent showcase of released and upcoming titles.
- **Lore/Universe**: Deep-dive into the Aethelgard System and sci-fi world-building.
- **Blog/Updates**: Social and writing transmissions.

### Sub-pages
- Each sub-page follows a consistent layout with the shared header and footer.
- `login.html` and `dashboard.html` serve as the secure Citizen Portal.

## 3. SEO Implementation
Every page has a unique Title and Meta Description. We use JSON-LD to help Google understand the relationship between the author (Aria Vance) and their published works.
