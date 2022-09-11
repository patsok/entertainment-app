const trendingCardsController = (() => {
    const videoCards = document.querySelectorAll('.trending .video-card');

    videoCards.forEach(card => {
        let bookmarkButton = card.querySelector('.video-card-bookmark');
        bookmarkButton.addEventListener('click', () => bookmarkVideo(bookmarkButton));

    });

    const bookmarkVideo = (button) => {
        let icon = button.querySelector('.video-card-bookmark__icon')
        icon.textContent == 'E' ? icon.textContent = 'F' : icon.textContent = 'E';
    }

})()


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.trending-cards', {
    speed: 1000,
    slidesPerView: "auto",
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    breakpoints: {
        578: {
           slidesOffsetAfter: 24,
           slidesOffsetBefore: 24,
        },
        768: {
            slidesOffsetAfter: 36,
            slidesOffsetBefore: 0
         },
      },
});

