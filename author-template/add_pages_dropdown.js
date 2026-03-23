const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'pages');
const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.html'));

const pagesDropdownHtml = `
        <!-- Pages Dropdown -->
        <div class="nav-item-dropdown">
          <a class="nav-link dropdown-toggle">Pages <i class="fa-solid fa-chevron-down" style="font-size: 0.7em;"></i></a>
          <div class="dropdown-menu">
            <a href="404.html" class="dropdown-item">404 Error</a>
            <a href="coming-soon.html" class="dropdown-item">Coming Soon</a>
          </div>
        </div>
        <div class="nav-actions">`;

files.forEach(file => {
  if (file === 'login.html' || file === 'register.html') {
    return; // Skip these since they don't have navbars anymore
  }

  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Only insert if it doesn't already exist
  if (!content.includes('Pages Dropdown') && content.includes('<div class="nav-actions">')) {
    content = content.replace('<div class="nav-actions">', pagesDropdownHtml);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Added Pages dropdown to ' + file);
  }
});
