import ApiService from './ApiService';
import CheckMovies from './CheckMovies';
import { localStorageFilms } from './ModalBtn';

const api = new ApiService();
const checkMovies = new CheckMovies();

export default class Gallery {
  #galleryContainer;
  #cardsTemplate;

  constructor(container, template) {
    this.#galleryContainer = container;
    this.#cardsTemplate = template;
    this.currentQuery = '';
    this.genres = null;
  }

  async getPopularMovies(page) {
    this.genres = await api.fetchGenres();
    const response = await api.fetchTrendingMovies(page);

    return response.data;
  }

  renderCards(movies) {
    checkMovies.update(movies, this.genres);
    this.#galleryContainer.innerHTML = this.#cardsTemplate({
      movies,
      library: false,
    });
    localStorageFilms.addItemsOnCurrentPage(movies);
  }
}

export { checkMovies };
