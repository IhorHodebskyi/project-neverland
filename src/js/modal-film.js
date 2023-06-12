import {fetchAllGet} from './fetchAllGet';
const refs={
    modalTrailerBackdrop: document.querySelector('.modal-film-backdrop'),
    modalTrailerWwindow: document.querySelector('.modal-film-window'),
}
const idFilm = '1076443';
const BASE_URL = 'https://api.themoviedb.org';
const ENDPOINT = `/3/movie/${idFilm}`;
const API_KEY = '5bf13f442a6612ea903461e28536fdca' 
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/w500/';

fetchAllGet(BASE_URL, ENDPOINT, API_KEY,'&language=en-US&page=1')
.then(markUp);

function markUp(data){
    const {backdrop_path, poster_path, title, original_title, id, release_date, vote_average, vote_count, popularity, overview, genres} = data.data;
    const str = `<div class="modal-trailer-item" id="${id}">
                            <div>
                            <div class="modal-trailer-item-img">
                                <img src="${BASE_IMG_URL_w500}${poster_path}" alt="${original_title}" height="478"/>
                            </div>
                            </div>
                            <div class="modal-trailer-item-title">
                                <h3>${title}</h3>
                                        <h3>Vote / Votes<span class="modal-trailer-vote">${vote_average}</span> / <span class="modal-trailer-votes">${vote_count }</span></h3>
                                        <h3>Popularity<span class="modal-trailer-popular">${parseFloat(popularity).toFixed(1)}</span></h3>
                                        <h3>Genre<span class="modal-trailer-genre">${genres.map(({name})=>name).join(', ')}</span></h3>
                                <p>About</p><span class="modal-trailer-text">${overview}</span>
                                <button type="submit" class="modal-trailer-btn">${textBtn(id)}</button>
                            </div>
                         </div>`;
                        
            refs.modalTrailerWwindow.insertAdjacentHTML('beforeend', str);
            refs.monthBtn = document.querySelector('.modal-trailer-btn');
            refs.monthItem = document.querySelector('.modal-trailer-item');
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