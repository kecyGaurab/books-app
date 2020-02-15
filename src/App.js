import React, {Fragment, useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from '../src/pages/homePage';
import FavoritesPage from '../src/pages/favoritesPage';
import LoginPage from '../src/pages/loginPage';
import {selectCurrentUser} from './redux/selector/userSelector';
import {createStructuredSelector} from 'reselect';
import {auth, createUserProfileDocument} from './firebase/utils';
import {setUser} from './redux/actions/index';

const App = props => {
  console.log ('props in App :', props);
  const {setUser} = props;
  useEffect (() => {
    auth.onAuthStateChanged (async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument (userAuth);
        userRef.onSnapshot (snapShot => {
          setUser ({
            id: snapShot.id,
            ...snapShot.data (),
          });
        });
      } else {
        setUser (userAuth);
      }
    });
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route
          exact
          path="/login"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <LoginPage />}
        />
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch (setUser (user)),
});

export default connect (mapStateToProps, mapDispatchToProps) (App);
