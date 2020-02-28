import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function RouterAuthIn({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => rest.auth ? (<Redirect to="/dashboard" />) : (<Component {...props} />)}
    />
  );
}

export default RouterAuthIn;
