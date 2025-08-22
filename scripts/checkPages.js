const fs = require('fs');

const pages = ['index.html', 'about.html', 'blog.html', 'projects.html', 'contact.html'];

try {
  pages.forEach(page => {
    if (!fs.existsSync(page)) {
      throw new Error(`Missing ${page}`);
    }
  });
  console.log('All pages present');
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
