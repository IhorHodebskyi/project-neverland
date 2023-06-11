import {refs} from './refs';

refs.menuBtn.addEventListener('click', toglrModal);
refs.menuBackdrop.addEventListener('click', closeModal);

function closeModal(ev) {
  if (ev.target === refs.menuBackdrop) {
    toglrModal();
  }
}

function toglrModal() {
  refs.menuBackdrop.classList.toggle('visual_hidden');
  refs.menuContainer.classList.toggle('is-open');
  refs.body.classList.toggle('is-open');
}
