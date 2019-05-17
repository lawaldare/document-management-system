import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import LandingPage from './components/LandingPage/LandingPage';
import Signup from './components/auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={LandingPage} />
        <Route path="/api/v1/users/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/signout" component={Signout} /> */}
        {/* <Route path="/signin" component={Signin} /> */}
      </App>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
