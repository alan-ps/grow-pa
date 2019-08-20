import React, {Component} from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';

import PGASignIn from './components/PGASignIn';
import PGARouterAuthIn from './components/router/PGARouterAuthIn';
import PGARouterAuthOut from './components/router/PGARouterAuthOut';

import Front from './components/Front';
import "./scss/styles.scss";

/**
 * An entry application component.
 */
function App() {
  return (
    <div id="page-wrapper">
      <Header />
      <div className="main-wrapper">
        <BrowserRouter>
          <Switch>
            <PGARouterAuthIn exact path="/" component={Front} />
            <PGARouterAuthOut path="/dashboard" component={Dashboard} />
            <PGARouterAuthIn path="/sign-in" component={PGASignIn} />
            <PGARouterAuthIn path="/sign-up" component={SignUp} />
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

function SignIn() {
  return <h1>SignIn</h1>;
}

function SignUp() {
  return <h1>SignUn</h1>;
}

function NoMatch() {
  return <h1>404</h1>;
}

function Header() {
  return <header></header>;
}

export default App;
