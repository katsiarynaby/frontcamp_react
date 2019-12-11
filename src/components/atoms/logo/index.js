import React, { PureComponent } from 'react';
import sn from 'classnames';

import './logo.scss';

const blockName = 'logo';

export default class Logo extends PureComponent {

  render() {
      const { className } = this.props;
    return (
      <p className = {sn(className, blockName)}>NETFLIX<span>roulette</span></p>
    );
  }
}
