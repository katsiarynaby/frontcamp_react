
import queryString from 'query-string';
import { push } from 'react-router-redux';

const DEFAULT_URL = 'https://reactjs-cdp.herokuapp.com/movies';

function transformParams(params) {
  params.sortOrder = 'desc';

  switch (params.sortBy) {
    case 'release date':
      params.sortBy = 'release_date';
      return;
    case 'rating':
      params.sortBy = "vote_average";
      return;
    default:
      return params
  }
};

export const MOVIES_API = {
  fetchMovie(id) {
    return fetch(`${DEFAULT_URL}/${id}`)
      .then(res => res.json());
  },

  fetchMovies(params, dispatch) {
    if (typeof params === 'string') {
      return fetch(`${DEFAULT_URL}${params}`)
        .then(res => res.json());
    }
    if (params.config) {
      const query = queryString.stringify(transformParams(params.params));
      return fetch(`${DEFAULT_URL}?${query}`)
        .then(res => res.json());
    }
    const query = queryString.stringify(transformParams(params));
    dispatch(push(`/movies?${query}`));
    return fetch(`${DEFAULT_URL}?${query}`)
      .then(res => res.json());
  },
};
