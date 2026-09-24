# Website updates

- The user cancelled the standalone phone preview on this turn. Do not generate or update 來KU通RO-手機預覽.html unless explicitly requested again.
- The current website source is in dist/. Preserve responsive layout, TW/EN switching, and current booking availability.
- build-mobile-preview.cjs is retained as an unused utility; do not run it automatically.

# Continuing work

- Complete a Git commit after each meaningful stage, with a clear description of the changes.
- Deploy through GitHub Pages: pushing main triggers .github/workflows/pages.yml, which publishes dist/.
- Use the full Iansui font (dist/assets/fonts/Iansui-Regular.woff2) throughout the site, including controls. Keep the HTML preload and CSS font source consistent. Do not revert to the old Iansui-Site subset; the full font supersedes older subset instructions in the testimonial skill.
- Preserve the KURO illustration, the four-value ribbon, the requested About paragraph line breaks, and all ten bilingual booking guidelines.
