import axios from 'axios';
// import { createMarkupCard } from './createMarkupCard';
import { refs } from './refs';

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
      ({
        original_title,
        poster_path,
        vote_average,
        genre_ids,
        release_date,
        id,
      }) =>
        `<a href="#" class="card-film" id="${id}">
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
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="../../images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="../../images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="../../images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="../../images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="../../images/reitingfull.svg"
                  alt="Rating Stars"
                />
              </li>
            </ul>
          </div>
        </div>
      </a>`
    )
    .join('');

  refs.weeklyList.insertAdjacentHTML('beforeend', cardMarkUp);
}
