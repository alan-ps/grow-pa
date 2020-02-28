import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RouterAuthIn from './RouterAuthIn';
import RouterAuthOut from './RouterAuthOut';

import Dashboard from 'components/Pages/Dashboard';
import CategoryItem from 'components/Pages/CategoryItem';
import NoMatch from 'components/Pages/NoMatch';

import Front from 'components/Block/Front';
import PGASignIn from 'components/PGASignIn';
import PGASignUp from 'components/PGASignUp';

const AppRouter = () => {
  const auth = window.localStorage && window.localStorage.auth;

  return(
   <BrowserRouter>
    <Switch>
      <RouterAuthIn exact path="/" auth={auth} component={Front} />
      <RouterAuthOut path="/dashboard" auth={auth} component={Dashboard} />
      <RouterAuthIn path="/sign-in" auth={auth} component={PGASignIn} />
      <RouterAuthIn path="/sign-up" auth={auth} component={PGASignUp} />
      <Route path="/categories/:id" component={CategoryItem} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)};

export default AppRouter;
