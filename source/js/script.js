/* Мобильная навигация */

let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let navListWrapper = document.querySelector('.nav__list-wrapper');

nav.classList.remove("nav--no-js");
navToggle.classList.remove("nav__toggle--no-js");

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
    navListWrapper.style.display = "block";
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
    navListWrapper.style.display = "none";
  }
});

/* let navNoJs = document.querySelector('.nav--no-js');
let mainNavList = document.querySelector('.nav__list');

if (nav.classList.contains('nav--no-js')) {
  navListWrapper.style.display = "block";
  navToggle.style.display = "none";
} */
