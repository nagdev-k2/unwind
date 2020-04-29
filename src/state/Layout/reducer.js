import {SET_ACTIVE_FOOTER} from '../types';

const initialState = {
  activeFooter: 'home',
};

const LayoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_FOOTER:
      return {
        ...state,
        activeFooter: action.data,
      };
    default:
      return state;
  };
};

export default LayoutReducer;
