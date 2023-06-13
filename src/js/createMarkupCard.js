function createMarkupCard({ cardresult }) {
  const cardMarkUp = cardresult
    .map(
      ({
        original_title,
        poster_path,
        vote_average,
        genre_ids,
        release_date,
        id,
      }) =>
        `<div class="cards-section-backphoto" style="background-image: url('https://image.tmdb.org/t/p/original${poster_path}');" id="${id}">
    <div class="info-cards-section">
    <p class="info-card-section-title">${original_title}</p>
    <p class="info-card-section-date">${release_date}${genre_ids}</p>
    </div>
    <div class="vote-average-section">
    <ul class="vote-average-icons">
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
          <li class="vote-average-icons-items">
            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">
              <use href="/src/images/symbol-defs.svg#icon-empty-star">
              </use>
            </svg>
          </li>
    </ul>
    </div>
    </div>`
    )
    .join('');
  return cardMarkUp;
}

export { createMarkupCard };
