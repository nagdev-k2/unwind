import {combineReducers} from 'redux';
import authReducer from './Auth/reducer';
import layoutReducer from './Layout/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
});
export default rootReducer;
