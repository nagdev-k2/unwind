import axios from 'axios';
import store from './State/store';
import {baseUrl} from './Utils/baseUrl';

const getHeaders = () => {
  //const { user } = store.getState();
  //return user.AUTH_TOKEN || {};
  return {};
};

const axiosObj = (header = getHeaders()) =>
  axios.create({
    baseURL: baseUrl,
    headers: {AUTH_TOKEN: header},
  });

export const axiosGet = (url, params) =>
  new Promise((resolve, reject) => {
    axiosObj()
      .get(url, {params, headers: {AUTH_TOKEN: getHeaders()}})
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });

export const axiosPost = (url, params, header = getHeaders()) =>
  new Promise((resolve, reject) => {
    axiosObj(header)
      .post(url, params, {headers: {AUTH_TOKEN: header}})
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
