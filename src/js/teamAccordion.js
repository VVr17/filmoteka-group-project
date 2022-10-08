const accordionRef = document.querySelector('#accordion');

accordionRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  // open current item
  if (
    event.target.nodeName === 'BUTTON' ||
    event.target.closest('[data-accordion-btn]')
  ) {
    const toggledBtnRef = event.target.closest('[data-accordion-btn]');

    const attributeToSet =
      toggledBtnRef.getAttribute('aria-expanded') === 'false'
        ? 'true'
        : 'false';

    toggledBtnRef.setAttribute('aria-expanded', `${attributeToSet}`);
    event.target.closest('li').classList.toggle('is-shown');
  }
}
