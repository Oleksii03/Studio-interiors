export function createSlider() {
  const images = document.querySelectorAll('.js-slider-img');
  const sliderLine = document.querySelector('.js-slider-line');
  const btnPrev = document.querySelectorAll('.js-slider-btn-prev');
  const btnNext = document.querySelectorAll('.js-slider-btn-next');
  const spanPrev = document.querySelector('.js-span-prev');
  let paginationLine = document.querySelectorAll('.js-pagination-line');

  let offsetStep = 100 / (images.length - 1);
  let offsetWidth = 100 / (images.length - 1);
  let count = 0;
  let width;

  paginationLine.forEach(el => {
    el.style.width = offsetWidth + '%';
  });

  function calculateValue() {
    width = document.querySelector('.js-slider-track').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => (item.style.width = width + 'px'));
    rollSlider();
  }
  window.addEventListener('resize', calculateValue);
  calculateValue();

  // -------btnPrev------------

  btnPrev.forEach(el => {
    el.addEventListener('click', onPrevSliderClick);
  });

  function onPrevSliderClick(e) {
    const targetBtn = e.target.closest('.js-slider-btn-prev');

    btnNext.forEach(el => {
      el.disabled = false;
      el.style.opacity = 1;
    });

    if (count <= 0) {
      targetBtn.disabled = true;
      return;
    }

    count -= 1;
    if (count <= -1) count = images.length - 2;

    offsetWidth -= offsetStep;
    paginationLine.forEach(el => {
      el.style.width = offsetWidth + '%';
    });
    rollSlider();
  }

  // -------btnNext------------

  btnNext.forEach(el => {
    el.addEventListener('click', onNextSliderClick);
  });

  function onNextSliderClick(e) {
    const targetBtn = e.target.closest('.js-slider-btn-next');
    btnPrev.forEach(el => (el.disabled = false));

    count += 1;
    if (count >= images.length - 1) count = 0;

    offsetWidth += offsetStep;
    paginationLine.forEach(el => {
      el.style.width = offsetWidth + '%';
    });

    if (count === images.length - 2) {
      targetBtn.style.opacity = 0.5;
      targetBtn.disabled = true;
    }
    rollSlider();
  }

  function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    spanPrev.textContent = count + 1;
    spanPrev.textContent = spanPrev.textContent.padStart(2, '0');
  }
}
