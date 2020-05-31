// link variables
const nav = document.querySelector('.nav');
const anchors = document.querySelectorAll('[href^="#"]');

// create function to underline hovered navigation link
nav.addEventListener('mouseover', event => {
    let navLink = event.target.closest('.nav__item-link');

    if (navLink) {
        navLink.classList.add('active');
    }

});

nav.addEventListener('mouseout', event => {
    let navLink = event.target.closest('.nav__item-link');

    if (navLink) {
        navLink.classList.remove('active');
    }

});

// smooth scroll
(function () {
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}())