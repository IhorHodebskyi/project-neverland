import axios from 'axios';
// import { createMarkupCard } from './createMarkupCard';
import { refs } from './refs';
import ratingStarFull from '../images/reitingfull.svg';
import { genreStr } from './month';
import { handlerClickcardsSectionBackphoto } from './modal-film';
const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';

let originalData = [];
const randomIndex = Math.floor(Math.random() * 100);

async function fetchTrendsOfWeek() {
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${randomIndex}`
  );
  console.log(randomIndex);
  originalData = response.data.results;
  handleResponsive();

  return originalData;
}
// window.addEventListener('resize', handleResponsive);
function handleResponsive() {
  const screenWidth = window.innerWidth;
  let slicedData = [];
  console.log(slicedData);
  // if (screenWidth < 768) {
  //   return (slicedData = originalData.slice(0, 1));
  // }
  // slicedData = originalData.slice(0, 3);
  slicedData = originalData.slice(0, 3);
  createMarkupCard(slicedData);
}

fetchTrendsOfWeek();

export { fetchTrendsOfWeek };

function createMarkupCard(cardresult) {
  const cardMarkUp = cardresult
    .map(
      async({
        original_title,
        poster_path,
        vote_average,
        genre_ids,
        release_date,
        id,
      }, i) =>{
        const genresLine = await genreStr(genre_ids); 
        const str =`<a href="#" class="card-film" id="${id}">
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
            ${genresLine} | ${String(release_date).slice(0, 4)}
            </p>
            <ul class="card-vote">
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="${ratingStarFull}"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="${ratingStarFull}"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="${ratingStarFull}"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="${ratingStarFull}"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="${ratingStarFull}"
                  alt="Rating Stars"
                />
              </li>
            </ul>
          </div>
        </div>
      </a>`;
      refs.weeklyList.insertAdjacentHTML('beforeend', str);
      if (2 === i){
        refs.cardsSectionBackphoto = document.querySelectorAll('.card-film');
        refs.cardsSectionBackphoto.forEach(el =>
        el.addEventListener('click', handlerClickcardsSectionBackphoto)
      );}
      }
    );
      
  // refs.weeklyList.insertAdjacentHTML('beforeend', cardMarkUp);
}
