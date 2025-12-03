
// если заполнено поле номера телефона и нажата кнопка - закрываем окно
document.querySelector('.modal-button').onclick = function () {
  if (document.querySelector('.modal-input-tel').value != '') {
    document.querySelector('.close').click();
  }
}
// Очищаем поля ввода
document.querySelector('.header__call-back').onclick = function() {
  document.querySelector('.modal-input-name').value = '';
  document.querySelector('.modal-input-tel').value = '';
}


