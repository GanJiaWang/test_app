import {apiCaller} from './index';

export const requestGetProduct = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await apiCaller.get('/product');
      return resolve(res);
    } catch (e) {
      return reject();
    }
  });

export const getCart = id =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await apiCaller.get(`/cart/${id}`);
      return resolve(res);
    } catch (e) {
      return reject(e);
    }
  });

export const createCarts = formValues =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await apiCaller.post('/cart/create', formValues);
      const {data} = res;
      return resolve(data);
    } catch (e) {
      return reject(e);
    }
  });

export const updateCarts = ({id, formValues}) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await apiCaller.put(`/cart/${id}`, formValues);
      const {data} = res;
      return resolve(data);
    } catch (e) {
      return reject(e);
    }
  });
