import axios from 'axios';
import { handlerClickcardsSectionBackphoto } from './modal-film';
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
        `
      <a href="#" class="card-film" id="${id}">
        <div class="card-backdrop"></div>
        <img
          class="card-img"
          src="/src/images/test-photo.jpg"
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
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="/src/images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="/src/images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="/src/images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="/src/images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="/src/images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
            </ul>
          </div>
        </div>
      </a>
    `
    )
    .join('');
  list.insertAdjacentHTML('beforeend', cardMarkUp);
  const cardsSectionBackphoto = document.querySelector(
    '.cards-section-backphoto'
  );
  cardsSectionBackphoto.addEventListener(
    'click',
    handlerClickcardsSectionBackphoto
  );
}
