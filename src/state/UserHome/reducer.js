import {VIEW_ALL_POST} from '../types';
import DummyPosts from '../../Constants/dummy/home';

const initialState = {
  allPosts: DummyPosts,
};

const UserHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_ALL_POST:
      return {
        ...state,
        allPosts: action.data,
      };
    default:
      return state;
  }
};

export default UserHomeReducer;
