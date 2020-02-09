import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Book from '../src/components/book';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {Provider} from 'react-redux';
import {rootReducer} from '../src/reducers/rootReducer';

import {createStore} from 'redux';

const store = createStore (rootReducer);

ReactDOM.render (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById ('root')
);
