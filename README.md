# 來KU通RO — 阿玲的寵物溝通網站

[檢視網站](https://ms762468.github.io/KuroListen/) · [部署狀態](https://github.com/ms762468/KuroListen/actions)

純 HTML、CSS 與 JavaScript，支援響應式排版及繁體中文／英文切換。

## 網站原始碼

目前正式版本位於 `dist/`，GitHub Pages 僅發布此目錄。

- `dist/index.html`：網頁內容。
- `dist/styles.css`：樣式與響應式排版。
- `dist/script.js`：語言切換、見證輪播及故事彈窗。
- `dist/assets/`：圖片與字型；芫荽體的 SIL OFL 授權保留於字型目錄。

預約透過官方 LINE，Instagram 提供預約資訊與須知。離世溝通目前暫不接案。

## 本機預覽

安裝 Node.js 後執行 `node preview.cjs`，開啟 http://127.0.0.1:4173。

## 更新與發布

修改 `dist/` 後，將變更提交並推送至 `main`：

```sh
git add dist
git commit -m "Update website"
git push origin main
```

GitHub Actions 會自動部署，進度可在本儲存庫的 Actions 頁面查看。首次啟用時，Settings → Pages → Source 須設為 GitHub Actions。

根目錄 `index.html` 會導向 `dist/`；根目錄舊版樣式與腳本保留備查。`build-mobile-preview.cjs` 為未使用的工具，不會在部署時執行。
