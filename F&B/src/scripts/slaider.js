
    // Находим контейнер со слайдами
    const slides = document.querySelector('.slides');
    // Находим цифры в скроле
    const pageCount_1 = document.querySelector('.scroling__page-number > span');
    const pageCount_2 = document.querySelector('.scroling__page-number > span + span');
    //-----------------------------------------------------------------
    const observer = new ResizeObserver(entries => { // Отслеживаем ширину слайдера
        var width = slides.offsetWidth;
        
        // Определяем количество слайдов
        const slideCount = document.querySelectorAll('.slide').length / parseInt(width / 255);
        
        // Выводим кол-во слайдов
        pageCount_2.innerHTML = `<span>${12 / parseInt(width / 255)}</span>`;

        // Находим кнопки «Назад» и «Вперёд»
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');


        let currentIndex = 0; // Переменная для хранения текущего слайда

        // Функция смены слайдов
        function goToSlide(index) {
            if (index < 0) {
                index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
            } else if (index >= slideCount) {
                index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
            }

            pageCount_1.innerHTML = `<span>${index + 1}</span>` // Выводим номер слайда

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

    observer.observe(slides); // 
   

