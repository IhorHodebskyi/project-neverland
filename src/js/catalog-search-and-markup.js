import axios from 'axios';
import { handlerClickcardsSectionBackphoto } from './modal-film';
import { pagination } from './pagination';
import { refs } from './refs';
import starIconFull from '../images/reitingfull.svg';
import starIconHalf from '../images/reitinghalf.svg';
import starIconZero from '../images/reitingzero.svg';
const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const WEEK_BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';
const container = document.getElementById('pagination');
let page = pagination.getCurrentPage();
let value = '';

container.style.display = 'none';

const spinnerEl = document.querySelector('.spinner');

function showSpinner() {
  spinnerEl.style.display = 'block';
}

function hideSpinner() {
  spinnerEl.style.display = 'none';
}

async function getMovies(page, value, year) {
  const rest = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&query=${value}&language=en-US&page=${page}&year=${year}`
  );
  return rest;
}

async function getMoviesTrendingWeek(page) {
  const rest = await axios.get(
    `${WEEK_BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}&per_page=100`
  );
  console.log(rest);
  return rest;
}

const form = document.querySelector('#search-form');
const list = document.querySelector('.create-gallery');
const oops = document.querySelector('.without-results-section');
const selectBtnEl = document.querySelector('.select-btn');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  list.innerHTML = '';

  value = e.target.elements.search.value;
  const year = selectBtnEl.textContent;
  getFirstMovies(page, value, year);
  console.log(value, page);
}

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

// async function getFirstMoviesTrendingWeek(page) {
//   try {
//     const data = await getMoviesTrendingWeek(page);
//     console.log(data);
//     console.log(data.data.results);
//     if (!data) {
//       oops.classList.remove('is-hidden');
//       return;
//     }
//     createMarkup(data.data.results);
//     pagination.reset(data.data.total_pages);
//   } catch (error) {
//     console.log(error);
//   }
// }

getEventsMoviesTrendingWeek(page);

async function getEventsMoviesTrendingWeek(page) {
  console.log(page);
  try {
    const data = await getMoviesTrendingWeek(page);
    console.log(data);

    list.innerHTML = '';
    createMarkup(data.data.results);
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(data) {
  const cardMarkUp = data
    .map(
      ({
        original_title,
        poster_path,
        vote_average,
        genre_ids,
        release_date,
        id,
      }) => {
      const starRatingNumber = Number(vote_average);
      const starRatingRound = Math.round(starRatingNumber);

      let starIcons = '';
      for (let i = 0; i < 5; i++) {
        if (i < starRatingRound) {
          starIcons += '<img class="card-vote-icon" src="${starIconFull}" alt="Rating Stars" />';
        } else if (i === starRatingRound && starRatingRound % 1 !== 0) {
            starIcons += '<img class="card-vote-icon" src="${starIconHalf}" alt="Rating Stars" />';
          } else {
          starIcons += '<img class="card-vote-icon" src="${starIconZero}" alt="Rating Stars" />';
        }
      }

      return `
        <a href="#" class="card-film" id="${id}">
          <div class="card-backdrop"></div>
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
                ${String(release_date).slice(0, 4)} | ${genre_ids}
              </p>
              <ul class="card-vote">
                ${starIcons}
              </ul>
            </div>
          </div>
        </a>
      `;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', cardMarkUp);
  refs.cardsSectionBackphoto = document.querySelectorAll('.card-film');
  refs.cardsSectionBackphoto.forEach(el =>
    el.addEventListener('click', handlerClickcardsSectionBackphoto)
  );
  // const cardsSectionBackphoto = document.querySelector(
  //   '.cards-section-backphoto'
  // );
  // cardsSectionBackphoto.addEventListener(
  //   'click',
  //   handlerClickcardsSectionBackphoto
  // );
}
