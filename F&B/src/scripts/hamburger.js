
// Сворачиваем мобильное меню при клике по ссылке
document.querySelector('.menu').onclick = function() {
  document.querySelector('.mobile-menu').checked = false;
};
// Плавная загрузка страницы
setTimeout(function(){
  document.body.classList.add('body_visible');
}, 200);


