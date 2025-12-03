
// Находим контейнер со слайдами
const slides = document.querySelector('.castomer__slider');
//-----------------------------------------------------------------
const observer = new ResizeObserver(entries => { // Отслеживаем ширину слайдера
    var width = slides.offsetWidth;
    
    // Определяем количество слайдов
    const slideCount = document.querySelectorAll('.customer__card').length;

    // Находим кнопки «Назад» и «Вперёд»
    const prevButton = document.querySelector('.customer__button-left');
    const nextButton = document.querySelector('.customer__button-right');
    
    let currentIndex = 0; // Переменная для хранения текущего слайда

    // Функция смены слайдов
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
        } else if (index >= slideCount) {
            index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
        }
        currentIndex = index; // Запоминаем текущий слайд
        slides.style.transform = `translateX(${-index * 100}%)`; // Сдвигаем контейнер со слайдами
    }
    // Добавляем обработчик клика для кнопки «Назад»
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });
    // Добавляем обработчик клика для кнопки «Вперёд»
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });
    // Устанавливаем первый активный слайд при загрузке страницы
    goToSlide(0);
    });

observer.observe(slides); 

