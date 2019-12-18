import { MOVIES_API } from '../../api/index';
import { setMovies, setFilm, setGenre } from '../actions/movies';

export const getFilm = (id) => (dispatch) => {
    MOVIES_API.fetchMovie(id)
        .then(data => dispatch(setFilm(data)))
        .catch(error => console.log(error));
};

export const getMovies = (params) => (dispatch) => {
    MOVIES_API.fetchMovies(params, dispatch)
        .then(data => dispatch(setMovies(data)))
        .catch(error => console.log(error))
};

export const getGenre = (genre) => (dispatch) => {
    dispatch(setGenre(genre));
};

export const deleteMovie = () => (dispatch) => {
    dispatch(setFilm(null));
};