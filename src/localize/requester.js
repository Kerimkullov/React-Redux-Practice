import axios from 'axios';

import { BASE_URL, LOCAL_STORAGE_KEYS } from './constants';

export const requester = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
requester.interceptors.request.use(config => {
  config.headers.common['Authorization'] = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

  if (config.data && config.data.noAuth) {
    delete config.data.noAuth;
    delete config.headers.common['Authorization'];
  }

  if (config.data && config.data.multi) {
    config.headers.common['Content-Type'] = 'multipart/form-data';
    config.headers.common['Accept'] = 'multipart/form-data';
  }

  return config;
});
