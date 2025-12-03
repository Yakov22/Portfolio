
// убираем скролл страницы 
document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#qr__openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#qr__openModal').style.marginLeft = scrollbar;
  });

  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#qr__openModal').style.marginLeft = '0px';
  });
});