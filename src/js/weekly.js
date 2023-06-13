import axios from 'axios';
// import { createMarkupCard } from './createMarkupCard';
import { refs } from './refs';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';

let originalData = [];

async function fetchTrendsOfWeek() {
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&per_page=20`
  );
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
        <p class = "info-card-section-date">${String(release_date).slice(
          0,
          4
        )} | ${genre_ids}</p>
        </div>
        <div class ="vote-average-section">
        <ul class="vote-average-icons">
              <li class="vote-average-icons-items">
                <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
                  <use href="/src/images/reitingfull.svg">
                  </use>
                </svg>
              </li>
              <li class="vote-average-icons-items">
                <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
                  <use href="/src/images/reitingfull.svg">
                  </use>
                </svg>
              </li>
              <li class="vote-average-icons-items">
                <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
                  <use href="/src/images/reitingfull.svg">
                  </use>
                </svg>
              </li>
              <li class="vote-average-icons-items">
                <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
                  <use href="/src/images/reitingfull.svg">
                  </use>
                </svg>
              </li>
              <li class="vote-average-icons-items">
                <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
                  <use href="/src/images/reitingfull.svg">
                  </use>
                </svg>
              </li>
        </ul>
                </svg>
        </div>
        
        
        </div>`
    )
    .join('');

  refs.weeklyList.insertAdjacentHTML('beforeend', cardMarkUp);
}
