const themeCheckboxEl = document.querySelector(".theme-switch__checkbox");
const themeElements = document.querySelectorAll(".theme-element");

const isLightThemeExists = localStorage.getItem("theme");
console.log("fdf");
if (isLightThemeExists) {
  themeCheckboxEl.checked = true;

  toggleStylesTheme();
}

themeCheckboxEl.addEventListener('click', () => {

  if (themeCheckboxEl.checked) {
    localStorage.setItem("theme", "light")
  }else {  localStorage.removeItem("theme") }
  
  toggleStylesTheme();
})

function toggleStylesTheme() {
  themeElements.forEach( (element) => {
    const classMatched = true; 
    
    switch (classMatched) {
      //////////////////////////////// section 
      case element.classList.contains("body") ||
           element.classList.contains("header") ||
           element.classList.contains("footer") ||
           element.classList.contains("search-section")||
           element.classList.contains("without-results-section"):
        element.classList.toggle("light-theme");
        break;
    /////////////////////////////////// text grey 
      case element.classList.contains("navbar_item_link")||
           element.classList.contains("logo_text") ||
           element.classList.contains("select-text") ||
           element.classList.contains("wraper_text"):
        element.classList.toggle("light-theme__text--grey");
        break;      
     /////////////////////////////////// text black
      case element.classList.contains("without-results-text"):
           element.classList.toggle("light-theme__text--black");
        break;    
      ////////////////////////////////// input or ul 
      case element.classList.contains("input-field")||
           element.classList.contains("options") ||
           element.classList.contains("gallery-section") ||
           element.classList.contains("select-btn"):
        element.classList.toggle("light-theme__input");
        break;  
      /////////////////////////////////// icon 
      case element.classList.contains("icon-search")||
           element.classList.contains("icon-arrow-down")||
           element.classList.contains("icon-clear-text"):
        element.classList.toggle("light-theme__search--icon");
        break;  
      case element.classList.contains("section secondaryText"):
        element.classList.toggle("light-theme__section--secondaryText");
        break;  
      case element.classList.contains("input"):
        element.classList.toggle("light-theme__input");
        break;  
      case element.classList.contains("search--icon"):
        element.classList.toggle("light-theme__search--icon");
        break;  
      case element.classList.contains("pageNumber"):
        element.classList.toggle("light-theme__pageNumber");
        break;  
      case element.classList.contains("modal"):
        element.classList.toggle("light-theme__modal");
        break;  
      case element.classList.contains("modal close icon"):
        element.classList.toggle("light-theme__modal--closeIcon");
        break;    
      case element.classList.contains("modal btn"):
        element.classList.toggle("light-theme__modal--btn");
        break;    
    }
  })
} 