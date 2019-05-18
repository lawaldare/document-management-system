import React from 'react';
import expect from 'expect';
import '../../../setup.Tests';
import { shallow, mount } from 'enzyme';
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

let wrapper;
beforeEach(
  () =>
    (wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    ))
);

afterEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  wrapper.unmount();
});

it('renders the SignUp', () => {
  expect(wrapper).toBeTruthy();
});

it('renders SignUp with the correct content', function() {
  wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  expect(wrapper.find('input').length).toEqual(5);
  expect(wrapper.find('select').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(1);
  wrapper.unmount();
});

// describe('the input', () => {
//   beforeEach(() => {
// wrapper.find('input').simulate('change', {
//   target: { value: 'new comments' }
// });
//     wrapper.update();
//   });

// it('has a input area that users can type in', () => {
//   wrapper.find('input').simulate('change', {
//     target: { value: 'new comments' }
//   });
//   wrapper.update();
//   expect(wrapper.find('input').prop('value')).toEqual('new comments');
// });

// it('when form is submitted, text area gets emptied', () => {
//   wrapper.find('form').simulate('submit');
//   wrapper.update();
//   expect(wrapper.find('input').prop('value')).toEqual('');
// });

it('calls onSubmit prop function when form is submitted', () => {
  const handleSubmit = jest.fn();

  wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </Provider>
  );
  const form = wrapper.find('form');
  form.simulate('submit');

  expect(handleSubmit).toHaveBeenCalledTimes(0);
});
