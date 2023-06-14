import {fetchAllGet} from './fetchAllGet';
import { refs } from "./refs";
import ratingStarFull from '../images/reitingfull.svg';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '5bf13f442a6612ea903461e28536fdca' 
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/w500/';

if(!JSON.parse(localStorage.getItem("favoriteFilm"))){
  const str=`<div class="galery-library-text"><span>OOPS...</span><span>We are very sorry!</span><span>You don’t have any movies at your library.</span></div>`;
  refs.galeryLibrary.insertAdjacentHTML('beforeend', str);
  refs.galeryLibraryBtn.textContent="Search movie";
}
else 
{
const idFilm ={
    id: [...JSON.parse(localStorage.getItem("favoriteFilm")).id],
    id_9:[],
    id_j:[],
    page: 1,
}

idFilm.id.map((el,i)=>{
  i++;
  idFilm.id_j.push(el);
  if(i%9===0){
    idFilm.id_9.push(idFilm.id_j);
    idFilm.id_j=[];
  }
});
idFilm.id_9.push(idFilm.id_j)

if(idFilm.id.length){
  refs.galeryLibraryBtn.textContent="Load more";
  pageCardFilm(0);
  if(idFilm.id_9.length===idFilm.page){
    refs.galeryLibraryBtn.classList.toggle('hidden');
    
  }
}

function pageCardFilm(n){
      idFilm.id_9[n].map((el,i)=>{const ENDPOINT = `/3/movie/${el}`;
      fetchAllGet(BASE_URL, ENDPOINT, API_KEY,'&language=en-US&page=1')
      .then(markUp)
      .catch(console.log);
      })
  }

function markUp(data){
  
    const { original_title, poster_path, vote_average, genres, release_date, id } = data.data;
    
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
              ${String(release_date).slice(0, 4)} | ${genres.map(({name})=>name).join(', ')}
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

refs.galeryLibraryBtn.addEventListener('click', handlerBtnLoad);

function handlerBtnLoad(e){
  e.preventDefault();
  pageCardFilm(idFilm.page++);
  // console.log(idFilm.id_9.length, idFilm.page);
  if(idFilm.id_9.length===idFilm.page){
    e.currentTarget.classList.toggle('hidden');
    e.currentTarget.removeEventListener('click', handlerBtnLoad);
    
  } 
}
}