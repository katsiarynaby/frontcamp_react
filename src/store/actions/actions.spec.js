import { setMovies, setFilm, setGenre } from './movies';

describe('setMovies', () => {
    const mockMovies = 'movies';

  it('setMovies action works correctly ', () => {
    const mockAction = { type: 'ADD_MOVIES', payload: mockMovies };
    expect(setMovies(mockMovies)).toMatchObject(mockAction);
  });

  it('setFilm action works correctly', () => {
    const mockAction = { type: 'ADD_FILM', payload: mockMovies };
    expect(setFilm(mockMovies)).toMatchObject(mockAction);
  });

  it('setGenre action works correctly', () => {
    const mockAction = { type: 'ADD_MOVIE_GENRE', payload: mockMovies };
    expect(setGenre(mockMovies)).toMatchObject(mockAction);
  });
});
