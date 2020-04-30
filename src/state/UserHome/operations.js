import {axiosGet, axiosPost} from '../../axiosConfig';

import {getAllPost} from './actions';

export const ViewAllPost = (params) => (dispatch) => {
  axiosGet().then().catch();
};

export const addPostComment = (params) => (dispatch) => {
  axiosPost().then().catch();
};

export const addPostLike = (params) => (dispatch) => {
  axiosPost().then().catch();
};

export const removePostComment = (params) => (dispatch) => {
  axiosPost().then().catch();
};

export const removePostLike = (params) => (dispatch) => {
  axiosPost().then().catch();
};
