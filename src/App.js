import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../src/pages/homePage';
import FavoritesPage from '../src/pages/favoritesPage';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
