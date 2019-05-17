import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import LandingPage from './components/LandingPage/LandingPage';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={LandingPage} />
        {/* <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} /> */}
      </App>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
