---
name: kuro-release
description: 發布來KU通RO正式版本時，檢查 dev 並合併到 main。使用者明確要求正式發布、發布正式版或把 dev 合併到 main 時使用；一般修改、commit、同步 GitHub 或更新預覽不代表正式發布。
---

# 來KU通RO正式發布

## 分支與授權

- 專案為目前 KuroListen 儲存庫，遠端應是 ms762468/KuroListen；先核對 AGENTS.md、git remote 與分支狀態。
- 平常開發、commit、推送及預覽部署皆使用 dev。只有使用者在當次工作中明確要求正式發布或將 dev 合併到 main，才執行合併與推送 main。建立或修改本 skill 不構成發布授權。
- 使用者已明確要求發布時，完成必要檢查後直接執行，不重複要求同一份批准。若只說「更新」「推上 GitHub」，依預設更新 dev；若語意確實無法判斷，先詢問是否正式發布。

## 發布流程

1. 確認工作區狀態並 fetch origin，檢查本機與遠端 dev、main 的差異。保留既有未提交工作，不使用 reset --hard、強制推送或自動丟棄檔案。
2. 發布的是已完成、已提交的 dev 版本。若有本次應納入的修改，先完成並提交到 dev；若無法判斷未完成變更是否該發布，停在合併前釐清。
3. 檢查 origin/main..dev 的提交及差異，簡述本次發布內容。核對網站來源 dist/、雙語功能、系統字型、既有見證及預約須知，依實際修改執行必要檢查。
4. 在 dev 執行 node fingerprint-assets.cjs；若產生更新，連同新的雜湊資源與 index.html 一起提交。保留歷史雜湊資源。執行 node --check dist/script.js 和 git diff --check。
5. 推送 dev，確認該 SHA 的預覽部署成功。切換 main 並以 fast-forward 同步 origin/main，再將核實的 dev 提交合併到 main；可快轉時使用快轉，有分歧時使用正常 merge，不改寫歷史。簡單衝突可依已確認意圖處理；若涉及不明的正式內容變更則先釐清。合併後若需修正，重新驗證產物。
6. 推送 main。遠端有新提交而拒絕時重新 fetch 並檢視差異，不強推、不盲目重試。推送完成後回到 dev，確認本機與遠端狀態。
7. 回報發布／合併 SHA、主要變更、驗證與部署結果。若合併產生新的 main 提交而 dev 尚未包含，明確記錄分支差異，不擅自丟棄任何一側變更。

## 合併與正式上線的區別

目前 .github/workflows/pages.yml 只接受 dev，GitHub Pages 的 github-pages 環境也只允許 dev。既有 https://ms762468.github.io/KuroListen/ 是開發預覽。

- 將 dev 合併到 main 並不會自動發布正式網站。
- 每次發布先檢查是否已有新的正式部署設定。若已設定且在使用者授權範圍內，執行並查核對應 SHA 的正式部署結果。
- 若尚未設定，仍可完成使用者明確授權的 dev → main 合併；報告「已合併正式分支，正式部署尚未設定」，不能宣稱已正式上線。
- 不自行把現有預覽網址改成正式站，也不自行新增主機、網域或停用 dev 預覽。需要正式上線但目的地不明時，詢問部署目的地。
