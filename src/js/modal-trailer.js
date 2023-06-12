import { trailerApi } from './fetchAllGet';
import * as basicLightbox from 'basiclightbox';
// import basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { refs } from './refs';

let instance;



function createModal(content) {
  instance = basicLightbox.create(content, {
    onClose: () => {
      document.removeEventListener('keydown', onEscKeyPress);
    },
    onShow: () => {
      document.addEventListener('keydown', onEscKeyPress);
    },
  });

  instance.show();
}

function handleTrailerResponse(response) {
  const trailerFilm = response.data.results;
  if (trailerFilm.length > 0) {
    const randomIndex = Math.floor(Math.random() * trailerFilm.length);
    const trailerKey = trailerFilm[randomIndex].key;
    const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

    const addTrailerVideo = `
      <iframe width="560" height="315" class="trailer__iframe" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;

    createModal(addTrailerVideo);
  } else {
    const noTrailerVideo = `
      <div class="no-trailer">
        <div class="no-trailer-content-wrap">
          <p class="no-trailer-text">OOPS...</p>
          <p class="no-trailer-text">We are very sorry!</p>
          <p class="no-trailer-text">But we couldn’t find the trailer.</p>
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

// refs.trailerBtn.addEventListener('click', trailerBtnClick);

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function trailerBtnClick(event) {
  event.preventDefault();
  
  const movieId = event.target.dataset.id;
  
  trailerApi(movieId)
    .then(function (response) {
      const trailerFilm = response.data.results;
      
      if (trailerFilm.length > 0) {
        const randomIndex = Math.floor(Math.random() * trailerFilm.length);
        const trailerKey = trailerFilm[randomIndex].key;
        const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
        
        const addTrailerVideo = `
          <iframe width="560" height="315" class="trailer__iframe" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;

        createModal(addTrailerVideo);
      } else {
        const noTrailerVideo = `
          <div class="no-trailer">
            <div class="no-trailer-content-wrap">
              <p class="no-trailer-text">OOPS...</p>
              <p class="no-trailer-text">We are very sorry!</p>
              <p class="no-trailer-text">But we couldn’t find the trailer.</p>
            </div>
          </div>
        `;

        createModal(noTrailerVideo);
      }
    })
    .catch(function (error) {
      console.error(error.message);
    });
}
export {trailerBtnClick}