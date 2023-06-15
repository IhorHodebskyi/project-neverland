import { fetchAllGet } from './fetchAllGet';
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import iconClose from '../images/symbol-defs.svg';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/w500/';

let instance;
let scrollPosition;

function createModal(content) {
  scrollPosition = window.scrollY;

  // document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';

  instance = basicLightbox.create(content, {
    onClose: () => {
      document.removeEventListener('keydown', onEscKeyPress);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    },
    onShow: () => {
      document.addEventListener('keydown', onEscKeyPress);
      document.body.style.overflow = 'hidden';
    },
  });

  instance.show();

  const closeButtonModalCard = instance
    .element()
    .querySelector('.modal-film-btn-close');

  if (closeButtonModalCard) {
    closeButtonModalCard.addEventListener('click', () => {
      instance.close();
    });
  }

  const modalFilmBtn = instance.element().querySelector('.modal-film-btn');
  if (modalFilmBtn) {
    modalFilmBtn.addEventListener('click', handlerBtn);
  }
}

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

  let whiteThemeText = '';
  let whiteThemeSecondaryText = '';
  let whiteThemeBtn = '';
  if (localStorage.getItem('theme')) {
    whiteThemeText = 'light-theme__text--black';
    whiteThemeSecondaryText = 'light-theme__section--secondaryText';
    whiteThemeBtn = 'light-theme__modal--btn';
  }

  const str = `
<div class="modal-film-window theme-element">
  <button class="modal-film-btn-close">
    <svg class="modal-film-icon-close theme-element">
      <use href="${iconClose}#icon-x"></use>
    </svg>
  </button>
  <div class="modal-film-item" id="${id}">
    <div class="modal-film-item-wrap">
      <img
        class="modal-film-item-img"
        src="${BASE_IMG_URL_w500}${poster_path}"
        alt="${original_title}"
        loading="lazy"
      />
    </div>
    <div class="modal-film-item-content">
      <h3 class="modal-film-item-title ${whiteThemeText}">${title}</h3>
      <div class="modal-film-item-flex">
        <p class="modal-film-item-text ${whiteThemeText}">Vote / Votes</p>
        <p class="modal-film-vote ${whiteThemeText}"><span class="modal-film-votes">${vote_average}</span> <span class="modal-film-slash">/</span> <span class="modal-film-votes">${whiteThemeText}${vote_count}</span></p>
      </div>
      <div class="modal-film-item-flex">
      <p class="modal-film-item-text ${whiteThemeText}">Popularity</p>
      <p class="modal-film-popular ${whiteThemeText}">${parseFloat(
    popularity
  ).toFixed(1)}</p>
      </div>
      <div class="modal-film-item-flex modal-film-item-flex-two">
      <p class="modal-film-item-text ${whiteThemeText}">Genre</p>
      <p class="modal-film-genre ${whiteThemeText}">${genres
    .map(({ name }) => name)
    .join(', ')}</p>     
      </div>
      <p class="modal-film-item-about ${whiteThemeText}">About</p>
      <p class="modal-film-desc ${whiteThemeSecondaryText}"
        >${overview}</p
      >
      <button
        type="submit"
        class="modal-film-btn button-card-modal ${whiteThemeBtn}"
      >
        ${textBtn(id)}
      </button>
    </div>
  </div>
</div>`;

  createModal(str);
}

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
  const id = e.currentTarget.closest('.modal-film-item').id;
  const idFilm = {
    id: [],
  };
  if (localStorage.getItem('favoriteFilm')) {
    idFilm.id = [...JSON.parse(localStorage.getItem('favoriteFilm')).id];
  }
  if (!idFilm.id.includes(id.toString())) {
    if (e.currentTarget.textContent === 'Add to my library') {
      e.currentTarget.textContent = 'Remove from my library';
    }
    idFilm.id.push(id.toString());
    localStorage.setItem('favoriteFilm', JSON.stringify(idFilm));
  } else {
    idFilm.id.splice(idFilm.id.indexOf(id.toString()), 1);
    localStorage.setItem('favoriteFilm', JSON.stringify(idFilm));
    e.currentTarget.textContent = 'Add to my library';
  }
}

function onEscKeyPress(e) {
  if (e.key === 'Escape') {
    instance.close();
  }
}

function handlerClickcardsSectionBackphoto(e) {
  const ENDPOINT = `/3/movie/${e.currentTarget.getAttribute('id')}`;
  fetchAllGet(BASE_URL, ENDPOINT, API_KEY, '&language=en-US&page=1')
    .then(markUp)
    .catch(console.log);
}

export { handlerClickcardsSectionBackphoto };
