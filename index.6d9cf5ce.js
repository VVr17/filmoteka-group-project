!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("2p6Fd"),o("fc6Dh");var u,i=o("l5bVx"),a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,v=d||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return v.Date.now()};function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=c.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):s.test(t)?NaN:+t}u=function(e,t,n){var r,o,u,i,a,s,c=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,u=o;return r=o=void 0,c=t,i=e.apply(u,n)}function v(e){return c=e,a=setTimeout(x,t),l?p(e):i}function h(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-c>=u}function x(){var e=y();if(h(e))return T(e);a=setTimeout(x,function(e){var n=t-(e-s);return f?g(n,u-(e-c)):n}(e))}function T(e){return a=void 0,d&&r?p(e):(r=o=void 0,i)}function O(){var e=y(),n=h(e);if(r=arguments,o=this,s=e,n){if(void 0===a)return v(s);if(f)return a=setTimeout(x,t),p(s)}return void 0===a&&(a=setTimeout(x,t)),i}return t=w(t)||0,b(n)&&(l=!!n.leading,u=(f="maxWait"in n)?m(w(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=s=o=a=void 0},O.flush=function(){return void 0===a?i:T(y())},O};var x=document.querySelector(".button--up");document.querySelector(".js-gallery"),document.querySelector(".pag"),document.querySelector(".search-form");window.addEventListener("scroll",e(u)((function(){window.pageYOffset>=1e3?x.classList.toggle("hidden",!1):x.classList.toggle("hidden",!0)}),500)),o("3jSZ7");var T=o("bpxeT"),O=o("2TvXO"),j=o("bKaad"),S=o("gOExu"),R=o("7MumP"),q=o("8Seta"),E=o("fc6Dh"),_=o("8MBJY"),N=o("a2hTj"),C=function(){"use strict";function t(n){e(_)(this,t),this.buttonRef=document.querySelector(n),this.hidden=!0}return e(N)(t,[{key:"hide",value:function(){this.buttonRef.classList.add("is-hidden"),this.hidden=!0}},{key:"show",value:function(){this.buttonRef.classList.remove("is-hidden"),this.hidden=!1}}]),t}(),M=o("85dma"),k=o("iqi4A");new(0,j.default);(new(0,R.default)).addGalleryHandler();var F=document.querySelector(".js-gallery"),L=new(0,S.default)(F,M.default),D=document.querySelector(".pag"),I=new(0,E.default)(D),A=new C(".js-spinner"),P=document.querySelector(".search-form");function U(){return Y.apply(this,arguments)}function Y(){return Y=e(T)(e(O).mark((function t(){var n,r,o=arguments;return e(O).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,A.show(),e.prev=2,e.next=5,L.getPopularMovies(n);case 5:r=e.sent,A.hide(),L.renderCards(r.results),I.updateTotalItems(r.total_results),I.goToPage(n),I.render(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}}),t,null,[[2,13]])}))),Y.apply(this,arguments)}function $(e){return H.apply(this,arguments)}function H(){return H=e(T)(e(O).mark((function t(n){var r,o,u=arguments;return e(O).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,e.prev=1,e.next=4,L.getQueryMovies(n,r);case 4:if(o=e.sent){e.next=9;break}return Q(k.NOTIFY_UNCORRECT_SEARCH),U(),e.abrupt("return");case 9:if(0!==o.total_results){e.next=13;break}return Q(k.NOTIFY_UNCORRECT_SEARCH),U(),e.abrupt("return");case 13:console.log("Searched Movies:",o),L.renderCards(o.results),I.updateTotalItems(o.total_results),I.goToPage(r),I.render(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.log(e.t0);case 23:case"end":return e.stop()}}),t,null,[[1,20]])}))),H.apply(this,arguments)}function Q(e){P.dataset.message=e,setTimeout((function(){P.dataset.message=""}),4e3)}P.addEventListener("submit",(function(e){e.preventDefault(),$(e.target.elements.search.value.trim())&&this.reset()})),I.on("aftermove",(function(e){L.currentQuery?$(L.currentQuery,e.page):U(e.page)})),q.localStorageFilms.saveItemsForArrayAfterReload(),U(),o("5xtVg"),o("aruhj")}();
//# sourceMappingURL=index.6d9cf5ce.js.map
