import {createStore, applyMiddleware} from 'redux';
import {favoriteReducer} from '../reducers/favoriteReducer';

import logger from 'redux-logger';

const store = createStore (favoriteReducer, applyMiddleware (logger));

export default store;
