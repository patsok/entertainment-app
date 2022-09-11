const videoCardsController = (() => {
    const videoCards = document.querySelectorAll('.video-section .video-card');
    
    videoCards.forEach(card => {
        let bookmarkButton = card.querySelector('.video-card-bookmark');
        bookmarkButton.addEventListener('click', () => bookmarkVideo(bookmarkButton));
    });

    const bookmarkVideo = (button) => {
        let icon = button.querySelector('.video-card-bookmark__icon')
        icon.textContent == 'E' ? icon.textContent = 'F' : icon.textContent = 'E';
    }
})()