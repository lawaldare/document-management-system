import React from 'react';
import { shallow } from 'enzyme';
import '../../../setup.Tests';
import App from '../App';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import '../../../index';
import ReactDOM from 'react-dom';

jest.mock('react-dom');

test('Renders the application', () => {
  expect(ReactDOM.render).toBeCalled();
});

it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(NavBar).length).toEqual(1);
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(Footer).length).toEqual(1);
});
