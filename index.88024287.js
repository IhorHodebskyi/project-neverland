!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire66be;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire66be=a);var i=a("bpxeT"),o=a("8nrFW"),c=a("2TvXO"),s=a("2SxBx"),l=a("4Nugj"),d="https://image.tmdb.org/t/p/original/",u="https://image.tmdb.org/t/p/w500/",p="5bf13f442a6612ea903461e28536fdca",f=(0,s.fetchAllGet)("https://api.themoviedb.org","/3/genre/movie/list",p,"");function m(e){return h.apply(this,arguments)}function h(){return(h=e(i)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f;case 2:return r=e.sent,e.abrupt("return",n.map((function(e){return e=r.data.genres.filter((function(t){return t.id==e}))[0].name})).join(", "));case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(){return v=e(i)(e(c).mark((function t(n){var r;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Math.floor(20*Math.random()),n.data.results.map(function(){var t=e(i)(e(c).mark((function t(n,a){var i,o,s,p,f,h,v,b,x,w,_,k;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.backdrop_path,o=n.poster_path,s=n.title,p=n.original_title,f=n.id,h=n.release_date,v=n.vote_average,b=n.vote_count,x=n.popularity,w=n.overview,_=n.genre_ids,a!==r){e.next=11;break}return e.t0='<div class="month-item" id="'.concat(f,'">\n                            <div>\n                            <div class="month-item-img">\n                                <picture>\n                                    <source srcset="').concat(d).concat(i,'" media="(min-width: 768px)" width="805"/>\n                                    <img src="').concat(u).concat(o,'" alt="').concat(p,'"/>\n                                </picture>\n                            </div></div>\n                            <div class="month-item-title">\n                                <h3>').concat(s,'</h3>\n                                <div class="month-item-title-text">\n                                    <div>\n                                        <h3>Release date<span class="month-rel-date">').concat(h.replaceAll("-","."),'</span></h3>\n                                        <h3>Vote / Votes<span class="month-vote">').concat(v,'</span> / <span class="month-votes">').concat(b,'</span></h3>\n                                    </div>\n                                    <div>\n                                        <h3>Popularity<span class="month-popular">').concat(parseFloat(x).toFixed(1),'</span></h3>\n                                        <h3>Genre<span class="month-genre">'),e.next=5,m(_);case 5:e.t1=e.sent,k=e.t0.concat.call(e.t0,e.t1,'</span></h3>\n                                    </div>\n                                </div>\n                                <p>About</p><span class="month-text">').concat(w,'</span>\n                                <button type="submit" class="month-btn">').concat(g(f),"</button>\n                            </div>\n                         </div>"),l.refs.monthGalery.insertAdjacentHTML("beforeend",k),l.refs.monthBtn=document.querySelector(".month-btn"),l.refs.monthItem=document.querySelector(".month-item"),l.refs.monthBtn.addEventListener("click",y);case 11:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function g(t){var n={id:[]};return localStorage.getItem("favoriteFilm")&&(n.id=e(o)(JSON.parse(localStorage.getItem("favoriteFilm")).id)),n.id.includes(t.toString())?"Remove from my library":"Add to my library"}function y(t){t.preventDefault();var n=l.refs.monthItem.getAttribute("id"),r={id:[]};localStorage.getItem("favoriteFilm")&&(r.id=e(o)(JSON.parse(localStorage.getItem("favoriteFilm")).id)),r.id.includes(n)?(r.id.splice(r.id.indexOf(n),1),localStorage.setItem("favoriteFilm",JSON.stringify(r)),t.currentTarget.textContent="Add to my library"):("Add to my library"===t.currentTarget.textContent&&(t.currentTarget.textContent="Remove from  my library"),r.id.push(n),localStorage.setItem("favoriteFilm",JSON.stringify(r)))}function b(){l.refs.menuBackdrop.classList.toggle("visual_hidden"),l.refs.menuContainer.classList.toggle("is-open"),l.refs.body.classList.toggle("is-open")}(0,s.fetchAllGet)("https://api.themoviedb.org","/3/movie/upcoming",p,"&language=en-US&page=1").then((function(e){return v.apply(this,arguments)})),a("gVa74"),(l=a("4Nugj")).refs.menuBtn.addEventListener("click",b),l.refs.menuBackdrop.addEventListener("click",(function(e){e.target===l.refs.menuBackdrop&&b()}));var x=document.getElementById("nav-header"),w=window.location.pathname;"/project-neverland/index.html"===w?x.children[0].children[0].classList.add("nav_list-current"):"/project-neverland/catalog.html"===w?x.children[1].children[0].classList.add("nav_list-current"):"/project-neverland/library.html"===w?x.children[2].children[0].classList.add("nav_list-current"):x.children[0].children[0].classList.add("nav_list-current");i=a("bpxeT"),c=a("2TvXO");var _=a("dIxxU"),k=a("hPKSR"),S=(l=a("4Nugj"),"5bf13f442a6612ea903461e28536fdca"),L="https://api.themoviedb.org/3/trending/all/week",T=[];function F(){return(F=e(i)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.get("".concat(L,"?api_key=").concat(S,"&language=en-US&per_page=20"));case 2:return n=e.sent,T=n.data.results,e.next=6,I();case 6:return window.addEventListener("resize",I),e.abrupt("return",T);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function I(){return O.apply(this,arguments)}function O(){return(O=e(i)(e(c).mark((function t(){var n,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.innerWidth,r=n<768?T.slice(0,1):T.slice(0,3),l.refs.weeklyList.innerHTML=(0,k.createMarkupCard)(r);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}!function(){F.apply(this,arguments)}()}();
//# sourceMappingURL=index.88024287.js.map
