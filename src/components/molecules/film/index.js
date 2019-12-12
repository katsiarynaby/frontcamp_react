import React, { PureComponent } from 'react';

import { FaSearch } from 'react-icons/fa';
import Logo from '../../atoms/logo';
import { getYear } from '../../atoms/card-film/utils';

import './film.scss';

const blockName = 'film';

export default class Film extends PureComponent {
  render() {
    const { film, onClickSearch } = this.props;
    const { title, tagline, vote_average, release_date, poster_path, overview, runtime } = film;

    return (
      <div className={blockName}>
        <Logo
          className={`${blockName}__logo`} />
        <img
          className={`${blockName}__image`}
          src={poster_path}
        />
        <div className={`${blockName}__overview`}>
          <div className={`${blockName}__overview--title-and-raiting`}>
            <div className={`${blockName}__title`}>{title}</div>
            <div className={`${blockName}__average`}>
              <span className={`${blockName}__average__text`}>{vote_average}</span>
              {' '}
            </div>
          </div>
          <div className={`${blockName}__tagline`}>
            {' '}
            {tagline}
          </div>
          <div className={`${blockName}__overview--release-and-runtime`}>
            <div className={`${blockName}__overview--release-and-runtime__release-date`}>
              {getYear(release_date)} <span>{`years`}</span>
              </div>
            {runtime ?
              (<div className={`${blockName}__overview--release-and-runtime__runtime`}>
              {runtime} <span>{`min`}</span>
              </div>) :
              null}
          </div>
          <div className={`${blockName}__description`}>{overview}</div>
        </div>
            <FaSearch 
            className={`${blockName}__icon-search`}
             onClick={onClickSearch} />
      </div>
    );
  }
}
