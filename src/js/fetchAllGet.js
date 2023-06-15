import axios from 'axios';

// ---------- Hero API Movie Day ----------
async function serviceFilm() {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const ENDPOINT = '/trending/movie/day';
  const API_KEY = '5bf13f442a6612ea903461e28536fdca';

  const heroFilm = await axios.get(
    `${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&language=en-US`
  );

  return heroFilm;
}

async function fetchAllGet(BASE_URL, ENDPOINT = '', API_KEY = '', QUERY = '') {
  const hero_film = await axios.get(
    `${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&${QUERY}&language=en-US`
  );
  return hero_film;
}

// ---------- Hero Trailer API ----------
async function trailerApi(movieId) {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const ENDPOINT = '/movie/';
  const API_KEY = '5bf13f442a6612ea903461e28536fdca';

  const trailerFilm = await axios.get(
    `${BASE_URL}${ENDPOINT}${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );

  return trailerFilm;
}

// ---------- Name Genres API ----------
async function nameGenre() {
  const BASE_GENRE_URL = 'https://api.themoviedb.org';
  const ENDPOINT_GENRE = '/3/genre/movie/list';
  const API_KEY = '5bf13f442a6612ea903461e28536fdca';

  const responseGenres = await axios.get(
    `${BASE_GENRE_URL}${ENDPOINT_GENRE}?api_key=${API_KEY}`
  );
  console.log(responseGenres);
  return responseGenres;
}

export { serviceFilm, fetchAllGet, trailerApi, nameGenre };
