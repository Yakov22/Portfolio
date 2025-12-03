// Меняем иконку при ховере
let check = document.querySelectorAll('.services__img-w')
let card = document.querySelectorAll('.services__card')

for (let i = 0; i < card.length; i++) {
  let ca = card[i];
  let ch = check[i];
  ca.addEventListener('mouseover', function () {
    ch.style.display = 'block';
  })
  ca.addEventListener('mouseout', function () {
    ch.style.display = 'none';
  })
}

// меняем цвет текста
let materialTitleCard = document.querySelectorAll('.material__title-card')
let materialCard = document.querySelectorAll('.material__card')

for (let i = 0; i < materialCard.length; i++) {
  let mc = materialCard[i];
  let mt = materialTitleCard[i];
  mc.addEventListener('mouseover', function () {
    mt.style.color = '#4F8FF0';
  })
  mc.addEventListener('mouseout', function () {
    mt.style.color = '#010101';
  })
}

// Плавная загрузка стрвницы
setTimeout(function(){
  document.body.classList.add('body_visible');
}, 200);