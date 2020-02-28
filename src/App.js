import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './router';
import configureStore from './configureStore'
import PGAHeader from './components/PGAHeader';

export default function App() {
  const store = configureStore();
  // @TODO
  const auth = window.localStorage && window.localStorage.auth;

  return (
    <Provider store={store}>
      <div id="page-wrapper">
        <PGAHeader auth={auth} />
        <div className="main-wrapper">
          <AppRouter />
        </div>
      </div>
    </Provider>
  );
}
