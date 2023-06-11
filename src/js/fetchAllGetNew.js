import axios from 'axios';

async function fetchAllGet(BASE_URL, ENDPOINT='', API_KEY='', QUERY='') {
        const hero_film = await axios.get(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&${QUERY}`);
        return hero_film;
    }
export { fetchAllGet };