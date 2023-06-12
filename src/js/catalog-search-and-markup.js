import axios from 'axios';
import {handlerClickcardsSectionBackphoto} from './modal-film';
import { pagination } from './pagination';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const WEEK_BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';
const container = document.getElementById('pagination');
let page = pagination.getCurrentPage();
let value = '';

container.style.display = 'none';

async function getMovies(page, value) {
  const rest = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&query=${value}&page=${page}`
  );
  console.log(rest.data);
  
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

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  list.innerHTML = '';

  value = e.target.elements.search.value;
  getFirstMovies(page, value);
}

async function getFirstMovies(page, value) {
  
  try {
    const data = await getMovies(page, value);
    if (data.data.results.length === 0) {
      container.style.display = 'none';
      oops.classList.remove('is-hidden');
      return;
    }
    createMarkup(data.data.results);
    container.style.display = 'block';
    pagination.reset(data.data.total_pages);
  } catch (error) {
    console.log(error);
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
      }) =>
        `<div class = "cards-section-backphoto" style = "background-image: url('https://image.tmdb.org/t/p/w500${poster_path}');" id="${id}">
    <div class = "info-cards-section">
    <p class = "info-card-section-title">${original_title}</p>
    <p class = "info-card-section-date">${release_date}</p>
    <p class = "info-card-section-date">${genre_ids}</p>
    </div>
    <div class ="vote-average-section"></div>
    <ul class="vote-average-icons">
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
    </ul>
    </div>
    `
    )
    .join('');
  list.insertAdjacentHTML('beforeend', cardMarkUp);
  const cardsSectionBackphoto = document.querySelector('.cards-section-backphoto');
  cardsSectionBackphoto.addEventListener('click',handlerClickcardsSectionBackphoto);
}
