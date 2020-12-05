var nav = document.querySelector('.nav');
var menuClose = documen.querySelector('.menu--close');
var menuOpen = document.querySelector('.menu--open');

menuClose.addEventListener('click', function() {
  nav.classList.remove('menu--close');
  nav.classList.add('menu--open');
});