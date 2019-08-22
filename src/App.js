import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PGAHeader from './components/PGAHeader';
import PGASignIn from './components/PGASignIn';
import PGASignUp from './components/PGASignUp';
import PGARouterAuthIn from './components/router/PGARouterAuthIn';
import PGARouterAuthOut from './components/router/PGARouterAuthOut';

import Front from './components/Front';
import "./scss/styles.scss";

/**
 * An entry application component.
 */
function App() {
  // @TODO
  const auth = window.localStorage && window.localStorage.auth;

  return (
    <div id="page-wrapper">
      <PGAHeader auth={auth} />
      <div className="main-wrapper">
        <BrowserRouter>
          <Switch>
            <PGARouterAuthIn exact path="/" auth={auth} component={Front} />
            <PGARouterAuthOut path="/dashboard" auth={auth} component={Dashboard} />
            <PGARouterAuthIn path="/sign-in" auth={auth} component={PGASignIn} />
            <PGARouterAuthIn path="/sign-up" auth={auth} component={PGASignUp} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function NoMatch() {
  return <h1>404</h1>;
}

export default App;
