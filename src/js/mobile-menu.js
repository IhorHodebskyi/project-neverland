const menuBtn = document.querySelector('[data-menu-open]');
const menuContainer = document.querySelector('data-menu');
const menuBackdrop = document.querySelector('[data-backdrop]');
const body = document.querySelector('body');

menuBtn.addEventListener('click', toglrModal);
menuBackdrop.addEventListener('click', closeModal);

function closeModal(ev) {
    if (ev.target === menuBackdrop) {
        toglrModal();
    } 
};

function toglrModal() {
    menuBackdrop.classList.toggle('visual-hidden');
    menuContainer.classList.toggle('is-open');
    body.classList.toggle('is-open');
}