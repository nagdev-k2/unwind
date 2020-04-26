import {SIGN_IN, SIGN_OUT} from '../types';

export const signInAction = (data) => ({
  type: SIGN_IN,
  data,
});

export const signUpAction = (data) => ({
  type: SIGN_IN,
  data,
});

export const signOutAction = () => ({
  type: SIGN_OUT,
});
