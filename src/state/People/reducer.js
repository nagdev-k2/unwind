import {View_ALL_PEOPLE} from '../types';
import Dummy from '../../Constants/dummy/people';

const initialState = {
  allPeople: Dummy,
};

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case View_ALL_PEOPLE:
      return {
        ...state,
        allPeople: action.data,
      };
    default:
      return state;
  }
};

export default PeopleReducer;
