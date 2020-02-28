import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function RouterAuthOut({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => rest.auth ? (<Component {...props} />) : (<Redirect to="/sign-in" />)}
    />
  );
}

export default RouterAuthOut;
