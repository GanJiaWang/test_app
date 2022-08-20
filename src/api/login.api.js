import {apiCaller} from './index';

export const requestSignIn = params =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await apiCaller.post('/login', params);
      return resolve(res);
    } catch (e) {
      return reject(e);
    }
  });
