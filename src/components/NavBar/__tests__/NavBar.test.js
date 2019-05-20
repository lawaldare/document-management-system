import React from 'react';
import expect from 'expect';
import '../../../setup.Tests';
import { mount } from 'enzyme';
import NavBar from '../NavBar';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(thunk)
);

let wrapper;

beforeEach(
  () =>
    (wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    ))
);

it('renders the NavBar', () => {
  expect(wrapper).toBeTruthy();
});

it('renders NavBar with the correct content', function() {
  let component = mount(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );
  expect(component.find('dms'));
  expect(component.find('li').length).toEqual(2);
  component.unmount();
});
