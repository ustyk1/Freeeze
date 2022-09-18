document.querySelector('#hamburger-toggle').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('stopScroll');
    document.querySelector('html').classList.toggle('stopScroll')
});