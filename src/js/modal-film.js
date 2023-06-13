import {fetchAllGet} from './fetchAllGet';
import {refs} from './refs'

const idFilm = '1073443';
const BASE_URL = 'https://api.themoviedb.org';
const ENDPOINT = `/3/movie/${idFilm}`;
const API_KEY = '5bf13f442a6612ea903461e28536fdca' 
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/original/';

fetchAllGet(BASE_URL, ENDPOINT, API_KEY,'&language=en-US&page=1')
.then(markUp);

function markUp(data){
    const {backdrop_path, poster_path, title, original_title, id, release_date, vote_average, vote_count, popularity, overview, genres} = data.data;
    const str = `<div class="modal-film-item" id="${id}">
                            <div>
                            <div class="modal-film-item-img">
                                <img src="${BASE_IMG_URL_w500}${poster_path}" alt="${original_title}" height="478"/>
                            </div>
                            </div>
                            <div class="modal-film-item-title">
                                <h3>${title}</h3>
                                        <h3>Vote / Votes<span class="modal-film-vote">${vote_average}</span> / <span class="modal-film-votes">${vote_count }</span></h3>
                                        <h3>Popularity<span class="modal-film-popular">${parseFloat(popularity).toFixed(1)}</span></h3>
                                        <h3>Genre<span class="modal-film-genre">${genres.map(({name})=>name).join(', ')}</span></h3>
                                <p>About</p><span class="modal-film-text">${overview}</span>
                                <button type="submit" class="modal-film-btn">${textBtn(id)}</button>
                            </div>
                         </div>`;
                        
            refs.modalTrailerWwindow.insertAdjacentHTML('beforeend', str);
            refs.monthBtn = document.querySelector('.modal-film-btn');
            refs.monthItem = document.querySelector('.modal-film-item');
            refs.monthBtn.addEventListener('click', handlerBtn);
}

function textBtn(id){
    const idFilm ={
        id: []
    }
    if (localStorage.getItem("favoriteFilm")){
        idFilm.id = [...JSON.parse(localStorage.getItem("favoriteFilm")).id];
               
    }
    return !idFilm.id.includes(id.toString()) ? 'Add to my library' : 'Remove from my library';
}

function handlerBtn(e){
    e.preventDefault();
    const id = refs.monthItem.getAttribute('id');
    const idFilm ={
        id: []
    }
    if (localStorage.getItem("favoriteFilm")){
        idFilm.id = [...JSON.parse(localStorage.getItem("favoriteFilm")).id];
               
    }
    if(!idFilm.id.includes(id)){
        if(e.currentTarget.textContent === 'Add to my library'){e.currentTarget.textContent = 'Remove from  my library';}
        idFilm.id.push(id);
        localStorage.setItem("favoriteFilm", JSON.stringify(idFilm));
    }else {
        idFilm.id.splice(idFilm.id.indexOf(id),1);
        localStorage.setItem("favoriteFilm", JSON.stringify(idFilm));
        e.currentTarget.textContent = 'Add to my library';
    }
    
    
}

refs.modalFilmBtnClose.addEventListener('click', handlerBtnClose);

function handlerBtnClose(e){
    e.preventDefault();
    refs.modalTrailerBackdrop.classList.toggle('visually-hidden');
}

function handlerClickcardsSectionBackphoto(e){
    refs.modalTrailerBackdrop.classList.toggle('visually-hidden')  
}

export {handlerClickcardsSectionBackphoto}