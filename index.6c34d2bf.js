!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("2p6Fd"),o("fc6Dh"),o("3jSZ7"),o("5xtVg");var i=o("bpxeT"),u=o("2TvXO"),a=o("fc6Dh"),s=o("bKaad"),c=o("7MumP"),f=o("8MBJY"),l=o("a2hTj"),d=function(){"use strict";function t(n){e(f)(this,t),this.buttonRef=document.querySelector(n),this.hidden=!0}return e(l)(t,[{key:"hide",value:function(){this.buttonRef.classList.add("is-hidden"),this.hidden=!0}},{key:"show",value:function(){this.buttonRef.classList.remove("is-hidden"),this.hidden=!1}}]),t}(),p=o("gOExu"),v=o("85dma"),h=o("8Seta"),g=o("iqi4A");new(0,s.default);(new(0,c.default)).addGalleryHandler();var m=document.querySelector(".js-gallery"),y=new(0,p.default)(m,v.default),b=document.querySelector(".pag"),w=new(0,a.default)(b),x=new d(".js-spinner"),T=document.querySelector(".search-form");function O(){return j.apply(this,arguments)}function j(){return j=e(i)(e(u).mark((function t(){var n,r,o=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,x.show(),e.prev=2,e.next=5,y.getPopularMovies(n);case 5:r=e.sent,x.hide(),y.renderCards(r.results),w.updateTotalItems(r.total_results),w.goToPage(n),w.render(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}}),t,null,[[2,13]])}))),j.apply(this,arguments)}function S(e){return R.apply(this,arguments)}function R(){return R=e(i)(e(u).mark((function t(n){var r,o,i=arguments;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,e.prev=1,e.next=4,y.getQueryMovies(n,r);case 4:if(o=e.sent){e.next=9;break}return E(g.NOTIFY_UNCORRECT_SEARCH),O(),e.abrupt("return");case 9:if(0!==o.total_results){e.next=13;break}return E(g.NOTIFY_UNCORRECT_SEARCH),O(),e.abrupt("return");case 13:console.log("Searched Movies:",o),y.renderCards(o.results),w.updateTotalItems(o.total_results),w.goToPage(r),w.render(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.log(e.t0);case 23:case"end":return e.stop()}}),t,null,[[1,20]])}))),R.apply(this,arguments)}function E(e){T.dataset.message=e,setTimeout((function(){T.dataset.message=""}),4e3)}T.addEventListener("submit",(function(e){e.preventDefault(),S(e.target.elements.search.value.trim())&&this.reset()})),w.on("aftermove",(function(e){y.currentQuery?S(y.currentQuery,e.page):O(e.page)})),h.localStorageFilms.saveItemsForArrayAfterReload(),O(),o("aruhj");var _,N=o("l5bVx"),C=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,q=/^0o[0-7]+$/i,F=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,D="object"==typeof self&&self&&self.Object===Object&&self,I=L||D||Function("return this")(),A=Object.prototype.toString,Y=Math.max,P=Math.min,U=function(){return I.Date.now()};function $(t){var n=void 0===t?"undefined":e(N)(t);return!!t&&("object"==n||"function"==n)}function H(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(N)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==A.call(t)}(t))return NaN;if($(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=$(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(C,"");var r=k.test(t);return r||q.test(t)?F(t.slice(2),r?2:8):M.test(t)?NaN:+t}_=function(e,t,n){var r,o,i,u,a,s,c=0,f=!1,l=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function v(e){return c=e,a=setTimeout(g,t),f?p(e):u}function h(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-c>=i}function g(){var e=U();if(h(e))return m(e);a=setTimeout(g,function(e){var n=t-(e-s);return l?P(n,i-(e-c)):n}(e))}function m(e){return a=void 0,d&&r?p(e):(r=o=void 0,u)}function y(){var e=U(),n=h(e);if(r=arguments,o=this,s=e,n){if(void 0===a)return v(s);if(l)return a=setTimeout(g,t),p(s)}return void 0===a&&(a=setTimeout(g,t)),u}return t=H(t)||0,$(n)&&(f=!!n.leading,i=(l="maxWait"in n)?Y(H(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=s=o=a=void 0},y.flush=function(){return void 0===a?u:m(U())},y};var Q=document.querySelector(".button--up");window.addEventListener("scroll",e(_)((function(){console.log(window.pageYOffset),window.pageYOffset>=1e3?Q.classList.toggle("hidden",!1):Q.classList.toggle("hidden",!0)}),500))}();
//# sourceMappingURL=index.6c34d2bf.js.map
