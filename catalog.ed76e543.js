var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire66be;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequire66be=r);var i=r("krGWQ");function a(){i.refs.menuBackdrop.classList.toggle("visual_hidden"),i.refs.menuContainer.classList.toggle("is-open"),i.refs.body.classList.toggle("is-open")}i.refs.menuBtn.addEventListener("click",a),i.refs.menuBackdrop.addEventListener("click",(function(e){e.target===i.refs.menuBackdrop&&a()}));const l=document.getElementById("nav-header"),s=window.location.pathname;"/project-neverland/index.html"===s?l.children[0].children[0].classList.add("nav_list-current"):"/project-neverland/catalog.html"===s?l.children[1].children[0].classList.add("nav_list-current"):"/project-neverland/library.html"===s?l.children[2].children[0].classList.add("nav_list-current"):l.children[0].children[0].classList.add("nav_list-current");var o=r("2shzp");const d=document.querySelector("#search-form"),c=document.querySelector(".gallery");d.addEventListener("submit",(function(e){e.preventDefault(),p=1,c.innerHTML="";const{searchQuery:n}=e.currentTarget.elements;if(u=n.value.trim(),!u)return;(async(e,n)=>await(0,o.default)(`https://api.themoviedb.org/3/search/movie?api_key=5bf13f442a6612ea903461e28536fdca&query=${e}&language=en-US&page=1`))(u).then((({data:e})=>{console.log(e),0===e.results.length||function({results:e}){const n=null==e?void 0:e.map((({poster_path:e,original_title:n,id:t,release_date:r,vote_average:i,vote_count:a,popularity:l,genre_ids:s})=>`<div class="photo-card">\n  <img src="https://image.tmdb.org/t/p/original/${e}" alt="${n}" loading="lazy" width="330"/>\n  <div class="info" id="${t}">\n    <p class="info-item">\n      <b>original_title</b></br>${n}\n    </p>\n    <p class="info-item">\n      <b>release_date</b></br>${r}\n    </p>\n    <p class="info-item">\n      <b>vote_average</b></br>${i}\n    </p>\n    <p class="info-item">\n      <b>vote_count</b></br>${a}\n    </p>\n    <p class="info-item">\n      <b>popularity</b></br>${l}\n    </p>\n    <p class="info-item">\n      <b>genre_ids</b></br>${s}\n    </p>\n  </div>\n</div>`)).join("");c.insertAdjacentHTML("beforeend",n)}(e)}))}));let p=1,u="";r("eEHR3"),r("ahwPh");
//# sourceMappingURL=catalog.ed76e543.js.map