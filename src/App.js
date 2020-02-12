import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../src/pages/homePage';
import FavoritesPage from '../src/pages/favoritesPage';
import LoginPage from '../src/pages/loginPage';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/favorites" component={FavoritesPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
