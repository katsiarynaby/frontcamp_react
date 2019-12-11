import React, { PureComponent } from 'react';

import { arrayToString, getYear } from './utils';

import './card-film.scss';

const blockName = 'card-film';

export default class CardFilm extends PureComponent {
  render() {
    const { movie, onClick } = this.props;
    const { title, poster_path, release_date, genres} = movie;


    return (
      <div
        className={blockName}
        onClick={onClick}
      >
        <img
          className={`${blockName}__image`}
          src={poster_path}
        />
        <div className={`${blockName}__release-and-title`}>
          <div className={`${blockName}__title`}>{title}</div>
          <div className={`${blockName}__date`}>{getYear(release_date)}</div>
        </div>
        <div className={`${blockName}__genre`}>{arrayToString(genres)}</div>
      </div>
    );
  }
}
