import React, { Component } from 'react';

import ErrorBoundary from '../../ErrorBoundary/index';
import Main from '../../components/organisms/main/index';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    );
  };
};
