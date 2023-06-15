import { fetchAllGet } from './fetchAllGet';
import { refs } from './refs';
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/w500/';
import { toggleStylesTheme } from './theme-switcher';
// fetchAllGet(BASE_URL, ENDPOINT, API_KEY,'&language=en-US&page=1')
// .then(markUp);

function markUp(data) {
  const {
    backdrop_path,
    poster_path,
    title,
    original_title,
    id,
    release_date,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
  } = data.data;
  // <img src="${BASE_IMG_URL_w500}${poster_path}" alt="${original_title}" />
  console.log(`${BASE_IMG_URL_w500}${poster_path}`);

  let whiteThemeText = '';
  let whiteThemeSecondaryText = '';
  let whiteThemeBtn = '';
  if (localStorage.getItem('theme')) {
    whiteThemeText = 'light-theme__text--black';
    whiteThemeSecondaryText = 'light-theme__section--secondaryText';
    whiteThemeBtn = 'light-theme__modal--btn';
  }

  const str = `<div class="modal-film-item" id="${id}" >
                            <div class="modal-film-item-img" style="background-image: url(${BASE_IMG_URL_w500}${poster_path}" alt="${original_title});background-repeat: no-repeat;background-size: contain;background-position: left;">
                            </div>
                            <div class="modal-film-item-title">
                                <h3 class="modal-film-item-main-h3 ${whiteThemeText}">${title}</h3>
                                        <h3 class="modal-film-item-h3 ${whiteThemeText}">Vote / Votes<span class="modal-film-vote ${whiteThemeText}">${vote_average}</span> / <span class="modal-film-votes ${whiteThemeText}">${vote_count}</span></h3>
                                        <h3 class="modal-film-item-h3 ${whiteThemeText}">Popularity<span class="modal-film-popular ${whiteThemeText}">${parseFloat(
    popularity
  ).toFixed(1)}</span></h3>
                                        <h3 class="modal-film-item-h3 ${whiteThemeText}">Genre<span class="modal-film-genre ${whiteThemeText}">${genres
    .map(({ name }) => name)
    .join(', ')}</span></h3>
                                <p class="modal-film-item-p ${whiteThemeText}">About</p><span class="modal-film-text ${whiteThemeSecondaryText}">${overview}</span>
                                <button type="submit" class="modal-film-btn button-card-modal ${whiteThemeBtn}">${textBtn(
    id
  )}</button>
                            </div>
                         </div>              
                         `;
  refs.modalTrailerWwindow.insertAdjacentHTML('beforeend', str);
  refs.monthBtn = document.querySelector('.modal-film-btn');
  refs.monthItem = document.querySelector('.modal-film-item');
  refs.monthBtn.addEventListener('click', handlerBtn);
  refs.modalFilmBtnClose.addEventListener('click', handlerBtnClose);
}
refs.modalFilmBtnClose = document.querySelector('.modal-film-btn-close');

function textBtn(id) {
  const idFilm = {
    id: [],
  };
  if (localStorage.getItem('favoriteFilm')) {
    idFilm.id = [...JSON.parse(localStorage.getItem('favoriteFilm')).id];
  }
  return !idFilm.id.includes(id.toString())
    ? 'Add to my library'
    : 'Remove from my library';
}

function handlerBtn(e) {
  e.preventDefault();
  const id = refs.monthItem.getAttribute('id');
  const idFilm = {
    id: [],
  };
  if (localStorage.getItem('favoriteFilm')) {
    idFilm.id = [...JSON.parse(localStorage.getItem('favoriteFilm')).id];
  }
  if (!idFilm.id.includes(id)) {
    if (e.currentTarget.textContent === 'Add to my library') {
      e.currentTarget.textContent = 'Remove from  my library';
    }
    idFilm.id.push(id);
    localStorage.setItem('favoriteFilm', JSON.stringify(idFilm));
  } else {
    idFilm.id.splice(idFilm.id.indexOf(id), 1);
    localStorage.setItem('favoriteFilm', JSON.stringify(idFilm));
    e.currentTarget.textContent = 'Add to my library';
  }
}

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    refs.modalTrailerWwindow.textContent = '';
    refs.modalFilmBtnClose = document.querySelector('.modal-film-btn-close');
    refs.modalTrailerBackdrop.classList.add('visually-hidden');
  }
});

function handlerBtnClose(e) {
  e.preventDefault();

  refs.modalTrailerWwindow.textContent = '';
  refs.modalTrailerWwindow.insertAdjacentHTML(
    'beforeend',
    `<button class="modal-film-btn-close"><svg class="modal-film-icon-close">
        <use href="./images/symbol-defs.svg#icon-x"></use></svg></button>`
  );
  refs.modalFilmBtnClose = document.querySelector('.modal-film-btn-close');
  refs.modalTrailerBackdrop.classList.toggle('visually-hidden');
  refs.body.classList.remove('no_scroll');
}

function handlerClickcardsSectionBackphoto(e) {
  const ENDPOINT = `/3/movie/${e.currentTarget.getAttribute('id')}`;
  fetchAllGet(BASE_URL, ENDPOINT, API_KEY, '&language=en-US&page=1')
    .then(markUp)
    .catch(console.log);
  refs.modalTrailerBackdrop.classList.toggle('visually-hidden');
  refs.body.classList.add('no_scroll');
}

export { handlerClickcardsSectionBackphoto };
