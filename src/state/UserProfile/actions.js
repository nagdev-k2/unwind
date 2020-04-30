import {GET_PROFILE_DETAILS} from '../types';

export const getProfileDetailsAction = (data) => ({
  type: GET_PROFILE_DETAILS,
  data,
});
