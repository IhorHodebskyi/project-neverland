import axios from 'axios';

import { pagination } from './pagination';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';
let page = pagination.getCurrentPage();
let value = '';

async function getMovies(page, value) {
  const rest = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&query=${value}&page=${page}`
  );
  console.log(rest.data);
  return rest;
}

// https://api.themoviedb.org/3/search/movie?api_key=057e36269a3ddafbb398756699f3ba82&query=Fight%20Club&include_adult=false&language=en-US&page=1

const form = document.querySelector('#search-form');
const list = document.querySelector('.create-gallery');
const oops = document.querySelector('.without-results-section');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // list.innerHTML = '';

  const value = e.target.elements.search.value;
  getFirstMovies(page, value);
  console.log(value, page);
}

async function getFirstMovies(page, value) {
  try {
    const data = await getMovies(page, value);
    console.log(data);
    console.log(data.data.results);
    if (!data) {
      oops.classList.remove('is-hidden');
      return;
    }
    createMarkup(data.data.results);
    console.log(data.data.results);
    pagination.reset(data.data.total_results);
    console.log(data.data.total_results);
  } catch (error) {
    console.log(error);
  }
}

console.log(value);

async function getEventsMovies(page, value) {
  console.log(page, value);
  try {
    const data = await getMovies(page, value);
    console.log(data);

    if (!data) {
      oops.classList.remove('is-hidden');
      return;
    } else {
      list.innerHTML = '';
      createMarkup(data.data.results);
    }
  } catch (error) {
    console.log(error);
  }
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
  getEventsMovies(currentPage);
});
console.log(value);
function createMarkup(data) {
  console.log(data);
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
    <p class = "info-card-section-date">${release_date}${genre_ids}</p>
    </div>
    <div class ="vote-average-section">${vote_average}</div>
    </div>
    </div>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', cardMarkUp);
}
