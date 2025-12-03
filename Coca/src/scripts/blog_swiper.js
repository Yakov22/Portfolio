
let blogSwiper = new Swiper('.blog-swiper', {
  direction: 'horizontal', 
  loop: true, 

  // кнопки вперед назад ----------------------------
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // перетаскивание на ПК
  simulateTouch: true,
  // Чувствительность свайпа
  touchRatio: 1,
  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,
  // Курсор перетаскивания
  grabCursor: true,
  // Переключение при клике

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
  slidesPerView: 3,
  // Отступы между слайдами
  spaceBetween: 20,
  // Активный слайд по центру
  centeredSlides: false,
  // Скорость
  speed: 700,

  effect: 'slidde', 
// Брейкпоинты  -----------------------------------
    breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
  }
});

