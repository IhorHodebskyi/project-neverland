
import axios from 'axios';

const BASE_GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';
const BAES_UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming';
const API_KEY = '057e36269a3ddafbb398756699f3ba82';
const refs = {
    galery: document.querySelector('.monthgalery'),
    
}

const respGenre = responseData(`${BASE_GENRE_URL}?api_key=${API_KEY}`);

async function responseData(url=''){
    if(url){
    return await axios.get(url);
    }
}
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2023-06-01&release_date.lte=2023-07-01 
responseData(`${BAES_UPCOMING_URL}?api_key=${API_KEY}&language=en-US&page=1`)
.then(markUp);

async function genreStr(arr){
        const data = await respGenre;
        return arr.map((el)=>el = data.data.genres.filter(({id})=>id == el)[0].name).join(' ');
      
 }

async function markUp(data){
    
    const randCard = Math.floor(Math.random() * 20);
    // console.log(data.data.results);
    data.data.results.map(async ({backdrop_path, title, original_title, id, release_date, vote_average, vote_count, popularity, overview, genre_ids},i)=>{
        
        if (i===randCard)
        {
            const str = `<div class="month-item" id="${id}">
                            <div class="month-item-img">
                                <img src="${BASE_IMG_URL}${backdrop_path}" alt="${original_title}" width="805">
                            </div>
                            <div class="month-item-title">
                                <h3>${title}</h3>
                                <h3>Release date<span class="month-rel-date">${release_date}</span></h3>
                                <h3>Vote / Votes<span class="month-vote">${vote_average}</span> / <span class="month-votes">${vote_count }</span></h3>
                                <h3>Popularity<span class="month-popular">${popularity}</span></h3>
                                <h3>Genre<span class="month-genre">${await genreStr(genre_ids)}</span></h3>
                                <p>About</p><span class="month-text">${overview}</span>
                                <button type="submit" class="month-btn">Add to my library</button>
                            </div>
                         </div>`;
            refs.galery.insertAdjacentHTML('beforeend', str);
            refs.monthBtn = document.querySelector('.month-btn');
            refs.monthItem = document.querySelector('.month-item');
            refs.monthBtn.addEventListener('click', handlerBtn);
        }
    });
      
}

function handlerBtn(e){
    e.preventDefault();
    const idFilm ={
        id: []
    }
    if (localStorage.getItem("favoriteFilm")){
        idFilm.id = [...JSON.parse(localStorage.getItem("favoriteFilm")).id];
               
    }
    
    idFilm.id.push(refs.monthItem.getAttribute('id'));
    localStorage.setItem("favoriteFilm", JSON.stringify(idFilm));
    
}