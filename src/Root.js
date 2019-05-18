import React from 'react';
//import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
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

export default ({ children }) => {
  const store = createStore(
    reducers,
    { auth: { authenticated: localStorage.getItem('token') } },
    applyMiddleware(thunk)
  );

  return <Provider store={store}>{children}</Provider>;
};
