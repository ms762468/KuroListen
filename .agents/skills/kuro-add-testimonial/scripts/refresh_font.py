"""Refresh the site's Iansui subset after adding testimonial text."""
import argparse
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('project', type=Path)
args = parser.parse_args()
dist = args.project.resolve() / 'dist'
text = ''.join((dist / name).read_text(encoding='utf-8') for name in ('index.html', 'script.js'))
text += ''.join(chr(i) for i in range(32, 127))
fonts = dist / 'assets' / 'fonts'
with TTFont(fonts / 'Iansui-Regular.ttf') as font:
    sub = subset.Subsetter()
    sub.populate(text=text)
    sub.subset(font)
    font.flavor = 'woff2'
    font.save(fonts / 'Iansui-Site.woff2')
print('Updated:', fonts / 'Iansui-Site.woff2')
