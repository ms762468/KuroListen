// Run after every website update: node build-mobile-preview.cjs
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
let css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };
function embed(relative) {
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep)) throw new Error('Asset outside dist: ' + relative);
  return 'data:' + (mime[path.extname(file)] || 'application/octet-stream') + ';base64,' + fs.readFileSync(file).toString('base64');
}
css = css.replace(/url\(["']?(assets\/[^"')]+)["']?\)/g, (_, asset) => 'url("' + embed(asset) + '")');
html = html.replace(/<link\b[^>]*rel="preload"[^>]*>/g, '');
html = html.replace('<link rel="stylesheet" href="styles.css">', () => '<style>' + css + '</style>');
html = html.replace('<script src="script.js" defer></script>', '');
html = html.replace(/src="(assets\/[^\"]+)"/g, (_, asset) => 'src="' + embed(asset) + '"');
html = html.replace('</body>', () => '<script>' + js.replace(/<\/script/gi, '<\\/script') + '</script></body>');
const output = path.join(__dirname, '來KU通RO-手機預覽.html');
fs.writeFileSync(output, html);
if (/src="(?:assets\/|script\.js)|href="styles\.css"/.test(html)) throw new Error('Unembedded local asset');
console.log('Created: ' + output);
console.log('Bytes: ' + Buffer.byteLength(html));
