import React, { Component } from 'react';

import './results-body.scss';

const blockName = 'results-body';

export default class ResultsBody extends Component {

  renderAdditionalPanel = () => {
    const { showSearchPanel, count, genre, movies } = this.props;
    return (
      <div className={`${blockName}--result-count`}>
        {!!movies.length && ( showSearchPanel ?
         <span>
         {`${count} movie found`}
         </span> 
         :
          <span>
            {`Films by ${genre} genre`}
          </span>
        )}
      </div>
    )
  };

  renderMovies = () => {
      return (
        <div>
          {movie.title}
        </div>
      );
  };

  render() {
    const { movies } = this.props;

    return(
      <div className={blockName}>
        <div className={`${blockName}__additional-panel`}>
          {this.renderAdditionalPanel()}
        </div>
        <div className={`${blockName}__movies`}>
          {!!movies.length ? this.renderMovies() : <span className={`${blockName}__movies--no-found`}> No films found </span>}
        </div>
        <div className={`${blockName}__footer`}>
        
        </div>
      </div>
    );
  };
};
