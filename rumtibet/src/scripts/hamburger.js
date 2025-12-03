
// Сворачиваем мобильное меню при клике по ссылке
document.querySelector('.header__nav-list').onclick = function() {
  document.querySelector('.mobile-menu').checked = false;
};

// Плавная загрузка страницы
setTimeout(function(){
      document.body.classList.add('body_visible');
    }, 200);


