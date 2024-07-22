import debounce from 'lodash.debounce';

export function header() {
  const header = document.querySelector('.js-header');

  window.addEventListener('scroll', debounce(activeHeader, 250));

  function activeHeader() {
    if (window.scrollY < 60) {
      header.classList.remove('header_active');
      return;
    }

    header.classList.add('header_active');
  }

  // const options = {
  //   leading: true,
  //   trailing: true,
  // };

  // const debouncedActiveHeader = debounce(activeHeader, 250, options);

  // window.addEventListener('scroll', debouncedActiveHeader);

  // function activeHeader() {
  //   const activeScroll = window.scrollY > 60;
  //   const activeHeader = header.classList.contains('header_active');
  //   const opacityHeader = header.classList.contains('opacity');

  //   if (window.scrollY < 60) {
  //     header.classList.remove('header_active');
  //     header.classList.remove('opacity');
  //     header.style.opacity = 1;
  //   } else if (activeScroll && !activeHeader) {
  //     header.classList.add('header_active');
  //   } else if (activeScroll && activeHeader) {
  //     header.classList.remove('header_active');
  //   }

  //   if (!opacityHeader && activeScroll) {
  //     header.style.opacity = 1;
  //     header.classList.add('opacity');
  //   } else if (activeScroll && opacityHeader) {
  //     header.style.opacity = 0;
  //     header.classList.remove('opacity');
  //   }
  // }

  // window.addEventListener('resize', onReload);
  // window.addEventListener('load', onReload);
  // function onReload() {
  //   setTimeout(() => {
  //     if (
  //       window.scrollY > 60 &&
  //       !header.classList.contains('header_active') &&
  //       !header.classList.contains('opacity')
  //     ) {
  //       header.classList.add('header_active');
  //       header.style.opacity = 1;
  //       header.classList.add('opacity');
  //     }
  //   }, 400);
  // }
}
