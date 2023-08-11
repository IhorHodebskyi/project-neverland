import axios from 'axios';
import { fetchAllGet } from './fetchAllGet';
import { handlerClickcardsSectionBackphoto } from './modal-film';
import { pagination } from './pagination';
import { refs } from './refs';
import starIconFull from '../images/reitingfull.svg';
import starIconHalf from '../images/reitinghalf.svg';
import starIconZero from '../images/reitingzero.svg';
const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const WEEK_BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';

const BASE_GENRE_URL = 'https://api.themoviedb.org';
const ENDPOINT_GENRE = '/3/genre/movie/list';
const respGenre = fetchAllGet(BASE_GENRE_URL, ENDPOINT_GENRE, API_KEY, '');
const carta = '/8vvJwtpmqTwAkpDNHfGsphVNxYi.jpg';

async function genreStr(arr) {
  const data = await respGenre;
  return arr
    .map(el => (el = data.data.genres.filter(({ id }) => id == el)[0]?.name))
    .join(', ');
}

const container = document.getElementById('pagination1');
let page = pagination.getCurrentPage();
let value = '';
let DELTA_URL = WEEK_BASE_URL;
container.style.display = 'none';

const input = document.querySelector('.input-field');

const spinnerEl = document.querySelector('.spinner');

function showSpinner() {
  spinnerEl.style.display = 'block';
}

function hideSpinner() {
  spinnerEl.style.display = 'none';
}

async function getMovies(page, value, year) {
  console.log(year);
  const rest = await axios.get(
    `${DELTA_URL}?api_key=${API_KEY}&query=${value}&language=en-US&page=${page}&year=${year}`
  );
  return rest;
}

input.addEventListener('input', onE);

function onE(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.length > 0) {
    return (DELTA_URL = BASE_URL);
  }
}

const form = document.querySelector('#search-form');
const list = document.querySelector('.create-gallery');
const oops = document.querySelector('.without-results-section');
const selectText = document.querySelector('.select-text');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  list.innerHTML = '';

  value = e.target.elements.search.value;
  const year = selectText.textContent;
  getFirstMovies(page, value, year);
  console.log(e.currentTarget);
}
getFirstMovies(page, value);
async function getFirstMovies(page, value, year) {
  try {
    showSpinner();
    const data = await getMovies(page, value, year);
    if (data.data.results.length === 0) {
      container.style.display = 'none';

      oops.classList.remove('is-hidden');
      return;
    }
    oops.classList.add('is-hidden');
    createMarkup(data.data.results);
    container.style.display = 'block';
    pagination.reset(data.data.total_pages);
  } catch (error) {
    console.log(error);
  } finally {
    hideSpinner();
  }
}

async function getEventsMovies(page, value) {
  try {
    const data = await getMovies(page, value);
    if (data.data.results.length === 0) {
      container.style.display = 'none';
      oops.classList.remove('is-hidden');
      return;
    }
    list.innerHTML = '';
    createMarkup(data.data.results);
    container.style.display = 'block';
  } catch (error) {
    console.log(error);
  }
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  getEventsMovies(currentPage, value);
});

async function createMarkup(data) {
  console.log(data);
  data.map(
    async (
      {
        name,
        original_title,
        poster_path,
        vote_average,
        genre_ids,
        release_date,
        id,
      },
      i
    ) => {
      const starRatingNumber = Number(vote_average);
      const starRatingRound = Math.round(starRatingNumber);
      const genresLine = await genreStr(genre_ids);

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

      const str = `
        <div class="card-film" id="${id}">
          <div class="card-backdrop"></div>
          <img
            class="card-img"
            src="https://image.tmdb.org/t/p/w500${poster_path || carta}"
            alt=""
            loading="lazy"
            srcset="
              https://image.tmdb.org/t/p/w500${poster_path || carta} 1x,
              https://image.tmdb.org/t/p/w500${poster_path || carta} 2x
            "
          />
          <div class="card-info-section">
            <h3 class="card-info-title">${original_title || name}</h3>
            <div class="card-info">
              <p class="card-info-text">
              ${genresLine} | ${String(release_date).slice(0, 4)}
              </p>
              <ul class="card-vote">
                ${starIcons}
              </ul>
            </div>
          </div>
        </div>
      `;
      list.insertAdjacentHTML('beforeend', str);
      if (data.length - 1 === i) {
        refs.cardsSectionBackphoto = document.querySelectorAll('.card-film');
        refs.cardsSectionBackphoto.forEach(el =>
          el.addEventListener('click', handlerClickcardsSectionBackphoto)
        );
      }
    }
  );
}
