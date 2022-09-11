const themeSwitcher = document.querySelector('.font-icon-theme');
const body = document.querySelector('body');


const switchTheme = () => {
    body.classList.toggle('light-theme');
}

themeSwitcher.addEventListener('click',switchTheme);
