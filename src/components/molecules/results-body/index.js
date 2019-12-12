import React, { PureComponent } from 'react';
import CardFilm from '../../atoms/card-film';
import Logo from '../../atoms/logo'

import './results-body.scss';

const blockName = 'results-body';

export default class ResultsBody extends PureComponent {
  renderAdditionalPanel = () => {
    const { showSearchPanel, count, genre, movies } = this.props;
    return (
      <div className={`${blockName}--result-count`}>
        {!!movies.length && (showSearchPanel ? (
          <span>
            {`${count} movie found`}
          </span>
        ) : (
          <span>
            {`Films by ${genre} genre`}
          </span>
        ))}
      </div>
    );
  };

  renderMovies = () => {
    const { movies, chooseFilm, film } = this.props;
    return movies.map(movie => {
      if (film && film.id === movie.id) {
        return null;
      }
      return (
        <CardFilm
          key={movie.id}
          movie={movie}
          onClick={() => chooseFilm(movie.id, movie.genres[0])}
        />
      );
    }
    );
  };


  render() {
    const { movies } = this.props;

    return (
      <div className={blockName}>
        <div className={`${blockName}__additional-panel`}>
          {this.renderAdditionalPanel()}
        </div>
        <div className={`${blockName}__movies`}>
          {movies.length ?
            this.renderMovies() :
            <span className={`${blockName}__movies--no-found`}> No films found </span>}
        </div>
        <div className={`${blockName}__footer`}>
        <Logo />
        </div>
      </div>
    );
  }
}
