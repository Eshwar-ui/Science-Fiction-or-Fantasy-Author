const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'pages');
const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert RTL CSS
  if (!content.includes('rtl.css')) {
    content = content.replace('</head>', '  <!-- RTL Support Settings -->\n  <link rel="stylesheet" href="../assets/css/rtl.css">\n</head>');
  }

  // Insert RTL JS
  if (!content.includes('rtl-ltr.js')) {
    content = content.replace('</body>', '  <!-- RTL Support Script -->\n  <script src="../assets/js/rtl-ltr.js"></script>\n</body>');
  }

  // Insert RTL Button
  if (!content.includes('dir-toggle')) {
    const buttonHtml = `<button class="dir-toggle" aria-label="Toggle RTL/LTR"
            style="border-color: var(--color-border); color: var(--color-text); margin-right: 0.5rem; background: transparent; border-radius: 50%; width: 40px; height: 40px; border: 1px solid var(--color-border); display: inline-flex; justify-content: center; align-items: center; cursor: pointer; transition: all 0.3s ease;"><i
              class="fa-solid fa-language"></i></button>\n          `;
    content = content.replace(/<button class="theme-toggle"/g, buttonHtml + '<button class="theme-toggle"');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated: ' + file);
});
