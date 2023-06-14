const spinnerEl = document.querySelector(".spinner");
const bodyEl = document.querySelector(".body")
const mainContentEl = document.querySelector(".main-content")
mainContentEl.style.display = "none"
spinnerEl.style.display = 'block';

window.addEventListener('DOMContentLoaded', function() {
    console.log("g");
    const spinnerEl = document.querySelector(".spinner");
    setTimeout(function() {

        spinnerEl.style.display = 'none';
        mainContentEl.style.display = "block"
    }, 500); 
});