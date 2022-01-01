const mobileMenuButton = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('menu');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');

mobileMenuButton.addEventListener('click', () => {

  mobileMenu.classList.add('reveal-flex');
  closeMobileMenuButton.classList.add('reveal-flex');

});

closeMobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('reveal-flex');
  closeMobileMenuButton.classList.remove('reveal-flex');
})

const desktopMenu = document.getElementsByTagName('nav')[0];

desktopMenu.style.height = `${document.getElementsByTagName('main')[0].getBoundingClientRect().height}px`;

console.log(document.getElementsByTagName('main')[0].getBoundingClientRect().height);