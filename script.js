document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  document.getElementById('form-status').textContent = '表單欄位已填寫完成。這是展示版本，訊息尚未送出，也不會儲存。';
});
