const selectBtnEl = document.querySelector(".select-btn");
const optionsEl = document.querySelector(".options")
const bodyEl = document.querySelector(".body");

selectBtnEl.addEventListener("click", () => {
    optionsEl.classList.toggle("hidden")
    createMarkupOption()
})

function createMarkupOption() {
    const currentYear = new Date().getFullYear();
    const oldestFilmYear = 1874;
    let optionsMarkup = '';

    for (let year = currentYear; year >= oldestFilmYear; year--) {
        optionsMarkup += `<li class="option">${year}</li>`;
    }

    optionsEl.innerHTML = optionsMarkup;
}

optionsEl.addEventListener("click", (evt) => {
    if(!evt.target.classList.contains("option")){
        return
    }

    selectBtnEl.firstElementChild.textContent = evt.target.textContent ;
    optionsEl.classList.toggle("hidden")
})