const header = document.querySelector('.header');
const checked = document.querySelector('.mobile-menu');
const body = document.querySelector('body')
// Фиксируем header и body при открытом меню - возвращаем обратно при клике на Х
document.querySelector('.mobile-menu').onclick = function() {
  if (checked.checked == true) {
    header.style.position = 'sticky';
    body.style.overflow = 'hidden';
  } else {
    header.style.position = 'static';
    body.style.overflow = 'visible';
  }
}; 
// Сворачиваем мобильное меню при клике по ссылке и разблокируем body и header
document.querySelector('.menu').onclick = function() {
  document.querySelector('.mobile-menu').checked = false;
  header.style.position = 'static';
  body.style.overflow = 'visible';
};

