function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},t.parcelRequired7c6=n),n("98X4p"),n("9M0Rn"),n("gScR6"),n("1wH5c");var a=n("6mZGd"),i=n("jkMrE"),o=n("g6yUq"),l=n("gMe87"),d=(a=n("6mZGd"),n("8WKcv")),c=n("cEPyp"),u=n("bGr86");const f=new(0,a.default),h=new(0,d.default);var m=new WeakMap,y=new WeakMap;var p=n("6nUKJ"),v=(c=n("cEPyp"),n("9M0Rn"));u=n("bGr86");var g=n("hMpod"),w=n("hXrWV"),M=(u=n("bGr86"),i=n("jkMrE"),o=n("g6yUq"),new WeakMap),R=new WeakMap;new(0,a.default);(new(0,p.default)).addGalleryHandler();const T=new class{async getPopularMovies(e){this.genres=await f.fetchGenres();return(await f.fetchTrendingMovies(e)).data}renderCards(t){h.update(t,this.genres),e(i)(this,m).innerHTML=e(i)(this,y).call(this,{movies:t,library:!1}),u.headerRef.scrollIntoView(top),c.localStorageFilms.addItemsOnCurrentPage(t)}async getQueryMovies(e,t=1){if(this.currentQuery=e,""===e)return;return await f.getMoviesByName(e,t)}async getMovieDetails(e){if(!e)return;return await f.fetchMoviesByID(e)}constructor(t,r){e(o)(this,m,{writable:!0,value:void 0}),e(o)(this,y,{writable:!0,value:void 0}),e(l)(this,m,t),e(l)(this,y,r),this.currentQuery="",this.genres=null}}(u.containerGallery,g.default),b=new(0,v.default)(u.containerPag),C=new class{hide(){this.spinnerRef.classList.add("is-hidden"),this.hidden=!0}show(){this.spinnerRef.classList.remove("is-hidden"),this.hidden=!1}constructor(){this.spinnerRef=u.spinnerRef,this.hidden=!0}},E=new class{notifyFailure(){if(!document.querySelector(".failure")){const t=document.createElement("aside");t.classList.add("failure"),t.innerHTML=`${e(i)(this,R)}`,document.body.appendChild(t),setTimeout((()=>{document.body.removeChild(t)}),4e3)}}notifySuccess(){if(!document.querySelector(".success")){const t=document.createElement("aside");t.classList.add("success"),t.innerHTML=`${e(i)(this,M)}`,document.body.appendChild(t),setTimeout((()=>{document.body.removeChild(t)}),4e3)}}constructor(){e(o)(this,M,{writable:!0,value:"Search result successfull!"}),e(o)(this,R,{writable:!0,value:"Search result not successfull. Enter the movie name and try again!"})}};async function S(e=1){C.show();try{const t=await T.getPopularMovies(e);C.hide(),T.renderCards(t.results),b.updateTotalItems(t.total_results),b.goToPage(e),b.render()}catch(e){console.error(e)}}async function F(e,t=1){try{const r=await T.getQueryMovies(e,t);if(!r)return _(w.NOTIFY_UNCORRECT_SEARCH),void S();if(0===r.total_results)return _(w.NOTIFY_UNCORRECT_SEARCH),void S();console.log("Searched Movies:",r),E.notifySuccess(),T.renderCards(r.results),b.updateTotalItems(r.total_results),b.goToPage(t),b.render()}catch(e){console.log(e)}}function _(e){u.searchFormRef.dataset.message=e,E.notifyFailure(),setTimeout((()=>{u.searchFormRef.dataset.message=""}),4e3)}u.searchFormRef.addEventListener("submit",(function(e){e.preventDefault();F(e.target.elements.search.value.trim())&&this.reset()})),b.on("aftermove",(e=>{T.currentQuery?F(T.currentQuery,e.page):S(e.page)})),c.localStorageFilms.saveItemsForArrayAfterReload(),S(),n("bTcpz"),n("16eij");
//# sourceMappingURL=index.5caaf403.js.map