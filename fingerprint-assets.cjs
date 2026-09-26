// Keep published versions so cached HTML can still load its matching assets.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.join(__dirname, 'dist');
const htmlPath = path.join(root, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
for (const [name, extension] of [['styles', 'css'], ['script', 'js']]) {
  const data = fs.readFileSync(path.join(root, `${name}.${extension}`), 'utf8').replace(/\r\n/g, '\n');
  const hash = crypto.createHash('sha256').update(data).digest('hex').slice(0, 16);
  const filename = `${name}.${hash}.${extension}`;
  const pattern = new RegExp(`(["'])${name}(?:\\.[a-f0-9]{16})?\\.${extension}(?:\\?[^"']*)?\\1`, 'g');
  if (!pattern.test(html)) throw new Error(`Missing ${name} reference`);
  pattern.lastIndex = 0;
  html = html.replace(pattern, `"${filename}"`);
  fs.writeFileSync(path.join(root, filename), data);
  console.log(filename);
}
fs.writeFileSync(htmlPath, html);
