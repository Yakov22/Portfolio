const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal', // --> vertical horizontal 
  loop: true, // Прокрутка по кругу

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
      return 'clip <span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + TotalClass + '"></span>';
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

  // Управление колесом мыши  -------------------------------
  mousewheel: {
    // Чувствительность колеса
    sensitivity: 1,
    // Класс обьекта на котором будет срабатывать прокр-ка мышью
    eventsTarget: ".swiper-container",
  },

  // Автовысота-----------------------------------------
  // autoHeight: true,

  // Количество слайдов на странице --------------------
  slidesPerView: 1, // Можно вводить дробное число

  // Отключение слайдера если слайдов меньше чем помещается на стр
  // watchOverflow: true,

  // Отступы между слайдами
  // spaceBetween: 20,

  // Количество пролистываемых слайдов
  // slidesPerGroup: 1,

  // Активный слайд по центру
  // centeredSlides: true,

  // Стартовый слайд
  // initialSlide: 0,

  // Мультирядность. Hеобх. задать высоту слайдера в CSS
  // slidesPerColumn: 2, 

  // Количество дублирующих слайдов
  // loopedSlides: 0,

  // Свободный режим
  // freeMode: true,

  // Автопрокрутка
  // autoplay: {
  //   delay: 1000, // Пауза между прокруткой
  //   stopOnLastSlide: false, // Закончить на последнем слайде
  //   disableOnInteraction: true  // Отключить после ручного переключения
  // }

  // Скорость
  speed: 300,

  // Эффекты переключения слайдов ---------------------------
  effect: 'slidde', // coverflow cube flip fade slidde 

  // Дополнение к flip
  // flipEffect: {
  //   // Тень
  //   slideShadows: true,
  //   // Показ только активного слайда
  //   limitRotation: true
  // },

  // Дополнение к coverflow
  // coverflowEffect: {
  //   // Угол
  //   rotate: 20,
  //   // Наложение
  //   stretch: 50,
  //   // Тень
  //   slideShadow: true,
  // },

  // Дополнение к cube
  // flipEffect: {
  //   // Настройка тени
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },
  //--------------------------------------------------------

// Брейкпоинты  -----------------------------------
  //   breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 15
  //   },
  //   708: {
  //     slidesPerView: 2,
  //     spaceBetween: 15
  //   },
  //   1080: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   }
  // }
});

// --------------------------
