# Author Template Documentation

Welcome to the documentation for the Science Fiction / Fantasy Author HTML Template.

## 1. Installation
This is a static HTML template. No Node.js, NPM, or build step is required. Simply load the `index.html` file into your local browser to preview the site. You can host this directly on platforms like GitHub Pages, Vercel, Netlify, or standard Apache/Nginx web servers.

## 2. Design System Customization
### Colors & Typography
All global styles are controlled by CSS Variables located at the top of `assets/css/style.css`.
```css
:root {
  --color-primary: #2d1b4e;
  --color-accent: #d4af37;
  --font-heading: 'Cinzel', serif;
  --font-body: 'Inter', sans-serif;
}
```
Modify these hex codes to instantly update the entire theme. 

### Dark Mode
Dark mode is active by default. The `assets/js/main.js` script checks for the `data-theme="dark"` attribute on the `<html>` tag. You can switch default colors by editing `assets/css/dark-mode.css`.

## 3. The Members Vault & Dashboard System
The template includes a `dashboard.html` and `vault.html` page to simulate a "Superfan" experience.
- The Dashboard uses a lightweight JS tab system found in `assets/js/dashboard.js`. 
- The Vault utilizes CSS overlay classes (`.locked` vs `.unlocked`) to hide/show premium content.

*Note: As this is an HTML template, these are front-end placeholders. To make this functional, you must connect a backend like Firebase, Supabase, or a headless CMS (like Memberstack or Ghost).*

## 4. Next Steps & Upgrades (Developer Guide)
The template is primed for the following integrations:
1. **Interactive Maps:** Add Leaflet.js to `the-world.html` replacing the placeholder image to allow users to pan/zoom across the fictional map.
2. **Contact Form:** The form in `contact.html` is pointing to a Formspree placeholder URL. Create a Formspree account and replace the `action=""` URL.
3. **Newsletter:** The `index.html` and `coming-soon.html` forms are designed to be easily hooked into Mailchimp embedded forms.
4. **GSAP Animations:** To take this template to the next level, include the GSAP library and add scroll-triggered fade-ins to elements with the `.section-title` or `.card` classes.
