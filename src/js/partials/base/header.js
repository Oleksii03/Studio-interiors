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
    if (window.scrollY < 60) {
      header.classList.remove('header_active');
    } else if (window.scrollY > 60) {
      header.classList.toggle('header_active');
    }
  }

  activeHeader();

  window.addEventListener('load', () => {
    if (!header.classList.contains('header_active') && window.scrollY > 60) {
      header.classList.add('header_active');
    }
  });
}
