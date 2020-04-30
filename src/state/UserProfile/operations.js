import {axiosGet} from '../../axiosConfig';

import {getProfileDetailsAction} from './actions';

export const getProfileDetails = (params) => (dispatch) => {
  axiosGet().then().catch();
};
