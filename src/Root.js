import React from 'react';
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
