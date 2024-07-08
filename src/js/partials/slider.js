export function createSlider() {
  const images = document.querySelectorAll('.js-slider-img');
  const sliderLine = document.querySelector('.js-slider-line');

  let count = 0;
  let width;

  function init() {
    width = document.querySelector('.js-slider-track').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';

    images.forEach(item => (item.style.width = width + 'px'));
    rollSlider();
  }

  window.addEventListener('resize', init);
  init();

  document.querySelector('.js-slider-btn-next').addEventListener('click', () => {
    count += 1;
    if (count >= images.length) count = 0;
    rollSlider();
  });

  document.querySelector('.js-slider-btn-prev').addEventListener('click', () => {
    count -= 1;
    if (count < 0) count = images.length - 1;
    rollSlider();
  });

  function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
  }
}
