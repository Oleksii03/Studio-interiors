export function popUp() {
  const openModalBtn = document.querySelectorAll('.js-backdrop-open'),
    closeModalBtn = document.querySelector('.js-backdrop-btn'),
    backdrop = document.querySelector('.js-backdrop'),
    modalSubTitle = document.querySelector('.js-modal-subtitle'),
    modalSelect = document.querySelector('.js-modal-select');

  modalSelect.addEventListener('change', () => {
    modalSubTitle.textContent = '';
  });

  openModalBtn.forEach(el => {
    el.addEventListener('click', toggleModal);
  });

  closeModalBtn.addEventListener('click', toggleModal);

  backdrop.addEventListener('click', e => {
    if (e.target === e.currentTarget) toggleModal();
  });

  function toggleModal() {
    backdrop.classList.toggle('backdrop--hidden');
    document.body.classList.toggle('no-scroll');
  }
}
