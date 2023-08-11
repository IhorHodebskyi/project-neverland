import axios from 'axios';
import { serviceFilm } from './fetchAllGet';
import { refs } from './refs';
import { trailerBtnClick } from './modal-trailer';
import { handlerClickcardsSectionBackphoto } from './modal-film';
import starIconFull from '../images/reitingfull.svg';
import starIconHalf from '../images/reitinghalf.svg';
import starIconZero from '../images/reitingzero.svg';

function addHeroText() {
  let width = refs.homeHeroFilmWraper.offsetWidth;
  if (width >= 768 && refs.homeHero) {
    refs.homeHeroText.textContent +=
      'Decorate your space, choose your films, and stock up on snacks for the full experience.';
  }
}
addHeroText();

serviceFilm()
  .then(data => {
    const allFilms = data.data.results;
    const randomFilmIndex = Math.floor(Math.random() * allFilms.length);
    const filmInHero = allFilms[randomFilmIndex];

    if (!filmInHero) {
    }
    refs.homeHeroFilmWraper.innerHTML = createMarkupHero(filmInHero);

    refs.trailerBtn = document.querySelector('.js-hero-trailer');
    refs.trailerBtn.addEventListener('click', trailerBtnClick);

    const heroOpenCard = document.querySelector('.hero-open-card');
    heroOpenCard.addEventListener('click', handlerClickcardsSectionBackphoto);
  })
  .catch(err => console.log(err));

function createMarkupHero({
  original_title,
  backdrop_path,
  vote_average,
  overview,
  id,
}) {
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const retinaImageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  const starRatingNumber = Number(vote_average);
  const starRatingRound = Math.round(starRatingNumber);

  let starIcons = '';
  for (let i = 1; i <= 5; i++) {
    let dubbleI = i * 2;
    if (dubbleI <= starRatingRound) {
      starIcons += `<img class="home-hero-rate-icon" src="${starIconFull}" alt="Rating Stars" />`;
    } else if (dubbleI % starRatingRound === 1) {
      starIcons += `<img class="home-hero-rate-icon" src="${starIconHalf}" alt="Rating Stars" />`;
    } else {
      starIcons += `<img class="home-hero-rate-icon" src="${starIconZero}" alt="Rating Stars" />`;
    }
  }

  return `
      <div class="home-hero-film" style="
        background-image: linear-gradient(90deg, rgba(17, 17, 17, 1) 33.63%, rgba(17, 17, 17, 0) 72.86%),
                          linear-gradient(-90deg, rgba(17, 17, 17, 1) 1%, rgba(17, 17, 17, 0) 25%),
                          linear-gradient(0deg, rgba(17, 17, 17, 1) 1%, rgba(17, 17, 17, 0) 25%),
                          linear-gradient(180deg, rgba(17, 17, 17, 1) 1%, rgba(17, 17, 17, 0) 25%),
                          url('${imageUrl}');
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          background-image: linear-gradient(90deg, rgba(17, 17, 17, 1) 33.63%, rgba(17, 17, 17, 0) 72.86%),
                            linear-gradient(-90deg, rgba(17, 17, 17, 1) 1%, rgba(17, 17, 17, 0) 25%),
                            linear-gradient(0deg, rgba(17, 17, 17, 1) 1%, rgba(17, 17, 17, 0) 25%),
                            linear-gradient(180deg, rgba(17, 17, 17, 1) 1%, rgba(17, 17, 17, 0) 25%),
                            url('${retinaImageUrl}');">
        <div class="home-hero-content">
          <h2 class="home-hero-title">${original_title}</h2>
          <div class="home-hero-rate">${starIcons}</div>
          <p class="home-hero-text">${overview}</p>
          <div class="home-hero-btns">
            <button data-trailer-open type="button" class="hero-trailer-btn js-hero-trailer button-light" data-id="${id}">
              Watch trailer
            </button>
            <button data-gocatalog-open type="button" class="go-to-catalog-btn hero-open-card button-dark" id="${id}">
              More details
            </button>
          </div>
        </div>
      </div>
  `;
}
