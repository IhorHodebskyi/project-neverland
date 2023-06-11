import axios from 'axios';

async function serviceFilm() {
    const BASE_URL = "https://api.themoviedb.org/3";
    const ENDPOINT = "/trending/movie/day";
    const API_KEY = "5bf13f442a6612ea903461e28536fdca";

    const heroFilm = await axios.get(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`);

    return heroFilm;
    ;
}
export { serviceFilm };