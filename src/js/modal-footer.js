import {refs} from './refs';

function onBtnClick(event) {
  event.preventDefault();

  refs.teamBackdrop.classList.remove('is-hidden');
        document.body.classList.add('modal-open');

    eventAddFunc();
};

function eventAddFunc() {
        document.addEventListener('keydown', onEscClick);
    refs.teamBackdrop.addEventListener('click', onBackdropClick);
    refs.teamCloseBtn.addEventListener('click', onCloseBtnClick);
};

function closestBckdListner() {
        document.removeEventListener('keydown', onEscClick);
    refs.teamBackdrop.removeEventListener('click', onBackdropClick);
    refs.teamCloseBtn.removeEventListener('click', onCloseBtnClick);
  
    refs.teamBackdrop.classList.add('is-hidden');
        document.body.classList.remove('modal-open');
};

function onEscClick(event) {
  event.preventDefault();

  if (event.code !== 'Escape') {
    return;
    }

    closestBckdListner();
};

function onBackdropClick(event) {
  if (event.target.closest('.team_wrapper')) {
    return;
    }

    closestBckdListner();
};

function onCloseBtnClick(event) {
  event.preventDefault();

    closestBckdListner();
};

refs.footerBtnLink.addEventListener('click', onBtnClick);