function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("98X4p"),o("9M0Rn"),o("1wH5c"),o("bTcpz");var i=o("9M0Rn"),u=o("6mZGd"),a=o("6nUKJ");var s=o("esqve"),c=o("hMpod"),l=o("cEPyp"),f=o("hXrWV");new(0,u.default);(new(0,a.default)).addGalleryHandler();const d=document.querySelector(".js-gallery"),p=new(0,s.default)(d,c.default),v=document.querySelector(".pag"),g=new(0,i.default)(v),h=new class{hide(){this.buttonRef.classList.add("is-hidden"),this.hidden=!0}show(){this.buttonRef.classList.remove("is-hidden"),this.hidden=!1}constructor(e){this.buttonRef=document.querySelector(e),this.hidden=!0}}(".js-spinner"),y=document.querySelector(".search-form");async function m(e=1){h.show();try{const t=await p.getPopularMovies(e);h.hide(),p.renderCards(t.results),g.updateTotalItems(t.total_results),g.goToPage(e),g.render()}catch(e){console.error(e)}}async function w(e,t=1){try{const n=await p.getQueryMovies(e,t);if(!n)return b(f.NOTIFY_UNCORRECT_SEARCH),void m();if(0===n.total_results)return b(f.NOTIFY_UNCORRECT_SEARCH),void m();console.log("Searched Movies:",n),p.renderCards(n.results),g.updateTotalItems(n.total_results),g.goToPage(t),g.render()}catch(e){console.log(e)}}function b(e){y.dataset.message=e,setTimeout((()=>{y.dataset.message=""}),4e3)}y.addEventListener("submit",(function(e){e.preventDefault();w(e.target.elements.search.value.trim())&&this.reset()})),g.on("aftermove",(e=>{p.currentQuery?w(p.currentQuery,e.page):m(e.page)})),l.localStorageFilms.saveItemsForArrayAfterReload(),m(),o("16eij");var T,O=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,E=/^0o[0-7]+$/i,S=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,M=_||x||Function("return this")(),N=Object.prototype.toString,C=Math.max,q=Math.min,L=function(){return M.Date.now()};function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function I(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==N.call(e)}(e))return NaN;if(F(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=F(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=j.test(e);return n||E.test(e)?S(e.slice(2),n?2:8):R.test(e)?NaN:+e}T=function(e,t,n){var r,o,i,u,a,s,c=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function v(e){return c=e,a=setTimeout(h,t),l?p(e):u}function g(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-c>=i}function h(){var e=L();if(g(e))return y(e);a=setTimeout(h,function(e){var n=t-(e-s);return f?q(n,i-(e-c)):n}(e))}function y(e){return a=void 0,d&&r?p(e):(r=o=void 0,u)}function m(){var e=L(),n=g(e);if(r=arguments,o=this,s=e,n){if(void 0===a)return v(s);if(f)return a=setTimeout(h,t),p(s)}return void 0===a&&(a=setTimeout(h,t)),u}return t=I(t)||0,F(n)&&(l=!!n.leading,i=(f="maxWait"in n)?C(I(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=s=o=a=void 0},m.flush=function(){return void 0===a?u:y(L())},m};const U=document.querySelector(".button--up");window.addEventListener("scroll",e(T)((function(){console.log(window.pageYOffset),window.pageYOffset>=1e3?U.classList.toggle("hidden",!1):U.classList.toggle("hidden",!0)}),500));
//# sourceMappingURL=index.25c0f661.js.map
