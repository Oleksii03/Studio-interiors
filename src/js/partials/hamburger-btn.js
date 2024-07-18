export function hamburgerMenu() {
  const hamburger = document.querySelector('#hamburger');
  const mobMenu = document.querySelector('.js-menu');

  hamburger.addEventListener('click', e => {
    animationHamburgerBtn();
    toggleMobMenu();
    invertColors();
    // if (window.location.pathname === '/about.html') {
    // }
  });

  function animationHamburgerBtn() {
    [...hamburger.children].forEach(el => {
      if (!el.classList.contains('is-open')) {
        el.classList.add('is-open');
      } else {
        el.classList.remove('is-open');
        el.classList.add('is-closed');
      }
    });
  }

  function toggleMobMenu() {
    mobMenu.classList.toggle('mob-menu_visible');
    document.body.classList.toggle('no-scroll');
  }

  function invertColors() {
    const logo = document.querySelector('[data-logo="logo"]');
    const menuText = document.querySelector('[data-menu="text-menu"]');
    const menuLines = document.querySelectorAll('[data-line="line"]');
    const leng = document.querySelector('[data-leng="leng"]');
    const btnSend = document.querySelector('[data-send-btn="send-btn"]');

    [logo, menuText, ...menuLines, leng, btnSend].forEach(el => {
      el.classList.toggle('invert');
    });
  }
}
