function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequire66be;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire66be=i),i("kyEFX").register(JSON.parse('{"5ZPII":"index.efb9e89a.js","k0qvN":"reitingfull.b145141b.svg","eunLf":"catalog.4f4f586f.css","7adTC":"library.0bb322f6.js"}')),i("4hUhV");var r=i("h4A4X"),s=i("krGWQ"),o=i("brr8Z");const l=(0,r.fetchAllGet)("https://api.themoviedb.org","/3/genre/movie/list","5bf13f442a6612ea903461e28536fdca","");async function c(e){const t=await l;return e.map((e=>e=t.data.genres.filter((({id:t})=>t==e))[0].name)).join(", ")}function m(e){e.preventDefault();const t=s.refs.monthItem.getAttribute("id"),n={id:[]};localStorage.getItem("favoriteFilm")&&(n.id=[...JSON.parse(localStorage.getItem("favoriteFilm")).id]),n.id.includes(t)?(n.id.splice(n.id.indexOf(t),1),localStorage.setItem("favoriteFilm",JSON.stringify(n)),e.currentTarget.textContent="Add to my library"):("Add to my library"===e.currentTarget.textContent&&(e.currentTarget.textContent="Remove from  my library"),n.id.push(t),localStorage.setItem("favoriteFilm",JSON.stringify(n)))}(0,r.fetchAllGet)("https://api.themoviedb.org","/3/movie/upcoming","5bf13f442a6612ea903461e28536fdca","&language=en-US&page=1").then((async function(e){const t=Math.floor(20*Math.random());e.data.results.map((async({backdrop_path:e,poster_path:n,title:a,original_title:i,id:r,release_date:o,vote_average:l,vote_count:d,popularity:h,overview:p,genre_ids:f},g)=>{if(g===t){const t=`<div class="month-item" id="${r}">\n                            <div>\n                            <div class="month-item-img">\n                                <picture>\n                                    <source srcset="https://image.tmdb.org/t/p/original/${e}" media="(min-width: 768px)" width="805"/>\n                                    <img src="https://image.tmdb.org/t/p/w500/${n}" alt="${i}"/>\n                                </picture>\n                            </div></div>\n                            <div class="month-item-title">\n                                <h3 class="month-item-title-h3-main theme-dynamic-element theme-element">${a}</h3>\n                                <div class="month-item-title-text">\n                                    <div>\n                                        <h3 class="month-item-title-h3 theme-dynamic-element theme-element">Release date<span class="month-rel-date">${o.replaceAll("-",".")}</span></h3>\n                                        <h3 class="month-item-title-h3 theme-dynamic-element theme-element">Vote / Votes<span class="month-vote">${l}</span> / <span class="month-votes">${d}</span></h3>\n                                    </div>\n                                    <div>\n                                        <h3 class="month-item-title-h3 theme-dynamic-element theme-element">Popularity<span class="month-popular">${parseFloat(h).toFixed(1)}</span></h3>\n                                        <h3 class="month-item-title-h3 theme-dynamic-element theme-element">Genre<span class="month-genre">${await c(f)}</span></h3>\n                                    </div>\n                                </div>\n                                <p class="month-item-p theme-dynamic-element theme-element">About</p><span class="month-text theme-dynamic-element theme-element">${p}</span>\n                                <button type="submit" class="month-btn theme-dynamic-element theme-element button-light">${function(e){const t={id:[]};localStorage.getItem("favoriteFilm")&&(t.id=[...JSON.parse(localStorage.getItem("favoriteFilm")).id]);return t.id.includes(e.toString())?"Remove from my library":"Add to my library"}(r)}</button>\n                            </div>\n                         </div>`;s.refs.monthGalery.insertAdjacentHTML("beforeend",t),s.refs.monthBtn=document.querySelector(".month-btn"),s.refs.monthItem=document.querySelector(".month-item"),s.refs.monthBtn.addEventListener("click",m)}}))})).then(o.checkThemeForDynamikEl),i("eEHR3"),i("8FnLx"),i("crtav"),i("brr8Z");var d,h=i("2shzp");s=i("krGWQ");d=new URL(i("kyEFX").resolve("k0qvN"),import.meta.url).toString();var p=i("fQE3M");let f=[];const g=Math.floor(100*Math.random());!async function(){const t=await h.default.get(`https://api.themoviedb.org/3/trending/all/week?api_key=5bf13f442a6612ea903461e28536fdca&language=en-US&page=${g}`);console.log(g),f=t.data.results,function(){window.innerWidth;let t=[];console.log(t),t=f.slice(0,3),n=t,n.map((async({original_title:t,poster_path:n,vote_average:a,genre_ids:i,release_date:r,id:o},l)=>{const m=`<a href="#" class="card-film" id="${o}">\n        <div class="card-backdrop"></div>\n        <img\n          class="card-img"\n          src="https://image.tmdb.org/t/p/w500${n}"\n          alt=""\n          loading="lazy"\n          srcset="\n            https://image.tmdb.org/t/p/w500${n} 1x,\n            https://image.tmdb.org/t/p/w500${n} 2x\n          "\n        />\n        <div class="card-info-section">\n          <h3 class="card-info-title">${t}</h3>\n          <div class="card-info">\n            <p class="card-info-text">\n            ${await c(i)} | ${String(r).slice(0,4)}\n            </p>\n            <ul class="card-vote">\n              <li class="card-vote-items">\n                <img\n                  class="card-vote-icon"\n                  src="${e(d)}"\n                  alt="Rating Stars"\n                />\n              </li>\n              <li class="card-vote-items">\n                <img\n                  class="card-vote-icon"\n                  src="${e(d)}"\n                  alt="Rating Stars"\n                />\n              </li>\n              <li class="card-vote-items">\n                <img\n                  class="card-vote-icon"\n                  src="${e(d)}"\n                  alt="Rating Stars"\n                />\n              </li>\n              <li class="card-vote-items">\n                <img\n                  class="card-vote-icon"\n                  src="${e(d)}"\n                  alt="Rating Stars"\n                />\n              </li>\n              <li class="card-vote-items">\n                <img\n                  class="card-vote-icon"\n                  src="${e(d)}"\n                  alt="Rating Stars"\n                />\n              </li>\n            </ul>\n          </div>\n        </div>\n      </a>`;s.refs.weeklyList.insertAdjacentHTML("beforeend",m),2===l&&(s.refs.cardsSectionBackphoto=document.querySelectorAll(".card-film"),s.refs.cardsSectionBackphoto.forEach((e=>e.addEventListener("click",p.handlerClickcardsSectionBackphoto))))}));var n}()}(),i("I2Abx"),i("bO1YF"),i("dpZmf"),i("fQE3M");
//# sourceMappingURL=index.efb9e89a.js.map
