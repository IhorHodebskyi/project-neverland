const spinnerEl = document.querySelector(".spinner");
const bodyEl = document.querySelector(".body")
const mainContentEl = document.querySelector(".main-content")
spinnerEl.style.display = 'block';

window.addEventListener('DOMContentLoaded', function() {
    const spinnerEl = document.querySelector(".spinner");
    setTimeout(function() {

        spinnerEl.style.display = 'none';
        mainContentEl.style.display = "block"
    }, 100); 
});