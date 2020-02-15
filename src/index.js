import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {Provider} from 'react-redux';
import store from './redux/store/index';
import {BrowserRouter} from 'react-router-dom';

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
