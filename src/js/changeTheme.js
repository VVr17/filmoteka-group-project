// import LocalStorage from './classes/LocalStorage';
// import LocalStorage from './LocalStorage';
// export const localStorageFilms = new LocalStorage();
// localStorageFilms.themeBody = 'dark-theme'; //записал тему
// localStorageFilms.getItemFromKeyStorage('theme'); //вернул тему

const refs = {
  button: document.querySelector('.toggle-track'),
  label: document.querySelector('.theme-btn'),
  header: document.querySelector('header'),
  input: document.querySelector('.toggle__input'),
};

refs.button.addEventListener('click', changeTheme);
refs.label.addEventListener('click', changeTheme);

let currentThemeValue = getThemeValue();

function updatePage(themeValue) {
  if (themeValue === 'dark-theme') {
    onDarkTheme();
    refs.input.setAttribute('checked', true);
  }
}
updatePage(currentThemeValue);

function onDarkTheme() {
  document.body.classList.toggle('dark-theme');
  refs.header.classList.toggle('dark-image');
}

function changeTheme(event) {
  if (!document.body.classList.contains('dark-theme')) {
    saveThemeValue();
  } else {
    clearThemeValue();
  }
  onDarkTheme();
}

function saveThemeValue() {
  localStorage.setItem('themeBody', 'dark-theme');
}

function clearThemeValue() {
  localStorage.removeItem('themeBody');
}

function getThemeValue() {
  return localStorage.getItem('themeBody');
}