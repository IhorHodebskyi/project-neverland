import axios from 'axios';
import { refs } from './refs';
import { genreStr } from './month';
import { handlerClickcardsSectionBackphoto } from './modal-film';
import starIconFull from '../images/reitingfull.svg';
import starIconHalf from '../images/reitinghalf.svg';
import starIconZero from '../images/reitingzero.svg';
const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';

let originalData = [];

const randomIndex = Math.floor((1 + Math.random()) * 10);
fetchTrendsOfWeek();
async function fetchTrendsOfWeek() {
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${randomIndex}`
  );
  originalData = response.data.results;
  handleResponsive(originalData);
  return originalData;
}

function handleResponsive() {
  const screenWidth = window.innerWidth;
  let slicedData = [];

  slicedData = originalData.slice(0, 3);
  createMarkup(slicedData);
}

export { fetchTrendsOfWeek };

async function createMarkup(data) {
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
      refs.weeklyList.insertAdjacentHTML('beforeend', str);
      if (data.length - 1 === i) {
        refs.cardsSectionBackphoto = document.querySelectorAll('.card-film');
        refs.cardsSectionBackphoto.forEach(el =>
          el.addEventListener('click', handlerClickcardsSectionBackphoto)
        );
      }
    }
  );
}
