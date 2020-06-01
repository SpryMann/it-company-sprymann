'use strict';

var _smoothscrollPolyfill = require('smoothscroll-polyfill');

var _smoothscrollPolyfill2 = _interopRequireDefault(_smoothscrollPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// link variables
var nav = document.querySelector('.nav'); // import modules

var anchors = document.querySelectorAll('[href^="#"]');

// create function to underline hovered navigation link
nav.addEventListener('mouseover', function (event) {
    var navLink = event.target.closest('.nav__item-link');

    if (navLink) {
        navLink.classList.add('active');
    }
});

nav.addEventListener('mouseout', function (event) {
    var navLink = event.target.closest('.nav__item-link');

    if (navLink) {
        navLink.classList.remove('active');
    }
});

// smooth scroll
(function () {
    _smoothscrollPolyfill2.default.polyfill();
})();