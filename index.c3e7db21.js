!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("2p6Fd"),i("fc6Dh");var o,a=i("l5bVx"),u=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,v=d||p||Function("return this")(),h=Object.prototype.toString,g=Math.max,m=Math.min,b=function(){return v.Date.now()};function y(t){var n=void 0===t?"undefined":e(a)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(a)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=f.test(t);return r||c.test(t)?l(t.slice(2),r?2:8):s.test(t)?NaN:+t}o=function(e,t,n){var r,i,o,a,u,s,f=0,c=!1,l=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function v(e){return f=e,u=setTimeout(x,t),c?p(e):a}function h(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-f>=o}function x(){var e=b();if(h(e))return T(e);u=setTimeout(x,function(e){var n=t-(e-s);return l?m(n,o-(e-f)):n}(e))}function T(e){return u=void 0,d&&r?p(e):(r=i=void 0,a)}function R(){var e=b(),n=h(e);if(r=arguments,i=this,s=e,n){if(void 0===u)return v(s);if(l)return u=setTimeout(x,t),p(s)}return void 0===u&&(u=setTimeout(x,t)),a}return t=w(t)||0,y(n)&&(c=!!n.leading,o=(l="maxWait"in n)?g(w(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),R.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=s=i=u=void 0},R.flush=function(){return void 0===u?a:T(b())},R};var x=i("ikGeD");window.addEventListener("scroll",e(o)((function(){window.pageYOffset>=1e3?x.buttonUpRef.classList.toggle("hidden",!1):x.buttonUpRef.classList.toggle("hidden",!0)}),500)),i("3jSZ7");var T=i("bpxeT"),R=i("2TvXO"),O=i("bKaad"),j=i("gOExu"),k=i("7MumP"),E=i("8Seta"),_=i("fc6Dh"),F=i("8MBJY"),N=i("a2hTj"),C=(x=i("ikGeD"),function(){"use strict";function t(){e(F)(this,t),this.spinnerRef=x.spinnerRef,this.hidden=!0}return e(N)(t,[{key:"hide",value:function(){this.spinnerRef.classList.add("is-hidden"),this.hidden=!0}},{key:"show",value:function(){this.spinnerRef.classList.remove("is-hidden"),this.hidden=!1}}]),t}()),D=i("85dma"),M=i("iqi4A");x=i("ikGeD"),new(0,O.default);(new(0,k.default)).addGalleryHandler();var S=new(0,j.default)(x.containerGallery,D.default),L=new(0,_.default)(x.containerPag),I=new C;function U(){return A.apply(this,arguments)}function A(){return A=e(T)(e(R).mark((function t(){var n,r,i=arguments;return e(R).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,I.show(),e.prev=2,e.next=5,S.getPopularMovies(n);case 5:r=e.sent,I.hide(),S.renderCards(r.results),L.updateTotalItems(r.total_results),L.goToPage(n),L.render(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}}),t,null,[[2,13]])}))),A.apply(this,arguments)}function G(e){return P.apply(this,arguments)}function P(){return P=e(T)(e(R).mark((function t(n){var r,i,o=arguments;return e(R).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,e.next=4,S.getQueryMovies(n,r);case 4:if(i=e.sent){e.next=9;break}return Y(M.NOTIFY_UNCORRECT_SEARCH),U(),e.abrupt("return");case 9:if(0!==i.total_results){e.next=13;break}return Y(M.NOTIFY_UNCORRECT_SEARCH),U(),e.abrupt("return");case 13:console.log("Searched Movies:",i),S.renderCards(i.results),L.updateTotalItems(i.total_results),L.goToPage(r),L.render(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.log(e.t0);case 23:case"end":return e.stop()}}),t,null,[[1,20]])}))),P.apply(this,arguments)}function Y(e){x.searchFormRef.dataset.message=e,setTimeout((function(){x.searchFormRef.dataset.message=""}),4e3)}x.searchFormRef.addEventListener("submit",(function(e){e.preventDefault(),G(e.target.elements.search.value.trim())&&this.reset()})),L.on("aftermove",(function(e){S.currentQuery?G(S.currentQuery,e.page):U(e.page)})),E.localStorageFilms.saveItemsForArrayAfterReload(),U(),i("5xtVg"),i("aruhj")}();
//# sourceMappingURL=index.c3e7db21.js.map
