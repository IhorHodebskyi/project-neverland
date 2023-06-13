!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire66be;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire66be=a);var i=a("bpxeT"),s=a("8nrFW"),o=a("2TvXO"),c=a("2SxBx"),l=a("4Nugj"),p="https://image.tmdb.org/t/p/original/",u="https://image.tmdb.org/t/p/original/",d="5bf13f442a6612ea903461e28536fdca",m=(0,c.fetchAllGet)("https://api.themoviedb.org","/3/genre/movie/list",d,"");if(localStorage.getItem("theme")){var v=document.querySelector(":root");v.style.setProperty("--primary-title-color","#111111"),v.style.setProperty("--primary-vote-color","#111111"),v.style.setProperty("--primary-vote-color-text","#282828"),v.style.setProperty("--primary-about-text","#282828")}function g(e){return f.apply(this,arguments)}function f(){return(f=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m;case 2:return r=e.sent,e.abrupt("return",n.map((function(e){return e=r.data.genres.filter((function(t){return t.id==e}))[0].name})).join(", "));case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function h(){return h=e(i)(e(o).mark((function t(n){var r;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Math.floor(20*Math.random()),n.data.results.map(function(){var t=e(i)(e(o).mark((function t(n,a){var i,s,c,d,m,v,f,h,x,w,S,_;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.backdrop_path,s=n.poster_path,c=n.title,d=n.original_title,m=n.id,v=n.release_date,f=n.vote_average,h=n.vote_count,x=n.popularity,w=n.overview,S=n.genre_ids,a!==r){e.next=11;break}return e.t0='<div class="month-item" id="'.concat(m,'">\n                            <div>\n                            <div class="month-item-img">\n                                <picture>\n                                    <source srcset="').concat(p).concat(i,'" media="(min-width: 768px)" width="805"/>\n                                    <img src="').concat(u).concat(s,'" alt="').concat(d,'"/>\n                                </picture>\n                            </div></div>\n                            <div class="month-item-title">\n                                <h3>').concat(c,'</h3>\n                                <div class="month-item-title-text">\n                                    <div>\n                                        <h3>Release date<span class="month-rel-date">').concat(v.replaceAll("-","."),'</span></h3>\n                                        <h3>Vote / Votes<span class="month-vote">').concat(f,'</span> / <span class="month-votes">').concat(h,'</span></h3>\n                                    </div>\n                                    <div>\n                                        <h3>Popularity<span class="month-popular">').concat(parseFloat(x).toFixed(1),'</span></h3>\n                                        <h3>Genre<span class="month-genre">'),e.next=5,g(S);case 5:e.t1=e.sent,_=e.t0.concat.call(e.t0,e.t1,'</span></h3>\n                                    </div>\n                                </div>\n                                <p>About</p><span class="month-text">').concat(w,'</span>\n                                <button type="submit" class="month-btn button-light">').concat(y(m),"</button>\n                            </div>\n                         </div>"),l.refs.monthGalery.insertAdjacentHTML("beforeend",_),l.refs.monthBtn=document.querySelector(".month-btn"),l.refs.monthItem=document.querySelector(".month-item"),l.refs.monthBtn.addEventListener("click",b);case 11:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function y(t){var n={id:[]};return localStorage.getItem("favoriteFilm")&&(n.id=e(s)(JSON.parse(localStorage.getItem("favoriteFilm")).id)),n.id.includes(t.toString())?"Remove from my library":"Add to my library"}function b(t){t.preventDefault();var n=l.refs.monthItem.getAttribute("id"),r={id:[]};localStorage.getItem("favoriteFilm")&&(r.id=e(s)(JSON.parse(localStorage.getItem("favoriteFilm")).id)),r.id.includes(n)?(r.id.splice(r.id.indexOf(n),1),localStorage.setItem("favoriteFilm",JSON.stringify(r)),t.currentTarget.textContent="Add to my library"):("Add to my library"===t.currentTarget.textContent&&(t.currentTarget.textContent="Remove from  my library"),r.id.push(n),localStorage.setItem("favoriteFilm",JSON.stringify(r)))}(0,c.fetchAllGet)("https://api.themoviedb.org","/3/movie/upcoming",d,"&language=en-US&page=1").then((function(e){return h.apply(this,arguments)})),a("gVa74"),a("cs7FV"),a("kNpmX"),a("2Z7mb");i=a("bpxeT"),o=a("2TvXO");var x=a("dIxxU");function w(e){return e.cardresult.map((function(e){var t=e.original_title,n=e.poster_path,r=(e.vote_average,e.genre_ids),a=e.release_date,i=e.id;return'<div class="cards-section-backphoto" style="background-image: url(\'https://image.tmdb.org/t/p/original'.concat(n,'\');" id="').concat(i,'">\n    <div class="info-cards-section">\n    <p class="info-card-section-title">').concat(t,'</p>\n    <p class="info-card-section-date">').concat(a).concat(r,'</p>\n    </div>\n    <div class="vote-average-section">\n    <ul class="vote-average-icons">\n          <li class="vote-average-icons-items">\n            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">\n              <use href="/src/images/symbol-defs.svg#icon-empty-star">\n              </use>\n            </svg>\n          </li>\n          <li class="vote-average-icons-items">\n            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">\n              <use href="/src/images/symbol-defs.svg#icon-empty-star">\n              </use>\n            </svg>\n          </li>\n          <li class="vote-average-icons-items">\n            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">\n              <use href="/src/images/symbol-defs.svg#icon-empty-star">\n              </use>\n            </svg>\n          </li>\n          <li class="vote-average-icons-items">\n            <svg width="16.87px" height="15.75px" class="vote-average-icons-items-img">\n              <use href="/src/images/symbol-defs.svg#icon-empty-star">\n              </use>\n            </svg>\n          </li>\n    </ul>\n    </div>\n    </div>')})).join("")}l=a("4Nugj");var S="5bf13f442a6612ea903461e28536fdca",_="https://api.themoviedb.org/3/trending/all/week",k=[];function T(){return(T=e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.default.get("".concat(_,"?api_key=").concat(S,"&language=en-US&per_page=20"));case 2:return n=e.sent,k=n.data.results,e.next=6,F();case 6:return window.addEventListener("resize",F),e.abrupt("return",k);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function F(){return I.apply(this,arguments)}function I(){return(I=e(i)(e(o).mark((function t(){var n,r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.innerWidth,r=n<768?k.slice(0,1):k.slice(0,3),l.refs.weeklyList.innerHTML=w(r);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}!function(){T.apply(this,arguments)}(),a("ijwS8"),a("5YNLl")}();
//# sourceMappingURL=index.e374f3d6.js.map
