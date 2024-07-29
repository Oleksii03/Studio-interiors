import debounce from 'lodash.debounce';

export function header() {
  const header = document.querySelector('.js-header');
  const btnUp = document.querySelector('.js-btn-up');

  // window.addEventListener('scroll', debounce(activeHeader, 250));

  // function activeHeader() {
  //   if (window.scrollY < 60) {
  //     header.classList.remove('header_active');
  //     btnUp.classList.remove('btn-up--active');
  //     return;
  //   }

  //   btnUp.classList.add('btn-up--active');
  //   header.classList.add('header_active');
  // }

  // -------------------------------------------

  const options = {
    leading: true,
    trailing: true,
  };

  const debouncedActiveHeader = debounce(activeHeader, 350, options);

  window.addEventListener('scroll', debouncedActiveHeader);

  function activeHeader() {
    if (window.scrollY < 60) {
      header.classList.remove('header_active');
      btnUp.classList.remove('btn-up--active');
    } else if (window.scrollY > 60) {
      btnUp.classList.toggle('btn-up--active');
      header.classList.add('header_active');
    }
  }

  window.addEventListener('resize', onReload);
  window.addEventListener('load', onReload);

  function onReload() {
    setTimeout(() => {
      if (window.scrollY > 60 && !header.classList.contains('btn-up--active')) {
        btnUp.classList.add('btn-up--active');
      }
    }, 400);
  }
}
