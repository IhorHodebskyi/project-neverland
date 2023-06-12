const themeCheckboxEl = document.querySelector(".theme-switch__checkbox");
const themeElements = document.querySelectorAll(".theme-element");

const isLightThemeExists = localStorage.getItem("theme");

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
      case element.classList.contains("body"):
        element.classList.toggle("light-theme");
        break;
    /////////////////////////////////// header
      case element.classList.contains("navbar_item_link")||
           element.classList.contains("logo_text"):
        element.classList.toggle("light-theme__header--text");
        break;      
      case element.classList.contains("footer"):
        element.classList.toggle("light-theme__footer--text");
        break;  
      case element.classList.contains("section text"):
        element.classList.toggle("light-theme__section--text");
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