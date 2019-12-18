
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import { routerReducer } from 'react-router-redux';


import moviesReducer from './reducers/movies';

const middleware = routerMiddleware(browserHistory);
const reducer = combineReducers({ moviesReducer, routing: routerReducer });
export const store = createStore(reducer, applyMiddleware(thunk, logger, middleware));