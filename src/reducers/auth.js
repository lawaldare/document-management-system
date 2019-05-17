import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMsg: ''
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_USER:
      return { ...state, authenticated: payload };
    case AUTH_ERROR:
      return { ...state, errorMsg: payload };
    default:
      return state;
  }
}
