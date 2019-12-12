import React, { Component } from 'react';

import SearchPanel from '../../molecules/search-panel/index';
import ResultsBody from '../../molecules/results-body/index';
import Film from '../../molecules/film'

import { MOVIES_API } from '../../../api/index';

import './main.scss';

const blockName = 'main';

export default class Main extends Component {

  state = {
    film: null,
    movies: [],
    genre: '',
    count: '',
    showSearchPanel: true,

  };

  getMovie = (id, genre) => {
    MOVIES_API.fetchMovie(id)
      .then(result => {
        this.setState({ film: result, genre: genre, showSearchPanel: false })
      })
  };

  getMovies = () => {
    MOVIES_API.fetchMovies()
      .then(result => {
        this.setState({ movies: result.data, count: result.total })
      }
      )
  }

  getSearchPanel = () => {
    this.setState({ film: null, showSearchPanel: true })
  }



  render() {
    const { film, movies, count, genre, showSearchPanel } = this.state;

    return (
      <main className={blockName}>
        {showSearchPanel ?
          <SearchPanel
            getSearchParams={this.getMovies}
          /> :
          <Film
            film={film}
            onClickSearch={this.getSearchPanel}

          />
        }
        <ResultsBody
          film={film}
          movies={movies}
          genre={genre}
          count={count}
          showSearchPanel={showSearchPanel}
          chooseFilm={this.getMovie}
        />
      </main>
    )
  };
}
