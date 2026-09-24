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

## 換電腦接續工作

新電腦安裝 Git 與 Node.js 後，下載專案：

```sh
git clone https://github.com/ms762468/KuroListen.git
cd KuroListen
node preview.cjs
```

若已下載過，先在專案目錄執行 `git pull --ff-only origin main`。預覽網址為 http://127.0.0.1:4173，不需要 npm install。要推送更新，請在新電腦登入有此儲存庫寫入權限的 GitHub 帳號。

在程式編輯工具中開啟此專案資料夾，先閱讀 `AGENTS.md`。每完成一個階段就 commit；更新推送到 `main` 後會自動部署。

### 目前已完成

- 以哭摟為中心，搭配貓、天竺鼠、倉鼠、刺蝟、兔子、小鳥的手繪首頁插圖。
- 「用心傾聽 ✧ 溫柔理解 ✧ 珍惜連結 ✧ 幽默翻譯」中英文標語。
- 「關於我」最新文案與指定換行。
- 服務項目與真實見證之間的十項預約須知，支援展開、中英文與手機排版。
- 全站採用完整芫荽體 `Iansui-Regular.woff2`，不再依賴舊版子集字型。
- GitHub Pages 自動部署與三則見證輪播、完整故事彈窗。

見證整理技能隨專案存放在 `.agents/skills/kuro-add-testimonial/`。其中舊版字型子集工具保留備查，現行字型規則以 `AGENTS.md` 為準。

GitHub 保存網站程式碼、成品圖片、字型與專案工作規則；對話紀錄、原始聊天 TXT、原始參考照片及本機登入資訊不在儲存庫中。若後續需要重新整理原始素材，請在另一台電腦另行提供。`.openai/` 是本機舊有平台設定，不影響目前 GitHub Pages 部署。
