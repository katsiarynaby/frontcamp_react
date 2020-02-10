import moviesReducer from './movies';

describe('moviesReducer', () => {

    it('moviesReducer should works correctly state with setMovies action', () => {
        const mockAction = {
            type: 'ADD_MOVIES',
            payload: { data: ["film", "film"], total: '2' }
        };
        const mockState = {
            movies: ["film", "film"],
            count: '2',
        };
        
        expect(moviesReducer(null, mockAction)).toMatchObject(mockState);
    });

    it('moviesReducer should works correctly with setFilm action', () => {
        const mockAction = { type: 'ADD_FILM', payload: 'film' };
        const mockState = { film: 'film' };

        expect(moviesReducer(null, mockAction)).toMatchObject(mockState);
    });

    it('moviesReducer should works correctly with setGenre action', () => {
        const mockAction = { type: 'ADD_MOVIE_GENRE', payload: 'drama' };
        const mockState = { genre: 'drama' };

        expect(moviesReducer(null, mockAction)).toMatchObject(mockState);
    });
});
