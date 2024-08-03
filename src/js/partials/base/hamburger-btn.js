import debounce from 'lodash.debounce';

export function hamburgerMenu() {
  const hamburger = document.querySelector('#hamburger');
  const mobMenu = document.querySelector('.js-menu');
  const header = document.querySelector('.js-header');

  hamburger.addEventListener('click', e => {
    animationHamburgerBtn();
    toggleMobMenu();
    invertColors(e);
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

  window.addEventListener(
    'scroll',
    debounce(e => {
      invertColors(e, window.scrollY);
    }, 350)
  );

  function invertColors(evt, valueScroll) {
    const logo = document.querySelector('[data-logo="logo"]'),
      menuText = document.querySelector('[data-menu="text-menu"]'),
      menuLines = document.querySelectorAll('[data-line="line"]'),
      leng = document.querySelector('[data-leng="leng"]'),
      btnSend = document.querySelector('[data-send-btn="send-btn"]');

    const invertedElements = [logo, menuText, ...menuLines, leng, btnSend];

    if (evt.type === 'click' && !header.classList.contains('header_active')) {
      invertedElements.forEach(el => {
        el.classList.toggle('invert');
      });
      return;
    }

    if (valueScroll < 60) {
      invertedElements.forEach(el => {
        el.classList.remove('invert');
      });
      return;
    }

    invertedElements.forEach(el => {
      el.classList.add('invert');
    });
  }
}
