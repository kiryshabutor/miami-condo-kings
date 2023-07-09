(() => {
   window.onload = () => {
      let menuBtn = document.querySelector('.header__btn');
      let menu = document.querySelector('.menu');
      let logo = document.querySelector('.header__logo');
      let headerPanel = document.querySelector('.header__top');
      let body = document.querySelector('body');
      menuBtn.addEventListener('click', (e)=> {
         menuBtn.classList.toggle('active');
         menu.classList.toggle('active');
         body.classList.toggle('lock');
      })
      
      menu__item.addEventListener('click', (e)=> {
         menuBtn.classList.toggle('active');
         menu.classList.toggle('active');
         body.classList.toggle('lock');
      })
   }
 })();