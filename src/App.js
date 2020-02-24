import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import custom application components.
import Front from './components/Block/Front';
import PGAHeader from './components/PGAHeader';
import PGASignIn from './components/PGASignIn';
import PGASignUp from './components/PGASignUp';
import AppModal from './components/Modal/AppModal';

// Import the route's components.
import PGARouterAuthIn from './components/router/PGARouterAuthIn';
import PGARouterAuthOut from './components/router/PGARouterAuthOut';

// Import the page components.
import Dashboard from './components/Pages/Dashboard';
import CategoryItem from './components/Pages/CategoryItem';
import NoMatch from './components/Pages/NoMatch';

// Import the styles.
import "./scss/styles.scss";

import configureStore from './configureStore'
const store = configureStore();

/**
 * An entry application component.
 */
function App() {
  // @TODO
  const auth = window.localStorage && window.localStorage.auth;

  return (
    <Provider store={store}>
      <div id="page-wrapper">
        <PGAHeader auth={auth} />
        <div className="main-wrapper">
          <BrowserRouter>
            <Switch>
              <PGARouterAuthIn exact path="/" auth={auth} component={Front} />
              <PGARouterAuthOut path="/dashboard" auth={auth} component={Dashboard} />
              <PGARouterAuthIn path="/sign-in" auth={auth} component={PGASignIn} />
              <PGARouterAuthIn path="/sign-up" auth={auth} component={PGASignUp} />

              <Route path="/categories/:id" component={CategoryItem} />

              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>

      <AppModal />

    </Provider>
  );
}

export default App;
