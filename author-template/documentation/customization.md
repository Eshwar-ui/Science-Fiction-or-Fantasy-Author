# Customization Guide

This document explains how to customize the Aria Vance Author Template to fit your brand.

## 1. Modifying Branding
- **Logo**: Replace `assets/images/ui/favicon.webp` with your own logo.
- **Site Name**: Open the HTML files and find the `brand-logo` class to update the text.
- **Favicon**: Ensure the `favicon.webp` is updated and linked in the `<head>` of all pages.

## 2. Adjusting Colors
All core styling is controlled by CSS variables in `assets/css/style.css`.
To change the primary color, update the `--color-primary` variable in the `:root` block:

```css
:root {
  --color-primary: #954ff0; /* Update hex code here */
}
```

## 3. Updating Typography
1.  **Download New Fonts**: Use `google-webfonts-helper` to get the `.woff2` files for your new font.
2.  **Move Files**: Place the fonts in `/assets/fonts/`.
3.  **Update style.css**: Adjust the `@font-face` rules to point to your new `.woff2` filenames.
4.  **Set Variable**: Update the `--font-family` or `body` font-family property in CSS.

## 4. Changing Images
- For **Hero** sections: Update paths in the HTML following the `assets/images/hero/` folder.
- For **Book Covers**: Update references to `assets/images/content/`.
- All images must be in **WebP** for optimal performance.

## 5. Editing Content
- **LORE/Books**: Each section is clearly commented in the HTML (e.g., `<!-- SECTION: Books -->`).
- **SEO Tags**: Update the `<title>` and `<meta name="description">` tags on every page for your specific author brand.
