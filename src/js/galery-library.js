import { fetchAllGet } from './fetchAllGet';
import { refs } from './refs';
import ratingStarFull from '../images/reitingfull.svg';
import starIconFull from '../images/reitingfull.svg';
import starIconHalf from '../images/reitinghalf.svg';
import starIconZero from '../images/reitingzero.svg';
import iconClose from '../images/symbol-defs.svg';
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '5bf13f442a6612ea903461e28536fdca';

parseLocStor();

refs.galeryLibrarySelect.addEventListener('change', handlerSelect);

function handlerSelect(e) {
  refs.galeryLibraryBtn.classList.remove('visually-hidden');
  refs.galeryLibrary.textContent = '';
  parseLocStor(e.currentTarget.value);
}

function parseLocStor(genre = 'all') {
  if (!JSON.parse(localStorage.getItem('favoriteFilm'))?.id.length) {
    refs.galeryLibraryBtn.addEventListener('click', handlerBtnLoad);
    const str = `<div class="galery-library-text"><span>OOPS...</span><span>We are very sorry!</span><span>You don’t have any movies at your library.</span></div>`;
    refs.galeryLibrary.insertAdjacentHTML('beforeend', str);
    refs.galeryLibraryBtn.textContent = 'Search movie';

    function handlerBtnLoad(e) {
      e.preventDefault();
      e.currentTarget.removeEventListener('click', handlerBtnLoad);
      location.href = './catalog.html';
    }
    refs.galeryLibraryBtn.textContent = 'Search movie';
    refs.galeryLibrarySelect.classList.add('visually-hidden');
  } else {
    const idFilm = {
      id: [...JSON.parse(localStorage.getItem('favoriteFilm')).id],
      id_9: [],
      id_j: [],
      page: 1,
    };

    if (idFilm.id.length > 9) {
      refs.galeryLibraryBtn.classList.remove('visually-hidden');
    } else {
      refs.galeryLibraryBtn.classList.add('visually-hidden');
    }

    function createMas() {
      let m = [];
      let j = [];
      idFilm.id.map((el, i) => {
        i++;
        m.push(el);
        if (i % 9 === 0) {
          j.push(m);
          m = [];
        }
      });
      j.push(m);
      return j;
    }

    if (genre === 'all') {
      pageCardFilm(0);
    } else {
      idFilm.id.map((el, i) => {
        const ENDPOINT = `/3/movie/${el}`;
        fetchAllGet(BASE_URL, ENDPOINT, API_KEY, '&language=en-US&page=1')
          .then(markUpSort)
          .catch(console.log);
      });
    }

    function finalyMarkUp() {
      refs.galeryLibraryBtnClose = document.querySelectorAll(
        '.galery-library-btn-close'
      );
      refs.galeryLibraryBtnCloseSpan = document.querySelectorAll(
        '.card-backdrop + span'
      );
      refs.cardFilm1 = document.querySelectorAll('.card-film');
      refs.galeryLibraryBtnClose.forEach((el, i) => {
        el.addEventListener('mouseover', e => {
          refs.galeryLibraryBtnCloseSpan[i].classList.toggle('visually-hidden');
        });

        el.addEventListener('mouseout', e => {
          refs.galeryLibraryBtnCloseSpan[i].classList.toggle('visually-hidden');
        });

        el.addEventListener('click', e => {
          handlerBtnClose(e, refs.cardFilm1[i].getAttribute('id'), i);
        });
      });
    }

    function handlerBtnClose(e, id, i) {
      e.preventDefault();
      if (e.target.nodeName === 'BUTTON') {
        idFilm.id.splice(idFilm.id.indexOf(id), 1);
        idFilm.id_9.splice(idFilm.id.indexOf(id), 1);
        localStorage.setItem('favoriteFilm', JSON.stringify(idFilm));
        refs.cardFilm1[i].classList.add('visually-hidden');
      }
    }

    function pageCardFilm(n) {
      idFilm.id_9 = createMas();
      idFilm.id_9[n].map((el, i, arr) => {
        const ENDPOINT = `/3/movie/${el}`;
        fetchAllGet(BASE_URL, ENDPOINT, API_KEY, '&language=en-US&page=1')
          .then(markUp)
          .catch(console.log)
          .finally(() => {
            if (i === arr.length - 1) {
              finalyMarkUp();
            }
          });
      });
    }

    function markUpSort(data, i) {
      let cardFilm = '';
      refs.galeryLibraryBtn.classList.add('visually-hidden');
      const {
        original_title,
        poster_path,
        vote_average,
        genres,
        release_date,
        id,
      } = data.data;
      const starRatingNumber = Number(vote_average);
      const starRatingRound = Math.round(starRatingNumber);
      let starIcons = '';
      for (let i = 1; i <= 5; i++) {
        let dubbleI = i * 2;
        if (dubbleI <= starRatingRound) {
          starIcons += `<img class="card-vote-icon" src="${starIconFull}" alt="Rating Stars" />`;
        } else if (dubbleI % starRatingRound === 1) {
          starIcons += `<img class="card-vote-icon" src="${starIconHalf}" alt="Rating Stars" />`;
        } else {
          starIcons += `<img class="card-vote-icon" src="${starIconZero}" alt="Rating Stars" />`;
        }
      }
      if (
        genres
          .map(({ name }) => name)
          .join(', ')
          .toLowerCase()
          .includes(genre)
      ) {
        cardFilm = htmlMarkUp(
          ratingStarFull,
          genres,
          release_date,
          original_title,
          poster_path,
          id,
          starIcons
        );
        refs.galeryLibrary.insertAdjacentHTML('beforeend', cardFilm);
      }
    }

    function markUp(data) {
      const {
        original_title,
        poster_path,
        vote_average,
        genres,
        release_date,
        id,
      } = data.data;
      let cardFilm = '';
      const starRatingNumber = Number(vote_average);
      const starRatingRound = Math.round(starRatingNumber);
      let starIcons = '';
      for (let i = 1; i <= 5; i++) {
        let dubbleI = i * 2;
        if (dubbleI <= starRatingRound) {
          starIcons += `<img class="card-vote-icon" src="${starIconFull}" alt="Rating Stars" />`;
        } else if (dubbleI % starRatingRound === 1) {
          starIcons += `<img class="card-vote-icon" src="${starIconHalf}" alt="Rating Stars" />`;
        } else {
          starIcons += `<img class="card-vote-icon" src="${starIconZero}" alt="Rating Stars" />`;
        }
      }
      if (genre === 'all') {
        cardFilm = htmlMarkUp(
          ratingStarFull,
          genres,
          release_date,
          original_title,
          poster_path,
          id,
          starIcons
        );
        refs.galeryLibrary.insertAdjacentHTML('beforeend', cardFilm);
      }
    }

    function htmlMarkUp(
      ratingStarFull,
      genres,
      release_date,
      original_title,
      poster_path,
      id,
      starIcons
    ) {
      return `
  <div class="card-film" id="${id}">
    <div class="card-backdrop"></div>
    <span class="visually-hidden">Delete from Library</span>
    <button class="galery-library-btn-close modal-film-btn-close">
    <svg class="modal-film-icon-close">
      <use href="${iconClose}#icon-x"></use>
    </svg>
    </button>
    <img
      class="card-img"
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt=""
      loading="lazy"
      srcset="
        https://image.tmdb.org/t/p/w500${poster_path} 1x,
        https://image.tmdb.org/t/p/w500${poster_path} 2x
      "
    />
    <div class="card-info-section">
      <h3 class="card-info-title">${original_title}</h3>
      <div class="card-info">
        <p class="card-info-text">
        ${genres.map(({ name }) => name).join(', ')} | ${String(
        release_date
      ).slice(0, 4)}
        </p>
        <ul class="card-vote">
                ${starIcons}
        </ul>

      </div>
    </div>
  </div>

`;
    }
    refs.galeryLibraryBtn.addEventListener('click', handlerBtnLoad);

    function handlerBtnLoad(e) {
      e.preventDefault();
      pageCardFilm(idFilm.page++);

      //
      if (idFilm.id_9.length === idFilm.page) {
        e.currentTarget.classList.add('visually-hidden');
      }
    }
  }
}
