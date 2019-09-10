import React from 'react';
import { Link } from 'react-router-dom';

const LoginBlock = () => (
  <React.Fragment>
    <div class="login">
      <div class="login__social">
        <Link to="facebook.com" className="login__social-btn login__social-btn--color-blue" role="button">Login with Facebook</Link>
        <Link to="google.com" className="login__social-btn login__social-btn--color-red" role="button">Login with Google</Link>
      </div>
      <p>or</p>
      <div class="login__native">
        <Link to="/sign-in" className="login__native-btn login__native-btn--color-green" role="button">Sign in</Link>
        <Link to="/sign-up" className="login__native-btn login__native-btn--color-white" role="button">Sign up</Link>
        <div className="clearfix"></div>
      </div>
    </div>
  </React.Fragment>
);

export default LoginBlock;
