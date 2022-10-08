//Anton's temporary code
const axios = require('axios').default;
import '../utils/handlebars-helpers';
import movieCardTemplate from '../../templates/movieCard.hbs';

//Pagination init---------------------------------------------
import Pagination from '../classes/pagination';
const container = document.querySelector('.pag');
const pagination = new Pagination(container);
pagination.on('aftermove', event => {
  console.log('page after move:', event.page);
  //here could be your code - api fetch movie with chosern page
  testMovieCardsTemplate(event.page);
});
pagination.on('beforemove', event => {
  console.log('page before move:', event.page);
});
//Pagination init---------------------------------------------

//--Variables-------------------------------------------------------
const API_KEY_TEST = '1936ce94882661ecfd75d2c22e8905aa';
const url_trendings = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY_TEST}`;
const url_genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_TEST}`;
//--Variables-------------------------------------------------------

testMovieCardsTemplate();

//Test API----------------------------------------------------------
async function testMovieCardsTemplate(page = 1) {
  try {
    //Get genres
    const response = await axios.get(url_genres);
    const genres = response.data.genres;
    // console.log(genres);

    //Get movies list
    const trendings = await axios.get(url_trendings + '&page=' + page);
    const movies = trendings.data.results;
    const totalMovies = trendings.data.total_results;
    console.log(trendings.data);

    //Update movies genres_id with genres_name
    addGenreNamesToMovies(genres, movies);

    //Render template
    tempRenderCards(movies);

    //Render Pagination
    pagination.updateTotalItems(totalMovies);
    pagination.render();
  } catch (error) {
    console.error(error);
  }
}
//Test API----------------------------------------------------------

// ////////////////=============IMPORTANT CODE PART================/////////////////////////////

function tempRenderCards(movies) {
  const container = document.querySelector('.gallery__list');
  container.innerHTML = movieCardTemplate(movies);
}

function addGenreNamesToMovies(genres, movies) {
  movies.forEach(movie => {
    movie.genre_ids.forEach((val, i) => {
      movie.genre_ids[i] = getGenreNameById(genres, val);
    });
  });
}

function getGenreNameById(genres, genreId) {
  return genres.find(genre => genre.id === genreId).name;
}
////////////////////=============IMPORTANT CODE================/////////////////////////////
