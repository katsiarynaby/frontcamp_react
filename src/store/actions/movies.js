export function setFilm(film) {
    return {
        type: 'ADD_FILM',
        payload: film,
    };
}

export function setMovies(movies) {
    return {
        type: 'ADD_MOVIES',
        payload: movies,
    };
}

export function setGenre(genre) {
    return {
        type: 'ADD_MOVIE_GENRE',
        payload: genre,
    };
}