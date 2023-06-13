
// import axios from 'axios';
import {fetchAllGet} from './fetchAllGet';
import { refs } from './refs';
const BASE_GENRE_URL = 'https://api.themoviedb.org';
const ENDPOINT_GENRE = '/3/genre/movie/list';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';
const BASE_IMG_URL_w500 = 'https://image.tmdb.org/t/p/original/';
const BASE_UPCOMING_URL = 'https://api.themoviedb.org';
const ENDPOINT_UPCOMING = '/3/movie/upcoming';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';
// '057e36269a3ddafbb398756699f3ba82';

const respGenre = fetchAllGet(BASE_GENRE_URL, ENDPOINT_GENRE, API_KEY, '');

fetchAllGet(BASE_UPCOMING_URL, ENDPOINT_UPCOMING, API_KEY,'&language=en-US&page=1')
.then(markUp);

async function genreStr(arr){
        const data = await respGenre;
        return arr.map((el)=>el = data.data.genres.filter(({id})=>id == el)[0].name).join(', ');
      
 }

async function markUp(data){
    
    const randCard = Math.floor(Math.random() * 20);
    data.data.results.map(async ({backdrop_path, poster_path, title, original_title, id, release_date, vote_average, vote_count, popularity, overview, genre_ids},i)=>{
        // <img src="${BASE_IMG_URL}${backdrop_path}" alt="${original_title}" width="805">
        // 
        if (i===randCard)
        {
            const str = `<div class="month-item" id="${id}">
                            <div>
                            <div class="month-item-img">
                                <picture>
                                    <source srcset="${BASE_IMG_URL}${backdrop_path}" media="(min-width: 768px)" width="805"/>
                                    <img src="${BASE_IMG_URL_w500}${poster_path}" alt="${original_title}"/>
                                </picture>
                            </div></div>
                            <div class="month-item-title">
                                <h3>${title}</h3>
                                <div class="month-item-title-text">
                                    <div>
                                        <h3>Release date<span class="month-rel-date">${release_date.replaceAll(
                                          '-',
                                          '.'
                                        )}</span></h3>
                                        <h3>Vote / Votes<span class="month-vote">${vote_average}</span> / <span class="month-votes">${vote_count}</span></h3>
                                    </div>
                                    <div>
                                        <h3>Popularity<span class="month-popular">${parseFloat(
                                          popularity
                                        ).toFixed(1)}</span></h3>
                                        <h3>Genre<span class="month-genre">${await genreStr(
                                          genre_ids
                                        )}</span></h3>
                                    </div>
                                </div>
                                <p>About</p><span class="month-text">${overview}</span>
                                <button type="submit" class="month-btn button-light">${textBtn(
                                  id
                                )}</button>
                            </div>
                         </div>`;
                        //  <div class="month-genre-flex"><div><h3>Genre</h3></div><div><span class="month-genre">${await genreStr(genre_ids)}</span></div></div>
            refs.monthGalery.insertAdjacentHTML('beforeend', str);
            refs.monthBtn = document.querySelector('.month-btn');
            refs.monthItem = document.querySelector('.month-item');
            refs.monthBtn.addEventListener('click', handlerBtn);
        }
    });
      
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