
// Сворачиваем мобильное меню при клике по ссылке
document.querySelector('.header__list').onclick = function() {
  document.querySelector('.mobile-menu').checked = false;
};

// Имитируем запаздывание хедера
let header = document.querySelector('.header')
let input = document.querySelector('.mobile-menu');
// let hamb = document.querySelector('.hamb')
window.addEventListener('scroll', function () { 
  const scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > 50 && !input.checked) {
    header.style.marginTop = '-120px';
  }
  else {
    header.style.marginTop = '0';
  }
  // console.log(scrollPosition);
});

// Плавная загрузка страницы
setTimeout(function(){
  document.body.classList.add('body_visible');
}, 200);

