import { trailerApi } from './fetchAllGet';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import noTrailerJpg1 from '../images/no-trailer-x1.png';
import noTrailerJpg2 from '../images/no-trailer-x2.png';
import iconClose from '../images/symbol-defs.svg';

let instance;

function createModal(content) {
  instance = basicLightbox.create(content, {
    onClose: () => {
      document.removeEventListener('keydown', onEscKeyPress);
      document.body.style.overflow = '';
    },
    onShow: () => {
      document.addEventListener('keydown', onEscKeyPress);
      document.body.style.overflow = 'hidden';
    },
  });

  instance.show();

  const closeButtonModalTrailer = document.getElementById(
    'js-close-no-trailer-btn'
  );

  if (closeButtonModalTrailer) {
    closeButtonModalTrailer.addEventListener('click', () => {
      instance.close();
    });
  }
}

function handleTrailerResponse(response) {
  const trailerFilm = response.data.results;
  if (trailerFilm.length > 0) {
    const randomIndex = Math.floor(Math.random() * trailerFilm.length);
    const trailerKey = trailerFilm[randomIndex].key;
    const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

    const addTrailerVideo = `
      <div class="trailer-wrap"><iframe class="trailer-iframe" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    `;

    createModal(addTrailerVideo);
  } else {
    const noTrailerVideo = `
    <div class="no-trailer">
      <button type="button" class="no-trailer-close-btn" id="js-close-no-trailer-btn">
        <svg class="no-trailer-close-icon" width="16" height="16">
          <use href="${iconClose}#icon-x"></use>
        </svg>
      </button>
      <div class="no-trailer-content">
        <span class="no-trailer-text">OOPS...</span>
        <span class="no-trailer-text">We are very sorry!</span>
        <span class="no-trailer-text">But we couldn't find the trailer.</span>
      </div>
      <div class="no-trailer-img-wrap">
        <img
          class="no-trailer-img"
          src="${noTrailerJpg1}"
          alt="No trailer available"
          srcset="
            ${noTrailerJpg1} 1x,
            ${noTrailerJpg2} 2x
          "
        />
      </div>
    </div>
    `;
    createModal(noTrailerVideo);
  }
}

function trailerBtnClick(event) {
  event.preventDefault();
  const movieId = event.target.dataset.id;

  trailerApi(movieId)
    .then(handleTrailerResponse)
    .catch(function (error) {
      console.error(error.message);
    });
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

export { trailerBtnClick };
