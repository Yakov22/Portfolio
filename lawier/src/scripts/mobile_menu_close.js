// Закрываем мобильное меню при клике на ссылку
document.querySelector('.header__nav-list').onclick = function() {
  document.querySelector('.mobile-menu').checked = false;
};