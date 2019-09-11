import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Import custom application components.
import Front from './components/Block/Front';
import Dashboard from './components/Dashboard';
import PGAHeader from './components/PGAHeader';
import PGASignIn from './components/PGASignIn';
import PGASignUp from './components/PGASignUp';
import RootModal from './components/Modals/RootModal';

// Import the route's components.
import PGARouterAuthIn from './components/router/PGARouterAuthIn';
import PGARouterAuthOut from './components/router/PGARouterAuthOut';

// Import application reducer.
import rootReducer from './reducers/rootReducer';

import rootSaga from './sagas';


// Import the styles.
import "./scss/styles.scss";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>

      <RootModal showModal={ store.getState().modalReducer.showModal } />

    </Provider>
  );
}

function NoMatch() {
  return <h1>404</h1>;
}

export default App;
