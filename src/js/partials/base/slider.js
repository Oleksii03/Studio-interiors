export function createSlider() {
  const images = document.querySelectorAll('.js-slider-img');
  const sliderLine = document.querySelector('.js-slider-line');
  const btnPrev = document.querySelector('.js-slider-btn-prev');
  const btnNext = document.querySelector('.js-slider-btn-next');
  const spanPrev = document.querySelector('.js-span-prev');
  const spanNext = document.querySelector('.js-span-next');

  let fullCount = images.length - 1;
  let count = 0;
  let width;

  function calculateValue() {
    width = document.querySelector('.js-slider-track').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => (item.style.width = width + 'px'));
    rollSlider();
  }
  window.addEventListener('resize', calculateValue);
  calculateValue();

  btnPrev.addEventListener('click', e => {
    count -= 1;
    if (count < 0) count = images.length - 1;
    rollSlider();
  });

  btnNext.addEventListener('click', e => {
    count += 1;
    if (count >= images.length - 1) count = 0;
    rollSlider();
  });

  function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    spanPrev.textContent = count + 1;
    spanNext.textContent = fullCount - count;
    spanPrev.textContent = spanPrev.textContent.padStart(2, '0');
    spanNext.textContent = spanNext.textContent.padStart(2, '0');
  }
}
