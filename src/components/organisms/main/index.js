import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchPanel from '../../molecules/search-panel/index';
import ResultsBody from '../../molecules/results-body/index';
import Film from '../../molecules/film'
import { getMovies, getFilm, getGenre, deleteMovie } from '../../../store/thunk/movies';

import './main.scss';

const blockName = 'main';

class Main extends Component {

  state = {
    showSearchPanel: true,
    filmId: null,
  };

  componentDidMount() {
    const { getMovies, routes, movies } = this.props;
    if (movies && routes.search) {
      getMovies(routes.search);
    }
  };

  static getDerivedStateFromProps(props, state) {
    const { film, getGenre, getMovies } = props;
    if (film && film.id !== state.filmId) {
      getMovies({
        params: {
          search: film.genres[0],
          searchBy: 'genres'
        },
        config: 'genres'
      });
      getGenre(film.genres[0]);
      return { showSearchPanel: false, filmId: film.id }
    }
    return null;
  };

  fetchMovie = (id) => {
    const { getFilm } = this.props;

    this.setState({ showSearchPanel: false });
    getFilm(id);
  };

  fetchMovies = (params) => {
    const { getMovies } = this.props;

    getMovies(params);
  }

  getSearchPanel = () => {
    const { deleteMovie, film } = this.props;

    this.setState({ showSearchPanel: true });
    if (film) {
      deleteMovie();
    }
  };


  render() {
    const { showSearchPanel } = this.state;

    const {
      getMovies,
      getFilm,
      movies,
      count,
      film,
      genre,
    } = this.props;


    return (
      <main className={blockName}>
        {showSearchPanel && <SearchPanel
          getSearchParams={this.fetchMovies}
        />}
        <Switch>
          <Route
            exact
            path='/movies'
            component={() => {
              return (
                <Fragment>
                  <ResultsBody
                    film={film}
                    movies={movies}
                    genre={genre}
                    count={count}
                    showSearchPanel={showSearchPanel}
                    chooseFilm={this.fetchMovie}
                  />
                </Fragment>
              )
            }}
          />
          <Route
            path='/film/:id'
            component={() => {
              return (
                <Fragment>
                  <Film
                    film={film}
                    getMovies={getMovies}
                    getFilm={getFilm}
                    onClickSearch={this.getSearchPanel}
                  />
                  <ResultsBody
                    film={film}
                    movies={movies}
                    genre={genre}
                    count={count}
                    showSearchPanel={showSearchPanel}
                    chooseFilm={this.fetchMovie}
                  />
                </Fragment>
              )
            }}
          />
          <Route
            exact
            path='/'
            component={() => <Redirect to='/movies' />}
          />
        </Switch>
      </main>
    )
  };
}

export default connect(
  state => {
    return {
      movies: state.moviesReducer.movies,
      count: state.moviesReducer.count,
      film: state.moviesReducer.film,
      genre: state.moviesReducer.genre,
      routes: state.routing.locationBeforeTransitions,
    }
  },
  { getMovies, getFilm, getGenre, deleteMovie }
)(Main)