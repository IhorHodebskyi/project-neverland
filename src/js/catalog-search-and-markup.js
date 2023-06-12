import axios from 'axios';

import { pagination } from './pagination';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

async function getMovies(value) {
  const rest = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&query=${value}&language=en-US&page=1`
  );
  console.log(rest.data);
  return rest;
}

// https://api.themoviedb.org/3/search/movie?api_key=057e36269a3ddafbb398756699f3ba82&query=Fight%20Club&include_adult=false&language=en-US&page=1

const form = document.querySelector('#search-form');
const list = document.querySelector('.create-gallery');

form.addEventListener('submit', onSubmit);
let page = pagination.getCurrentPage();
let value = '';

function onSubmit(e) {
  e.preventDefault();
  list.innerHTML = '';

  const value = e.target.elements.search.value;
  getFirstMovies(page, value);
  console.log(value);
}

async function getFirstMovies(value) {
  try {
    const data = await getMovies(value);
    console.log(data);
    console.log(data.data.results);
    if (!data) {
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

async function getEventsMovies(page) {
  try {
    const data = await getMovies(page, value);
    console.log(data);

    if (!data) {
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

 