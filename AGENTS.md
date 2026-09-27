# Website updates

- The user cancelled the standalone phone preview on this turn. Do not generate or update 來KU通RO-手機預覽.html unless explicitly requested again.
- The current website source is in dist/. Preserve responsive layout, TW/EN switching, and current booking availability.
- build-mobile-preview.cjs is retained as an unused utility; do not run it automatically.

# Continuing work

- After editing dist/styles.css or dist/script.js, run node fingerprint-assets.cjs before committing. Commit the generated hashed files and updated dist/index.html together. Keep older hashed assets so cached HTML remains usable. Edit the original styles.css/script.js, never their generated copies. The Pages workflow checks this before publishing.

- Complete a Git commit after each meaningful stage, with a clear description of the changes.
- Deploy through GitHub Pages: pushing main triggers .github/workflows/pages.yml, which publishes dist/.
- Use local system fonts throughout both Chinese and English pages, including all controls. The user selected system-ui on 2026-09-27. Do not add web-font downloads, font preloads, or page-hiding font gates. This supersedes the older Iansui instructions in skills.
- Preserve the KURO illustration, the four-value ribbon, the requested About paragraph line breaks, and all ten bilingual booking guidelines.
