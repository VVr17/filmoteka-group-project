function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r("98X4p"),r("9M0Rn"),r("gScR6"),r("1wH5c");var a=r("6mZGd"),n=r("jkMrE"),o=r("g6yUq"),l=r("gMe87"),u=(a=r("6mZGd"),r("8WKcv")),c=r("cEPyp"),d=r("bGr86");const h=new(0,a.default),f=new(0,u.default);var v=new WeakMap,w=new WeakMap;var g=r("6nUKJ"),p=(c=r("cEPyp"),r("9M0Rn"));d=r("bGr86");var y=r("hMpod"),m=r("hXrWV"),M=(d=r("bGr86"),n=r("jkMrE"),o=r("g6yUq"),l=r("gMe87"),r("iJYdK")),T=new WeakMap,b=new WeakMap,L=new WeakMap,R=new WeakMap;new(0,a.default);(new(0,g.default)).addGalleryHandler();const E=new class{async getPopularMovies(e){this.genres=await h.fetchGenres();return(await h.fetchTrendingMovies(e)).data}renderCards(t){f.update(t,this.genres),e(n)(this,v).innerHTML=e(n)(this,w).call(this,{movies:t,library:!1}),d.headerRef.scrollIntoView(top),c.localStorageFilms.addItemsOnCurrentPage(t)}async getQueryMovies(e,t=1){if(this.currentQuery=e,!e)return;return await h.getMoviesByName(e,t)}async getMovieDetails(e){if(!e)return;return await h.fetchMoviesByID(e)}constructor(t,s){e(o)(this,v,{writable:!0,value:void 0}),e(o)(this,w,{writable:!0,value:void 0}),e(l)(this,v,t),e(l)(this,w,s),this.currentQuery="",this.genres=null}}(d.containerGallery,y.default),F=new(0,p.default)(d.containerPag),S=new class{hide(){this.spinnerRef.classList.add("is-hidden"),this.hidden=!0}show(){this.spinnerRef.classList.remove("is-hidden"),this.hidden=!1}constructor(){this.spinnerRef=d.spinnerRef,this.hidden=!0}},_=new class{notifyFailure(){e(n)(this,L)&&(e(l)(this,L,!1),this.note.classList.add("failure"),this.note.classList.remove("invisible","success"),this.note.innerHTML=`${e(n)(this,b)}`,setTimeout((()=>{e(n)(this,R)&&this.note.classList.add("invisible")}),3e3),setTimeout((()=>{e(l)(this,L,!0),e(n)(this,R)&&(this.note.classList.remove("failure"),this.note.innerHTML="")}),4e3))}notifySuccess(){e(n)(this,R)&&(e(l)(this,R,!1),this.note.classList.add("success"),this.note.classList.remove("invisible","failure"),this.note.innerHTML=`${e(n)(this,T)}`,setTimeout((()=>{e(n)(this,L)&&this.note.classList.add("invisible")}),3e3),setTimeout((()=>{e(l)(this,R,!0),e(n)(this,L)&&(this.note.classList.remove("success"),this.note.innerHTML="")}),4e3))}constructor(){e(o)(this,T,{writable:!0,value:"Search result is successful!"}),e(o)(this,b,{writable:!0,value:"Search result is unsuccessful. Enter the movie name and try again!"}),e(M)(this,"note",document.querySelector(".notify")),e(o)(this,L,{writable:!0,value:!0}),e(o)(this,R,{writable:!0,value:!0})}};async function k(e=1){S.show();try{const t=await E.getPopularMovies(e);S.hide(),E.renderCards(t.results),F.updateTotalItems(t.total_results),F.goToPage(e),F.render()}catch(e){console.error(e)}}async function C(e,t=1){try{const i=await E.getQueryMovies(e,t);if(!i||!i.total_results)return s=m.NOTIFY_UNCORRECT_SEARCH,d.searchFormRef.dataset.message=s,_.notifyFailure(),setTimeout((()=>{d.searchFormRef.dataset.message=""}),4e3),void k();_.notifySuccess(),E.renderCards(i.results),F.updateTotalItems(i.total_results),F.goToPage(t),F.render()}catch(e){console.log(e)}var s}d.searchFormRef.addEventListener("submit",(function(e){e.preventDefault();C(e.target.elements.search.value.trim())&&this.reset()})),F.on("aftermove",(e=>{E.currentQuery?C(E.currentQuery,e.page):k(e.page)})),c.localStorageFilms.saveItemsForArrayAfterReload(),k(),r("bTcpz"),r("16eij");
//# sourceMappingURL=index.101edcd0.js.map