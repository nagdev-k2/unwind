import {GET_PROFILE_DETAILS} from '../types';
import Dummy from '../../Constants/dummy/profile';

const initialState = {
  profileDetails: Dummy,
};

const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: action.data,
      };
    default:
      return state;
  }
};

export default UserProfileReducer;
