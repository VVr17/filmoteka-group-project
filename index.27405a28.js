document.querySelector("#accordion").addEventListener("click",(function(t){if("BUTTON"===t.target.nodeName||t.target.closest("[data-accordion-btn]")){const e=t.target.closest("[data-accordion-btn]"),a="false"===e.getAttribute("aria-expanded")?"true":"false";e.setAttribute("aria-expanded",`${a}`),t.target.closest("li").classList.toggle("is-shown")}}));
//# sourceMappingURL=index.27405a28.js.map
