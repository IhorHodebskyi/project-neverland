!function(){function e(e){return e&&e.__esModule?e.default:e}var n,t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e};var r=(n={menuBtn:document.querySelector("[data-menu-open]"),menuContainer:document.querySelector("[data-menu]"),menuBackdrop:document.querySelector("[data-backdrop]"),body:document.querySelector("body"),homeHeroFilmWraper:document.querySelector(".hero-content"),homeHero:document.querySelector(".home-hero-plug")},e(t)(n,"homeHeroFilmWraper",document.querySelector(".home-hero-container")),e(t)(n,"homeHeroText",document.querySelector(".home-hero-text")),e(t)(n,"monthGalery",document.querySelector(".monthgalery")),n);function o(){r.menuBackdrop.classList.toggle("visual_hidden"),r.menuContainer.classList.toggle("is-open"),r.body.classList.toggle("is-open")}r.menuBtn.addEventListener("click",o),r.menuBackdrop.addEventListener("click",(function(e){e.target===r.menuBackdrop&&o()}));var c=document.getElementById("nav-header"),a=window.location.pathname;"/project-neverland/index.html"===a?c.children[0].children[0].classList.add("nav_list-current"):"/project-neverland/catalog.html"===a?c.children[1].children[0].classList.add("nav_list-current"):"/project-neverland/library.html"===a?c.children[2].children[0].classList.add("nav_list-current"):c.children[0].children[0].classList.add("nav_list-current")}();
//# sourceMappingURL=library.3aa39497.js.map
