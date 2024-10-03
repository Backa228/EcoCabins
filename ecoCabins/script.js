document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.materials__slider', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
let lastScrollTop = 0;//змінна для збереження позиції останнього скролінгу
const header = document.querySelector(".header");

window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if ((scrollTop > lastScrollTop) && (scrollTop > header.offsetHeight)) {
        header.classList.add('hidden');
        header.classList.add('dark');
    } else if (scrollTop < lastScrollTop) {
        header.classList.remove('hidden');
  }
  if (scrollTop < header.offsetHeight) {
      header.classList.remove("dark")
    }

    lastScrollTop = scrollTop;

});