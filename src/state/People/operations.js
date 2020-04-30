import {axiosGet, axiosPost} from '../../axiosConfig';

import {setAllPeople} from './actions';

export const getAllPeople = (params) => (dispatch) => {
  axiosGet().then().catch();
};
