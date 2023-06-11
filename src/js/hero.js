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
        const firstFilm = (data.data.results)[0];
        console.log(firstFilm);
        if (!firstFilm) {
            refs.homeHero.classList.remove('is-hidden');
        }
        refs.homeHeroFilmWraper.insertAdjacentHTML('beforeend', createMarkupHero(firstFilm));

        refs.homeHero.classList.add('is-hidden');

        /*refs.heroTrailerBtn.setAttribute("id", `${firstFilm.id}`);
        refs.goToCatalogBtn.setAttribute("id", `${firstFilm.id}`);*/
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

/*function createMarkup({ original_title, poster_path, vote_average, overview}) {
    return `<div class = "home-hero-film" >
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" class = "home-hero-poster">
    <h2 class = "home-hero-title">${original_title}</h2>
    <p class = "home-hero-rate">${vote_average}</p>
    <p class = "home-hero-overview">${overview}</p>
    </div>`
}*/


function createMarkupHero({ original_title, poster_path, vote_average, overview, id }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const retinaImageUrl = `https://image.tmdb.org/t/p/w1000${poster_path}`;
  return `
        <div class="home-hero-film" style="
        background-image: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),url('${imageUrl}');
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%), url('${retinaImageUrl}');
        }
        ">
        <h2 class="home-hero-title">${original_title}</h2>
        <p class="home-hero-rate">${vote_average}</p>
        <p class="home-hero-overview">${overview}</p>
        <div class="home-hero-btns">
        <button data-trailer-open type="button" class="hero-trailer-btn" id="${id}">
            Watch trailer
            </button>
            <button data-gocatalog-open type="button" class="go-to-catalog-btn" id="${id}">
            More details
            </button>
        </div>
        </div>
        
        </div>
  `;
}

/*function addPoints() {
    const heroOverview = document.querySelector('.home-hero-overview');
    let height = heroOverview.offsetHeight;
    console.log(height)
    if (height >= 66) {
        heroOverview.textContent += "..."
    }
}

addPoints()*/