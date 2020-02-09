import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {Provider} from 'react-redux';
import {favoriteReducer} from './redux/reducers/rootReducer';

import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';

const store = createStore (favoriteReducer);

ReactDOM.render (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById ('root')
);
