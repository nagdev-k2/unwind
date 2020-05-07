import {GET_DEGREES, GET_UNIVERSITIES} from '../types';

const initialState = {
  degrees: ['degree a', 'degree b', 'degree c', 'degree d', 'degree e'],
  universities: [
    'universities a',
    'universities b',
    'universities c',
    'universities d',
    'universities e',
  ],
};

const RolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEGREES:
      return {
        ...state,
        degrees: action.data,
      };
    case GET_UNIVERSITIES:
      return {
        ...state,
        degrees: action.data,
      };
    default:
      return state;
  }
};

export default RolesReducer;
