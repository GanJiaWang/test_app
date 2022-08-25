/* eslint-disable no-unused-vars */
import axios from 'axios';
import _ from 'lodash';
// import messaging from '@react-native-firebase/messaging';

let LOCAL_URL = 'http://192.168.50.56:5050';

export const BASE_URL = LOCAL_URL;

const API__URL = `${BASE_URL}/api/mobile`; // dev

export const apiCaller = axios.create({
  baseURL: API__URL,
  timeout: 20000,
  withCredentials: true,
});

export const clearAuthHeader = () => {
  apiCaller.defaults.headers.common = {Authorization: null};
};
