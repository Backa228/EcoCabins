document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.materials__slider', {
        direction: 'horizontal',
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

console.log(header);

window.addEventListener ('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if ((scrollTop > lastScrollTop) && (scrollTop > header.offsetHeight)) {
        header.classList.add('hidden');
        header.classList.add('dark');
    } else if (scrollTop < lastScrollTop) {
        header.classList.remove('hidden');
    } 
    if (scrollTop < header.offsetHeight) {
        header.classList.remove('dark');
    }

    lastScrollTop = scrollTop;
});

// Отримуємо елементи
const modal = document.getElementById('videoModal');
const playBtn = document.getElementById('playBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const youtubeVideo = document.getElementById('youtubeVideo');
// Коли користувач натискає на кнопку "Play"
playBtn.onclick = function() {
  modal.style.display = 'block';
  // Автоматично запускаємо відео
  youtubeVideo.src += "?autoplay=1";
}
// Коли користувач натискає на "x", щоб закрити модальне вікно
closeBtn.onclick = function() {
  modal.style.display = 'none';
  // Зупиняємо відео
  youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
}
// Закриття модального вікна при натисканні поза ним
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
  }
}