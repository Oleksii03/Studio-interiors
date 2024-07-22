import debounce from 'lodash.debounce';

export function header() {
  const header = document.querySelector('.js-header');

  const options = {
    leading: true,
    trailing: true,
  };

  const debouncedActiveHeader = debounce(activeHeader, 300, options);

  window.addEventListener('scroll', debouncedActiveHeader);

  function activeHeader() {
    const scrollPastThreshold = window.scrollY > 60;

    if (window.scrollY < 60) {
      header.classList.remove('header_active');
      header.style.opacity = 1;
    } else if (scrollPastThreshold) {
      header.classList.toggle('header_active');
    }

    if (!header.classList.contains('opacity') && scrollPastThreshold) {
      header.style.opacity = 1;
      header.classList.add('opacity');
    } else if (header.classList.contains('opacity') && scrollPastThreshold) {
      header.style.opacity = 0;
      header.classList.remove('opacity');
    }
  }

  window.addEventListener('load', onReboot);
  window.addEventListener('resize', onReboot);

  function onReboot() {
    if (!header.classList.contains('header_active') && window.scrollY > 60) {
      header.classList.add('header_active');
      header.style.opacity = 1;
    }
  }
}
