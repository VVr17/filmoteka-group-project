function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("98X4p"),o("kWAVo"),o("9M0Rn");var s=o("jkMrE"),n=o("g6yUq"),l=o("2shzp").default,i=new WeakMap,u=new WeakMap,c=new WeakMap;o("bTcpz");const d=document.querySelector(".search-form"),f=document.querySelector(".search-input");null==d||d.addEventListener("submit",(function(e){e.preventDefault();let t=f.value;if(t.trim(),p.searchMovies("Killer"),""==t)return d.dataset.message="Search attempt not successful. Please, enter movie name.",void setTimeout((()=>{d.dataset.message=""}),5500);p.getMovies(t,1)}));const p=new class{async searchMovies(t){try{return await l.get(e(s)(this,u),e(s)(this,c))}catch(e){}}async getMovies(t,a){t&&(e(s)(this,c).params.query=t,e(s)(this,c).params.page=a);const r=await this.searchMovies();return console.log(r),r}constructor(){e(n)(this,i,{writable:!0,value:"1351fe1fee33f4dc7ca86c3a4fb4a61c"}),e(n)(this,u,{writable:!0,value:"https://api.themoviedb.org/3/search/movie"}),e(n)(this,c,{writable:!0,value:{params:{api_key:e(s)(this,i),query:"",include_adult:!1}}})}};var h=o("9M0Rn"),v=o("6mZGd"),m=o("6nUKJ"),g=o("4Wuyl"),w=o("esqve"),y=o("hMpod"),M=o("cEPyp");new(0,v.default);(new(0,m.default)).addGalleryHandler();const b=document.querySelector(".js-gallery"),q=new(0,w.default)(b,y.default),_=document.querySelector(".pag"),k=new(0,h.default)(_),S=new(0,g.default)(".js-spinner");async function T(e=1){S.show();try{const t=await q.getPopularMovies(e);S.hide(),console.log(t),q.renderCards(t.results),k.updateTotalItems(t.total_results),k.render()}catch(e){console.error(e)}}M.localStorageFilms.saveItemsForArrayAfterReload(),k.on("aftermove",(e=>{console.log(e.page),T(e.page)})),T(),o("16eij");
//# sourceMappingURL=index.8a0f0b67.js.map
