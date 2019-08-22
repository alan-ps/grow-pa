import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PGARouterAuthOut({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => rest.auth ? (<Component {...props} />) : (<Redirect to="/sign-in" />)}
    />
  );
}

export default PGARouterAuthOut;
