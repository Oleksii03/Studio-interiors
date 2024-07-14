export function hamburgerMenu() {
  let hamburger = document.querySelector('#hamburger');

  hamburger.addEventListener('click', animationHamburger);

  function animationHamburger() {
    [...hamburger.children].forEach(el => {
      el.classList.toggle('is-open');
    });
  }
}
