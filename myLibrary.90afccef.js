var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r("98X4p"),r("kWAVo"),r("bTcpz"),r("16eij");var n=r("9M0Rn"),a=r("6nUKJ"),l=r("hMpod"),d=r("cEPyp"),c=r("esqve");d.localStorageFilms.saveItemsForArrayAfterReload();(new(0,a.default)).addGalleryHandler();const u=document.querySelector(".gallery__list"),i=(new(0,c.default)(u,l.default),document.querySelector(".pag")),s=new(0,n.default)(i);let f=1,g=v("watch");function p(e){document.querySelector(".gallery__list").innerHTML=(0,l.default)({movies:e,library:!0}),s.updateTotalItems(g.length),s.goToPage(f),s.render()}function v(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}function y(e,t){e.length<=20?p(e):e.length>20&&m(e,t)}function m(e,t){const o=20*t,r=[];for(let t=o-20;t<o;t++)void 0!==e[t]&&r.push(e[t]);p(r)}s.on("aftermove",(e=>{f=e.page,m(g,f)})),void 0!==g&&y(g,f);const h=document.querySelector(".header"),w=h.querySelectorAll(".button--dark-mode");h.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;w.forEach((function(e){e.classList.remove("button--active")})),"watched"===e.target.textContent?(e.target.classList.add("button--active"),g=v("watch"),f=1,y(g,f)):"queue"===e.target.textContent&&(e.target.classList.add("button--active"),g=v("queue"),f=1,y(g,f))}));
//# sourceMappingURL=myLibrary.90afccef.js.map
