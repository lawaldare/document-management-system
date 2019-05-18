import React from 'react';
import expect from 'expect';
import '../../../setup.Tests';
import { shallow } from 'enzyme';
import SignUp from '../Signup';

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

describe('SignUp Tests', function() {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Provider store={store}>
          <BrowserRouter>
            <SignUp />
          </BrowserRouter>
        </Provider>
      ))
  );

  it('renders the SignUp', () => {
    expect(wrapper).toBeTruthy();
  });

  // it('renders SignUp with the correct content', function() {
  //   let component = shallow(<SignUp />);
  //   expect(component.find('h2'));
  //   expect(component.find('h3'));
  //   component.unmount();
  // });
});
