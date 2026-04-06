# Installation Guide

Follow these steps to get the Aria Vance Author Template up and running on your local machine or web server.

## 1. Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari).
- A local web server environment (e.g., Live Server for VS Code, Apache, or Nginx) is recommended for the best experience with paths and local assets.

## 2. Setup Steps
1. **Download/Extract**: Unzip the template files into your desired project directory.
2. **Directory Check**: Ensure you have the following structure:
   - `/assets/`: Contains CSS, JS, Fonts, and Images.
   - `/pages/`: Contains all HTML content pages.
   - `index.html`: The root entry point (redirects to the main homepage).
3. **Launch**: Open `index.html` in your browser. If using VS Code, right-click and select "Open with Live Server".

## 3. Deployment
To deploy to a live server:
1. Upload all files and folders to your public HTML directory (e.g., `public_html`).
2. Ensure that the `.htaccess` file (if you create one) allows for standard HTML routing.
3. Verify that all asset paths in the HTML files point correctly to the `/assets/` directory.

## 4. Troubleshooting
- **Missing Fonts**: Ensure the `assets/fonts/` folder contains the `.woff2` files.
- **Images Not Loading**: Check that the images are in `assets/images/` and follow the `hero/`, `ui/`, or `content/` categorization.
