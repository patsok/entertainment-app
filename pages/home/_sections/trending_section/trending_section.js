
const trendingCardsController = (() => {
    const videoCards = document.querySelectorAll('.trending .video-card');

    videoCards.forEach(card => {
        let img = card.querySelector('img');
        card.style.backgroundImage = `url('${img.src}')`;
        let bookmarkButton = card.querySelector('.video-card-bookmark');
        bookmarkButton.addEventListener('click', () => bookmarkVideo(bookmarkButton));
        let playButton = card.querySelector('.video-card-play');
        card.addEventListener('mouseover', () => changeCardVisibility(playButton));
        card.addEventListener('mouseout', () => changeCardVisibility(playButton));
    });

    const bookmarkVideo = (button) => {
        let icon = button.querySelector('.video-card-bookmark__icon')
        icon.textContent == 'E' ? icon.textContent = 'F' : icon.textContent = 'E';
    }

    const changeCardVisibility = (playButton) => {
        playButton.classList.toggle('video-card-play--is-hidden');
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
    spaceBetween: 16,
    breakpoints: {
        578: {
           spaceBetween: 40,
        },
      },
});

