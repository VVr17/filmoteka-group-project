// API _ KEY
// https://api.themoviedb.org/3/movie/76341?api_key=1351fe1fee33f4dc7ca86c3a4fb4a61c&language=en-US

import axios from 'axios';

const API_KEY = '1351fe1fee33f4dc7ca86c3a4fb4a61c';

const form = document.querySelector('.search-form');
form.addEventListener('submit', onSubmit);

const input = document.querySelector('.search-input');

// class SearchFetch {
//   constructor() {}
// }

const fetchFilm = async (page, query) => {
  await axios(
    `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  )
    .then(response => {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

function onSubmit(event) {
  event.preventDefault();

  const searchValue = input.value;
  searchValue.trim();

  if (searchValue == '') {
    console.log('query err');
    return;
  }

  console.log('query work');

  fetchFilm(1, 'F');
}
