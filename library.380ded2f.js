function e(e,r,t,a){Object.defineProperty(e,r,{get:t,set:a,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=t.parcelRequire66be;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return a[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},t.parcelRequire66be=i),i.register("kyEFX",(function(r,t){var a,n;e(r.exports,"register",(function(){return a}),(function(e){return a=e})),e(r.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};a=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},n=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i("kyEFX").register(JSON.parse('{"1zJhX":"library.380ded2f.js","9v6fF":"symbol-defs.7dab1f6b.svg","k0qvN":"reitingfull.b145141b.svg","bLI2f":"reitinghalf.68072f94.svg","kzUqJ":"reitingzero.83703bb2.svg","eunLf":"catalog.1290badf.css","7adTC":"library.d3aa5bf7.js"}')),i("4hUhV"),i("8FnLx"),i("crtav"),i("I2Abx"),i("eEHR3"),i("brr8Z"),i("bO1YF");var l,s=i("h4A4X"),o=i("krGWQ");l=new URL(i("kyEFX").resolve("k0qvN"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("bLI2f"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("kzUqJ"),import.meta.url).toString();var f;f=new URL(i("kyEFX").resolve("9v6fF"),import.meta.url).toString();function g(e="all"){var t;if(null===(t=JSON.parse(localStorage.getItem("favoriteFilm")))||void 0===t?void 0:t.id.length){const v={id:[...JSON.parse(localStorage.getItem("favoriteFilm")).id],id_9:[],id_j:[],page:1};function a(){o.refs.galeryLibraryBtnClose=document.querySelectorAll(".galery-library-btn-close"),o.refs.galeryLibraryBtnCloseSpan=document.querySelectorAll(".card-backdrop + span"),o.refs.cardFilm1=document.querySelectorAll(".card-film"),o.refs.galeryLibraryBtnClose.forEach(((e,r)=>{e.addEventListener("mouseover",(e=>{o.refs.galeryLibraryBtnCloseSpan[r].classList.toggle("visually-hidden")})),e.addEventListener("mouseout",(e=>{o.refs.galeryLibraryBtnCloseSpan[r].classList.toggle("visually-hidden")})),e.addEventListener("click",(e=>{!function(e,r,t){e.preventDefault(),"BUTTON"===e.target.nodeName&&(v.id.splice(v.id.indexOf(r),1),v.id_9.splice(v.id.indexOf(r),1),localStorage.setItem("favoriteFilm",JSON.stringify(v)),o.refs.cardFilm1[t].classList.add("visually-hidden"))}(e,o.refs.cardFilm1[r].getAttribute("id"),r)}))}))}function n(e){v.id_9=function(){let e=[],r=[];return v.id.map(((t,a)=>{a++,e.push(t),a%9==0&&(r.push(e),e=[])})),r.push(e),r}(),v.id_9[e].map(((e,r,t)=>{const n=`/3/movie/${e}`;(0,s.fetchAllGet)("https://api.themoviedb.org",n,"5bf13f442a6612ea903461e28536fdca","&language=en-US&page=1").then(g).catch(console.log).finally((()=>{r===t.length-1&&a()}))}))}function i(t,a){let n="";o.refs.galeryLibraryBtn.classList.add("visually-hidden");const{original_title:i,poster_path:s,vote_average:f,genres:g,release_date:v,id:y}=t.data,b=Number(f),p=Math.round(b);let m="";for(let e=1;e<=5;e++){let t=2*e;m+=t<=p?`<img class="card-vote-icon" src="${r(l)}" alt="Rating Stars" />`:t%p==1?`<img class="card-vote-icon" src="${r(c)}" alt="Rating Stars" />`:`<img class="card-vote-icon" src="${r(d)}" alt="Rating Stars" />`}g.map((({name:e})=>e)).join(", ").toLowerCase().includes(e)&&(n=u(r(l),g,v,i,s,y,m),o.refs.galeryLibrary.insertAdjacentHTML("beforeend",n))}function g(t){const{original_title:a,poster_path:n,vote_average:i,genres:s,release_date:f,id:g}=t.data;let v="";const y=Number(i),b=Math.round(y);let p="";for(let e=1;e<=5;e++){let t=2*e;p+=t<=b?`<img class="card-vote-icon" src="${r(l)}" alt="Rating Stars" />`:t%b==1?`<img class="card-vote-icon" src="${r(c)}" alt="Rating Stars" />`:`<img class="card-vote-icon" src="${r(d)}" alt="Rating Stars" />`}"all"===e&&(v=u(r(l),s,f,a,n,g,p),o.refs.galeryLibrary.insertAdjacentHTML("beforeend",v))}function u(e,t,a,n,i,l,s){return`\n  <div class="card-film" id="${l}">\n    <div class="card-backdrop"></div>\n    <span class="visually-hidden">Delete from Library</span>\n    <button class="galery-library-btn-close modal-film-btn-close">\n    <svg class="modal-film-icon-close">\n      <use href="${r(f)}#icon-x"></use>\n    </svg>\n    </button>\n    <img\n      class="card-img"\n      src="https://image.tmdb.org/t/p/w500${i}"\n      alt=""\n      loading="lazy"\n      srcset="\n        https://image.tmdb.org/t/p/w500${i} 1x,\n        https://image.tmdb.org/t/p/w500${i} 2x\n      "\n    />\n    <div class="card-info-section">\n      <h3 class="card-info-title">${n}</h3>\n      <div class="card-info">\n        <p class="card-info-text">\n        ${t.map((({name:e})=>e)).join(", ")} | ${String(a).slice(0,4)}\n        </p>\n        <ul class="card-vote">\n                ${s}\n        </ul>\n\n      </div>\n    </div>\n  </div>\n\n`}v.id.length>9?o.refs.galeryLibraryBtn.classList.remove("visually-hidden"):o.refs.galeryLibraryBtn.classList.add("visually-hidden"),"all"===e?n(0):v.id.map(((e,r)=>{const t=`/3/movie/${e}`;(0,s.fetchAllGet)("https://api.themoviedb.org",t,"5bf13f442a6612ea903461e28536fdca","&language=en-US&page=1").then(i).catch(console.log)})),o.refs.galeryLibraryBtn.addEventListener("click",(function(e){e.preventDefault(),n(v.page++),v.id_9.length===v.page&&e.currentTarget.classList.add("visually-hidden")}))}else{o.refs.galeryLibraryBtn.addEventListener("click",(function e(r){r.preventDefault(),r.currentTarget.removeEventListener("click",e),location.href="./catalog.html"}));const y='<div class="galery-library-text"><span>OOPS...</span><span>We are very sorry!</span><span>You don’t have any movies at your library.</span></div>';o.refs.galeryLibrary.insertAdjacentHTML("beforeend",y),o.refs.galeryLibraryBtn.textContent="Search movie",o.refs.galeryLibraryBtn.textContent="Search movie",o.refs.galeryLibrarySelect.classList.add("visually-hidden")}}g(),o.refs.galeryLibrarySelect.addEventListener("change",(function(e){o.refs.galeryLibraryBtn.classList.remove("visually-hidden"),o.refs.galeryLibrary.textContent="",g(e.currentTarget.value)})),i("dpZmf");
//# sourceMappingURL=library.380ded2f.js.map
