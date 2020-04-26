import {SIGN_IN, SIGN_OUT, SIGN_UP} from '../types';

const initialState = {
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.data,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.data,
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default AuthReducer;
