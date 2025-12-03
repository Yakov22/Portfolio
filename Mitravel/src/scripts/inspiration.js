// убираем лишний контент при hover

const cardHover = document.querySelectorAll('.inspirations__card-hover');
const cardContent = document.querySelectorAll('.inspirations__card-content');

for (let i = 0; i < cardHover.length; i++) {
  let mc = cardHover[i];
  let mt = cardContent[i];
  mc.addEventListener('mouseover', function () {
    mt.style.opacity = '0';
  })
  mc.addEventListener('mouseout', function () {
    mt.style.opacity = '1';
  })
}