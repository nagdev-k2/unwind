import {combineReducers} from 'redux';
import authReducer from './Auth/reducer';
import layoutReducer from './Layout/reducer';
import userHomeReducer from './UserHome/reducer';
import userProfileReducer from './UserProfile/reducer';
import peopleReducer from './People/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
  userHome: userHomeReducer,
  profile: userProfileReducer,
  people: peopleReducer,
});
export default rootReducer;
