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
