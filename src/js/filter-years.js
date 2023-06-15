const selectBtnEl = document.querySelector('.select-btn');
const optionsEl = document.querySelector('.options');
const bodyEl = document.querySelector('.body');
const arrowEl = document.querySelector('.icon-arrow-down');
import { themeDynamicElements, checkThemeForDynamikEl } from './theme-switcher'; // for theme

selectBtnEl.addEventListener('click', () => {
  optionsEl.classList.toggle('hidden');
  arrowEl.classList.toggle('animation');

  createMarkupOption();
  checkThemeForDynamikEl(themeDynamicElements);
});

function createMarkupOption() {
  const currentYear = new Date().getFullYear();
  const oldestFilmYear = 1874;
  let optionsMarkup = '';

  for (let year = currentYear; year >= oldestFilmYear; year--) {
    optionsMarkup += `<li class="option theme-element theme-dynamic-element">${year}</li>`;
  }

  optionsEl.innerHTML = optionsMarkup;
}

optionsEl.addEventListener('click', evt => {
  if (!evt.target.classList.contains('option')) {
    return;
  }

  selectBtnEl.firstElementChild.textContent = evt.target.textContent;
  optionsEl.classList.toggle('hidden');
});
