
const pinterest = new Swiper('.pinterest-slider', {
  direction: 'horizontal',  
  loop: true, 
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction', 
  },
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
  slideToClickedSlide: true,
  // Упраление клавиатурой 
  keyboard: {
    // Включить/выключить
    enable: true,
    // Включить-выключить только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
    // Включить-выключить упр-е клавишами pageUp - pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши  
  mousewheel: {
    // Чувствительность колеса
    sensitivity: 1,
    // Класс обьекта на котором будет срабатывать прокр-ка мышью
    eventsTarget: ".pinterest-slider",
  },

  // Автовысота
  autoHeight: true,
  // Количество слайдов на странице 
  slidesPerView: 1, 
  // Отключение слайдера если слайдов меньше чем помещается на стр
  watchOverflow: true,
  // Отступы между слайдами
  spaceBetween: 20,
  // Активный слайд по центру
  centeredSlides: true,
  // Стартовый слайд
  initialSlide: 1,
  speed: 800,
  // Эффект переключения слайдов 
  effect: 'coverflow', 
});