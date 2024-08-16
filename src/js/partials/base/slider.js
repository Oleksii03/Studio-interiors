export function createSlider() {
  const images = document.querySelectorAll('.js-slider-img');
  const sliderLine = document.querySelector('.js-slider-line');
  const btnPrev = document.querySelector('.js-slider-btn-prev');
  const btnNext = document.querySelector('.js-slider-btn-next');
  const spanPrev = document.querySelector('.js-span-prev');
  // const spanNext = document.querySelector('.js-span-next');
  let paginationLine = document.querySelector('.js-pagination-line');

  let offsetStep = 100 / (images.length - 1);
  let offsetWidth = 100 / (images.length - 1);
  let count = 0;
  let width;

  paginationLine.style.width = offsetWidth + '%';

  function calculateValue() {
    width = document.querySelector('.js-slider-track').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => (item.style.width = width + 'px'));
    rollSlider();
  }
  window.addEventListener('resize', calculateValue);
  calculateValue();

  btnPrev.addEventListener('click', e => {
    btnNext.disabled = false;
    btnNext.style.opacity = 1;

    if (count <= 0) {
      btnPrev.disabled = true;
      return;
    }

    count -= 1;
    if (count <= -1) count = images.length - 2;

    offsetWidth -= offsetStep;
    paginationLine.style.width = offsetWidth + '%';
    rollSlider();
  });

  btnNext.addEventListener('click', e => {
    btnPrev.disabled = false;

    count += 1;
    if (count >= images.length - 1) count = 0;

    offsetWidth += offsetStep;
    paginationLine.style.width = offsetWidth + '%';

    if (count === images.length - 2) {
      btnNext.style.opacity = 0.5;
      btnNext.disabled = true;
    }

    rollSlider();
  });

  function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    spanPrev.textContent = count + 1;
    spanPrev.textContent = spanPrev.textContent.padStart(2, '0');
  }
}
