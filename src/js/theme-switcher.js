const themeCheckboxEl = document.querySelector(".theme-switch__checkbox");

const isLightThemeExists = localStorage.getItem("theme");
let themeElements = document.querySelectorAll(".theme-element"); 
let themeDynamicElements = document.querySelectorAll(".theme-dynamic-element")

///////////////////////////////////switch for normal elements

if (isLightThemeExists) {
  themeCheckboxEl.checked = true;

  toggleStylesTheme();
}

themeCheckboxEl.addEventListener('click', handleThemeCheckboxClick);

export function handleThemeCheckboxClick() {
  if (themeCheckboxEl.checked) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.removeItem("theme");
  }

  toggleStylesTheme(themeElements);
}

export function toggleStylesTheme(themeElements) {
  themeElements = document.querySelectorAll(".theme-element");

  themeElements.forEach( (element) => {
    const classMatched = true; 
    switch (classMatched) {
      //////////////////////////////// section 
      case element.classList.contains("body") ||
           element.classList.contains("header") ||
           element.classList.contains("footer") ||
           element.classList.contains("month-section") ||
           element.classList.contains("modal-film-window") ||
           element.classList.contains("search-section")||
           element.classList.contains("mobile_menu_container")||
           element.classList.contains("without-results-section"):
        element.classList.toggle("light-theme");
        break;
    /////////////////////////////////// text grey 
      case element.classList.contains("navbar_item_link")||
           element.classList.contains("logo_text") ||
           element.classList.contains("select-text") ||
           element.classList.contains("option") ||
           element.classList.contains("header_menu_btn") ||
           element.classList.contains("wraper_text"):
        element.classList.toggle("light-theme__text--grey");
        break;      
     /////////////////////////////////// text black
      case element.classList.contains("without-results-text")||
           element.classList.contains("month-text")||
           element.classList.contains("month-title"):
           element.classList.toggle("light-theme__text--black");
        break;    
        /////////////////////////////////// text secondary black
      case element.classList.contains("month-vote")||
           element.classList.contains("month-item-title-h3")||
           element.classList.contains("month-item-p")||
            element.classList.contains("month-item-title-h3-main"):
           element.classList.toggle("light-theme__section--secondaryText");
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
           element.classList.contains("modal-film-icon-close")||
           element.classList.contains("icon-clear-text"):
        element.classList.toggle("light-theme__search--icon");
        break;     
      ////////////////////////////////// modal 
      case element.classList.contains("modal-film-btn-space"):
           element.classList.toggle("light-theme__modal--film");
        break;  
      /////////////////////////////////////btn  
      case element.classList.contains("month-btn"):
           element.classList.toggle("light-theme__modal--btn");
        break;  
    }
  })
} 

///////////////////////////////////switch for dynamik elements

export function checkThemeForDynamikEl() {
  if (localStorage.getItem("theme")) {
    themeCheckboxEl.checked = true;
    toggleStylesForDynamikEl()
  }
}

export function toggleStylesForDynamikEl() {
  
  themeDynamicElements = document.querySelectorAll(".theme-dynamic-element");
  themeDynamicElements.forEach( (element) => {
    const classMatched = true; 
    switch (classMatched) {
      //////////////////////////////// section 
      case element.classList.contains("option"):
        element.classList.toggle("light-theme__text--grey");
        break;
      case element.classList.contains("month-item-title-h3-main") ||
           element.classList.contains("month-item-p") ||
           element.classList.contains("month-item-title-h3"):
        element.classList.toggle("light-theme__section--secondaryText");
        break;
      case element.classList.contains("month-item") :
        element.classList.toggle("light-theme");
        break;
      case element.classList.contains("month-text") :
        element.classList.toggle("light-theme__text--black");
        break;
            /////////////////////////////////////btn  
      case element.classList.contains("month-btn"):
        element.classList.toggle("light-theme__modal--btn");
        break;    
      }
    })
}