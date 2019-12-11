import React, { Component } from 'react';
import sn from 'classnames';

import './search-button.scss';

const blockName = 'search-button';

export default class SearchButton extends Component {
  render() {
    const { value, onClick, active, additionalClass } = this.props;

    return(
        <button
          type={'button'}
          className={active ? sn(`${blockName}--active`, additionalClass): sn(blockName, additionalClass)}
          onClick={onClick}
          value={value}
        >
        {value}
        </button>
    );
  }
}
