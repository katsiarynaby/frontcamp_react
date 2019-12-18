import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from '../../store/index';

import ErrorBoundary from '../../ErrorBoundary/index';
import Main from '../../components/organisms/main/index';

syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <ErrorBoundary>
            <Main />
          </ErrorBoundary>
        </Provider>
      </Router>
    );
  };
};
