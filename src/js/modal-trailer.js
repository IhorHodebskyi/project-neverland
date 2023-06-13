import { trailerApi } from './fetchAllGet';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let instance;

/**
 * The function creates a modal with the given content and adds event listeners for closing the modal.
 * @param content - The content parameter is the HTML content that will be displayed inside the modal.
 * It can be a string of HTML code or a reference to an HTML element.
 */
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

/**
 * The function handles the response from a trailer API and either creates a modal with a "no trailer"
 * message or adds a trailer video to the modal.
 * @param response - The response object returned from an API call.
 */
function handleTrailerResponse(response) {
  const trailerFilm = response.data.results;
  if (trailerFilm.length > 0) {
    const noTrailerVideo = `
    <div class="no-trailer" id="js-close-no-trailer">
      <button type="button" class="no-trailer-close-btn" id="js-close-no-trailer-btn">
        <svg class="no-trailer-close-icon" width="16" height="16">
          <use href="/src/images/symbol-defs.svg#icon-x"></use>
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
          src="/src/images/no-trailer-x1.png"
          alt="No trailer available"
          srcset="
            /src/images/no-trailer-x1.png 1x,
            /src/images/no-trailer-x2.png 2x
          "
        />
      </div>
    </div>
    `;
    createModal(noTrailerVideo);
  } else {
    const randomIndex = Math.floor(Math.random() * trailerFilm.length);
    const trailerKey = trailerFilm[randomIndex].key;
    const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

    const addTrailerVideo = `
      <div class="trailer-wrap"><iframe width="560" height="315" class="trailer__iframe" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    `;

    createModal(addTrailerVideo);
  }
}

/**
 * This function handles the click event on a trailer button, retrieves the movie ID from the button's
 * dataset, calls the trailer API with the movie ID, and handles the response.
 * @param event - The event parameter is an object that represents an event that occurred in the
 * browser, such as a button click or a form submission. It contains information about the event, such
 * as the target element and any data associated with it. In this case, the function is using the event
 * object to prevent the default
 */
function trailerBtnClick(event) {
  event.preventDefault();
  const movieId = event.target.dataset.id;

  trailerApi(movieId)
    .then(handleTrailerResponse)
    .catch(function (error) {
      console.error(error.message);
    });
}

/**
 * The function checks if the "Escape" key is pressed and closes an instance if it is.
 * @param event - The event parameter is an object that contains information about the event that
 * occurred, such as the type of event, the target element, and any additional data related to the
 * event. In this case, it is used to check if the key pressed was the Escape key.
 */
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

/**
 * The function hides a modal with the ID "js-close-no-trailer".
 */
function closeNoTrailerModal() {
  const modal = document.querySelector('#js-close-no-trailer');
  modal.style.display = 'none';
}

const closeNoTrailerButton = document.querySelector('#js-close-no-trailer-btn');
if (closeNoTrailerButton) {
  closeNoTrailerButton.addEventListener('click', closeNoTrailerModal);
}

export { trailerBtnClick };
