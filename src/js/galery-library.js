import {fetchAllGet} from './fetchAllGet';
import { refs } from "./refs";
import ratingStarFull from '../images/reitingfull.svg';

// import { createMarkup } from './catalog-search-and-markup';
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '5bf13f442a6612ea903461e28536fdca' 
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/w500/';

const idFilm ={
    id: [...JSON.parse(localStorage.getItem("favoriteFilm")).id],
}
if(idFilm.id.length){
    console.log(idFilm.id)
    idFilm.id.map((el,i)=>{const ENDPOINT = `/3/movie/${el}`;
    fetchAllGet(BASE_URL, ENDPOINT, API_KEY,'&language=en-US&page=1')
    .then(markUp)
    .catch(console.log);
    
    })
    
}
function markUp(data){
    const { original_title, poster_path, vote_average, genre_ids, release_date, id } = data.data;
    const cardFilm = `
      <div class="card-film" id="${id}">
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
                  src="${ratingStarFull}"
                  alt="Rating Stars"
                />
              </li>
              <li class="card-vote-items">
                <img
                  class="card-vote-icon"
                  src="${ratingStarFull}g"
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
      </div>

    `;
    refs.galeryLibrary.insertAdjacentHTML('beforeend', cardFilm);
    
}
