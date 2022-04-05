import '../css/styles.scss';

const btn = document.querySelector('.prices__btn--name');
const elem = document.querySelector('.prices__wrapper');

btn.addEventListener('click', () => {
    elem.classList.toggle('prices__wrapper--open')
});