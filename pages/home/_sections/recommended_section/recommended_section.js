const recommendedCardsController = (() => {
    const videoCards = document.querySelectorAll('.recommended .video-card');

    videoCards.forEach(card => {
        // let img = card.querySelector('img');
        // const main = card.querySelector('.video-card-main');
        // main.style.backgroundImage = `url('${img.src}')`;
        let bookmarkButton = card.querySelector('.video-card-bookmark');
        bookmarkButton.addEventListener('click', () => bookmarkVideo(bookmarkButton));
        let playButton = card.querySelector('.video-card-play');

        // let cardImage = card.querySelector('.video-card-image');
        // cardImage.addEventListener('mouseover', () => changeCardVisibility(playButton));
        // cardImage.addEventListener('mouseout', () => changeCardVisibility(playButton));
    });

    const bookmarkVideo = (button) => {
        let icon = button.querySelector('.video-card-bookmark__icon')
        icon.textContent == 'E' ? icon.textContent = 'F' : icon.textContent = 'E';
    }


    const changeCardVisibility = (playButton) => {
        playButton.classList.toggle('video-card-play--is-hidden');
    }

})()


