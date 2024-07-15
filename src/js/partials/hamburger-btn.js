export function hamburgerMenu() {
  const hamburger = document.querySelector('#hamburger');
  const mobMenu = document.querySelector('.js-menu');

  hamburger.addEventListener('click', e => {
    animationHamburgerBtn();
    toggleMobMenu();
  });

  function animationHamburgerBtn() {
    [...hamburger.children].forEach(el => {
      el.classList.toggle('is-open');
    });
  }

  function toggleMobMenu() {
    mobMenu.classList.toggle('mob-menu_visible');
    document.body.classList.toggle('no-scroll');
  }
}
