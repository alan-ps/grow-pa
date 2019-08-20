import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';

function PGARouterAuthOut({ component: Component, ...rest }) {
  const auth = window.localStorage && window.localStorage.auth;

  return (
    <Route
      {...rest}
      render={props => auth ? (<Component {...props} />) : (<Redirect to="/sign-in" />)}
    />
  );
}

export default PGARouterAuthOut;
