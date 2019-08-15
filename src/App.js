import React, {Component} from 'react';
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Front from './components/Front';

/**
 * An entry application component.
 */
function App() {
  let auth = false;

  return (
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path="/"
          render={() => (auth ? (<Redirect to="/dashboard" />) : (<Front />))}
        />

        <Route
          path="/dashboard"
          render={() => (!auth ? (<Redirect to="/sign-in" />) : (<Dashboard />))}
        />

        <Route
          path="/sign-in"
          render={() => (auth ? (<Redirect to="/dashboard" />) : (<SignIn />))}
        />

        <Route
          path="/sign-up"
          render={() => (auth ? (<Redirect to="/dashboard" />) : (<SignUp />))}
        />

        <Route
          component={NoMatch}
        />

      </Switch>
    </BrowserRouter>
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

export default App;
