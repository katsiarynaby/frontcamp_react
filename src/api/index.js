const DEFAULT_URL = `https://reactjs-cdp.herokuapp.com/movies`;

export const MOVIES_API = {
  fetchMovie(id) {
    return fetch(`${DEFAULT_URL}/${id}`)
      .then(result => result.json());
  },
  fetchMovies() {
    return fetch(`${DEFAULT_URL}`)
      .then(result => result.json());
  },
};
