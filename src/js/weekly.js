import axios from 'axios';
import { createMarkupCard } from './createMarkupCard';
import { refs } from './refs';

const API_KEY = '5bf13f442a6612ea903461e28536fdca';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';

let originalData = [];

async function fetchTrendsOfWeek() {
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&per_page=20`
  );
  originalData = response.data.results;
  handleResponsive();
  window.addEventListener('resize', handleResponsive);
  return originalData;
}

function handleResponsive() {
  const screenWidth = window.innerWidth;
  let slicedData;

  if (screenWidth < 768) {
    slicedData = originalData.slice(0, 1);
  } else {
    slicedData = originalData.slice(0, 3);
  }

  refs.weeklyList.innerHTML = createMarkupCard(slicedData);
}

fetchTrendsOfWeek();

export { fetchTrendsOfWeek };
