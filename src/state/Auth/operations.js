import {axiosGet} from '../../axiosConfig';

import {
  signInAction,
  getOtpAction,
  signOutAction,
  signUpAction,
} from './actions';

export const signInOperation = (params) => (dispatch) => {
  axiosGet('/signIn', params)
    .then((response) => {
      dispatch(signInAction(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const signUpOperation = (params) => (dispatch) => {
  axiosGet('/signIn', params)
    .then((response) => {
      dispatch(signUpAction(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const signOutOperation = () => (dispatch) => {
  axiosGet('/signOut')
    .then(() => {
      dispatch(signOutAction());
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const getOtpOperation = (params) => (dispatch) => {
  axiosGet('/getOtp', params)
    .then((response) => {
      dispatch(getOtpAction(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log('error', error);
    });
};
