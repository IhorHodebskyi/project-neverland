import axios from "axios";
import { serviceFilm } from "./fetchAllGet";
import { refs } from "./refs";
/*async function serviceFilm() {
    const BASE_URL = "https://api.themoviedb.org/3";
    const ENDPOINT = "/trending/movie/day";
    const API_KEY = "5bf13f442a6612ea903461e28536fdca";

    const hero_film = await axios.get(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`);

    return hero_film;
    ;
}
export { serviceFilm };*/



serviceFilm()
    .then(data => {
        const first_film = (data.data.results)[0];
        console.log(first_film);
        if (!first_film) {
            refs.home_hero.classList.remove('is-hidden');
        }
        refs.home_hero_film_wraper.insertAdjacentHTML('beforeend', createMarkup(first_film));

        refs.home_hero.classList.add('is-hidden');

        refs.hero_trailer_btn.setAttribute("id", `${first_film.id}`);
        refs.go_to_catalog_btn.setAttribute("id", `${first_film.id}`);
    })
    .catch(err => console.log(err))

/*function createMarkup(arr) {
    return arr.map(({ original_title, poster_path, vote_average, overview }) => 
    `<div>
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
    <h2>${original_title}</h2>
    <p>${overview}</p>
    <p>${vote_average}</p>
    </div>`).join('')
    
}*/

function createMarkup({ original_title, poster_path, vote_average, overview}) {
    return `<div class = "js-home-hero-film" >
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" class = "js-home-hero-poster">
    <h2 class = "js-home-hero-title">${original_title}</h2>
    <p class = "js-home-hero-overview">${overview}</p>
    <p class = "js-home-hero-rate">${vote_average}</p>
    </div>`
}

