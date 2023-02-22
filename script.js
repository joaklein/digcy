document.addEventListener('DOMContentLoaded', () => {

    let gallery01 = new Flickity('.main-gallery', {
        // options
        cellAlign: 'center',
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
    });

    let gallery02 = new Flickity('.second-gallery', {
        // options
        cellAlign: 'right',
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
    });

    const navLinks = document.querySelector('#nav-links');
    const nav = document.querySelector('nav');

    document.querySelector('.logo').addEventListener('click', () => {
        nav.classList.toggle('nav-extend');
        navLinks.classList.toggle('nav-links-show');
    });

});