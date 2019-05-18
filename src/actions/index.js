import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = (user, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/v1/users/signup',
      user
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email has been used Dude!!!' });
  }
};

export const signin = (user, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/v1/users/login',
      user
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login details' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};
