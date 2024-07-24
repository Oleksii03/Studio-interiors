export function preloader() {
  const media = document.querySelectorAll('img');
  const percents = document.querySelector('#percents');
  const preloader = document.querySelector('#preloader');

  let increment = 0;

  media.forEach(el => {
    el.addEventListener('load', () => {
      increment++;
      percents.textContent = Math.round((increment / media.length) * 100);

      if (increment < 40) {
        preloader.style.display = 'none';
      }
    });
  });
}
