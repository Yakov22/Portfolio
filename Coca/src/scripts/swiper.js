
let swiper = new Swiper('.swiper-container', {
  direction: 'horizontal', 
  loop: true, 
  pagination: {
    el: '.swiper-pagination',
  },
  // кнопки вперед назад ----------------------------
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //  Включение / отключение --------------------------
  // перетаскивание на ПК
  simulateTouch: true,
  // Чувствительность свайпа
  touchRatio: 1,
  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,
  // Курсор перетаскивания
  grabCursor: true,
  // Переключение при клике
  slideToClickedSlide: true,

  // Упраление клавиатурой -------------------------------
  keyboard: {
    // Включить/выключить
    enable: true,
    // Включить-выключить только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
    // Включить-выключить упр-е клавишами pageUp - pageDown
    pageUpDown: true,
  },

  // Количество слайдов на странице --------------------
  slidesPerView: 2, 

  // Отключение слайдера если слайдов меньше чем помещается на стр
  watchOverflow: false,

  // Отступы между слайдами
  spaceBetween:  32,

  // Количество пролистываемых слайдов
  slidesPerGroup: 1,

  // Скорость
  speed: 700,

  // Эффект переключения слайдов 
  effect: 'slidde', 

// Брейкпоинты  -----------------------------------
    breakpoints: {
    250: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    708: {
      slidesPerView: 2,
      spaceBetween: 15
    },
  }
});
