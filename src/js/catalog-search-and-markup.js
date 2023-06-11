import axios from 'axios';
import { createMarkupCard } from './createMarkupCard';
import { refs } from './refs';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

const getMovies = async (title, currentPage) => {
  return await axios(
    `${BASE_URL}?api_key=${API_KEY}&query=${title}&language=en-US&page=1`
  );
};
// https://api.themoviedb.org/3/search/movie?api_key=057e36269a3ddafbb398756699f3ba82&query=Fight%20Club&include_adult=false&language=en-US&page=1

const form = document.querySelector('#search-form');
const wrap = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);
let page = 1;
let value = '';

function onSubmit(e) {
  e.preventDefault();

  page = 1;
  wrap.innerHTML = '';
  const { searchQuery } = e.currentTarget.elements;
  value = searchQuery.value.trim();
  if (!value) {
    return;
  }
  getMovies(value, page).then(({ data }) => {
    console.log(data);
    if (data.results.length === 0) {
      
    } else {
      createMarkupCard(data);
      wrap.insertAdjacentHTML('beforeend', cardMarkUp)
    }
  });
}

// function createMarkup({ results }) {
//   const markup = results
//     ?.map(
//       ({
//         poster_path,
//         original_title,
//         id,
//         release_date,
//         vote_average,
//         vote_count,
//         popularity,
//         genre_ids,
//       }) => `<div class="photo-card">
//   <img src="${BASE_IMG_URL}${poster_path}" alt="${original_title}" loading="lazy" width="330"/>
//   <div class="info" id="${id}">
//     <p class="info-item">
//       <b>original_title</b></br>${original_title}
//     </p>
//     <p class="info-item">
//       <b>release_date</b></br>${release_date}
//     </p>
//     <p class="info-item">
//       <b>vote_average</b></br>${vote_average}
//     </p>
//     <p class="info-item">
//       <b>vote_count</b></br>${vote_count}
//     </p>
//     <p class="info-item">
//       <b>popularity</b></br>${popularity}
//     </p>
//     <p class="info-item">
//       <b>genre_ids</b></br>${genre_ids}
//     </p>
//   </div>
// </div>`
//     )
//     .join('');
//   wrap.insertAdjacentHTML('beforeend', markup);
// }

