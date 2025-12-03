// Создание мерцающих звезд в случайном порядке
let i = 0;
let arr = [];

for (i = 0; i <= 40; i++) {
  starPosicion(arr[i]);
}

function starPosicion(st) {
  st = document.createElement('img');
  st.src = "./img/star.png";
  st.classList.add('star2', `star_js${i}`);
  st.style.top = `${Math.floor(Math.random() * 98)}%`;
  st.style.left = `${Math.floor(Math.random() * 98)}%`;
  st.style.animationDuration = `${Math.floor(Math.random() * 2000) + 1000}ms`;
  st.style.animationDelay = `${Math.floor(Math.random() * 20000)}ms`;
  document.querySelector('body').append(st);
}
