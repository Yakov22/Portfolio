
let about_swiper = new Swiper('.about-swiper', {
  direction: 'horizontal', 
  loop: true,
  // Пагинация -----------------------------------------------------
  pagination: {
    el: '.swiper-pagination',

    // Буллеты
    type: 'fraction', // -->  fraction bullets prodressbar
    clickable: true,

    // динамические буллеты
    dynamicBullets: true,

    // Кастомные буллеты
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },

    // Кастомный вывод фракции
    renderFraction: function (currentClass, TotalClass) {
      return 'photo <span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + TotalClass + '"></span>';
    }

  },

  // кнопки вперед назад ----------------------------
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Скролл ----------------------------------------
  scrollbar: {
    el: '.swiper-scrollbar',
    // Перемотка скроллом
    draggable: true,
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
  // slideToClickedSlide: true,

  // Упраление клавиатурой -------------------------------
  keyboard: {
    // Включить/выключить
    enable: true,
    // Включить-выключить только когда слайдер в пределах вьюпорта
    onlyInViewport: false,
    // Включить-выключить упр-е клавишами pageUp - pageDown
    pageUpDown: true,
  },

  // Количество слайдов на странице --------------------
  slidesPerView: 3, // Можно вводить дробное число

  // Отступы между слайдами
  spaceBetween: 20,

  // Скорость
  speed: 700,

  // Эффект переключения слайдов ---------------------------
  effect: 'slidde', 

// Брейкпоинты  -----------------------------------
    breakpoints: {
    250: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    710: {
      slidesPerView: 3,
      spaceBetween: 15
    },
  }
});

// --------------------------
