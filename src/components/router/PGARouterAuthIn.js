import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';

function PGARouterAuthIn({ component: Component, ...rest }) {
  const auth = window.localStorage && window.localStorage.auth;

  return (
    <Route
      {...rest}
      render={props => auth ? (<Redirect to="/dashboard" />) : (<Component {...props} />)}
    />
  );
}

export default PGARouterAuthIn;
