import React, { Component } from 'react';

import SearchPanel from '../../molecules/search-panel/index';
import ResultsBody from '../../molecules/results-body/index';
import Film from '../../molecules/film/index';

import { MOVIES_API } from '../../../api/index';

import './main.scss';

const blockName = 'main';

export default class Main extends Component {
    state = {
      film: null,
      movies: [],
      genre: '',
      count: 0,
      showSearchPanel: true,

    };

    getMovie = (id, genre) => {
      MOVIES_API.fetchMovie(id)
        .then(result => {
          this.setState({ film: result, genre, showSearchPanel: false });
        })
        .catch(error => {
          console.log(error);
        });
    };

    getMovies = () => {
      MOVIES_API.fetchMovies()
        .then(result => {
          this.setState({ movies: result.data, count: result.total, showSearchPanel: true });
        }
        );
    }

    getSearchPanel = () => {
      this.setState({ film: null, showSearchPanel: true });
    }


    render() {
      const { film, movies, count, genre, showSearchPanel } = this.state;

      return (
        <main className={blockName}>
          {showSearchPanel ? (
            <SearchPanel
              getSearchParams={this.getMovies}
            />
          ) : (
            <Film
              film={film}
              onClickSearch={this.getSearchPanel}
            />
          )}
          <ResultsBody
            movies={movies}
            genre={genre}
            count={count}
            showSearchPanel={showSearchPanel}
            chooseFilm={this.getMovie}
            film={film}
          />
        </main>
      );
    }
}
