export function popUp() {
  const openModalBtn = document.querySelectorAll('.js-backdrop-open'),
    closeModalBtn = document.querySelector('.js-backdrop-btn'),
    backdrop = document.querySelector('.js-backdrop');

  openModalBtn.forEach(el => {
    el.addEventListener('click', toggleModal);
  });

  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    backdrop.classList.toggle('backdrop--hidden');
    document.body.classList.toggle('no-scroll');
  }
}
