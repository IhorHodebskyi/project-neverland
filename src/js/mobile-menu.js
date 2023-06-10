import refs from './refs';

refs.menuBtn.addEventListener('click', toglrModal);
refs.menuBackdrop.addEventListener('click', closeModal);

function closeModal(ev) {
  if (ev.target === menuBackdrop) {
    toglrModal();
  }
}

function toglrModal() {
  refs.menuBackdrop.classList.toggle('visual-hidden');
  refs.menuContainer.classList.toggle('is-open');
  refs.body.classList.toggle('is-open');
}
