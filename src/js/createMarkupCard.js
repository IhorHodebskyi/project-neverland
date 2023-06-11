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
        `<div class = "cards-section-backphoto" style = "background-image: url('https://image.tmdb.org/t/p/w500${poster_path}');" id="${id}">
    <div class = "info-cards-section">
    <p class = "info-card-section-title">${original_title}</p>
    <p class = "info-card-section-date">${release_date}${genre_ids}</p>
    </div>
    <div class ="vote-average-section">${vote_average}</div>
    </div>
    </div>`
    )
    .join('');
  return cardMarkUp;
}

export { createMarkupCard };
