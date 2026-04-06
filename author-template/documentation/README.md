# Aria Vance Author Template Documentation

Welcome to the official documentation for the **Aria Vance Author Template**. Use the guides below to set up, customize, and maintain your high-end cinematic website.

---

## 📚 Guides & Resources
- 🚀 **[Installation Guide](./installation.md)**: Get started in minutes.
- 🎨 **[Customization Guide](./customization.md)**: Adjust branding, colors, and typography.
- 🏗️ **[Page Structure](./structure.md)**: Explore the layout and SEO architecture.
- 📜 **[Changelog](./changelog.md)**: Track recent updates and performance fixes.
- 🏆 **[Credits](./credits.md)**: Attributions for fonts, icons, and libraries.
- 🆘 **[Support](./support.md)**: Contact us for help and view the FAQ.

---

## 🔍 Core Highlights

## 1. Cinematic UI & Design System

### A. Color Palette
- **Primary (Night Navy)**: `#0B1D3A` - The deep space aesthetic.
- **Accent (Champagne Gold)**: `#D4AF37` - Premium branding.
- **Gradients**: Mixes of Purple (`#954FF0`) and Dark Blue for a "Nebula" feel.

### B. Typography
- **Core Font**: **Poppins** (Local Hosting).
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold).
- **Setup**: All fonts are served locally from `assets/fonts/` for maximum performance and GDPR compliance.

### C. Glassmorphism
- Used in navbars, cards, and auth monoliths.
- `backdrop-filter: blur(20px)` paired with soft borders (`border: 1px solid rgba(255,255,255,0.05)`).

---

## 2. Asset Strategy (WebP & Premium Generation)

### A. Image Optimization
- All images are converted to **WebP** for reduced payload and faster LCP.
- Organization:
  - `assets/images/hero/`: Cinematic background banners.
  - `assets/images/ui/`: Brand assets like favicons and logos.
  - `assets/images/content/`: Context-specific imagery (book covers, screenshots).

### B. AI-Enhanced Visuals
- Premium hero assets and book covers were generated using state-of-the-art cinematic prompts to ensure a high-end author experience.

---

## 3. SEO & Connectivity

### A. Meta-Data
- Descriptive Title Tags tailored for science fiction and fantasy keywords.
- Open Graph (OG) and Twitter Card tags for high-engagement social sharing.
- Canonical links and semantic HTML consistency.

### B. Structured Data (JSON-LD)
- Includes `Person` (Author) and `Book` (where applicable) schema to improve Google Search rich snippets.

### C. Performance Configuration
- `robots.txt` and `sitemap.xml` are predefined for crawler efficiency.
- Lazy loading (`loading="lazy"`) applied to non-critical below-the-fold images.

---

## 4. Maintenance Guide

### Replacing Images
1. Generate or source a high-quality capture.
2. Convert it to **WebP** (recommended size: 1920x1080 for heroes, 800x1200 for books).
3. Place in the respective `assets/images/` subfolder.
4. Update the path in the relevant `.html` file.

### Adding New Fonts
1. Use `google-webfonts-helper` to download `.woff2` files.
2. Add `@font-face` rules to `assets/css/style.css`.
3. Update the `font-family` variables in `:root`.
