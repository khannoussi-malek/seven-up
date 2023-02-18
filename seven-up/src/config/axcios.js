import Axios from 'axios';
import { LOCALSTORAGE_TOKEN_KEY } from '../constants/authConst';

const deskTop= typeof window !== 'undefined'

Axios.interceptors.request.use(
  (config) => {
    const isHttp = !!config?.url?.startsWith('http');
    const token = deskTop ? localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) : null;
    const authentication =
      token && !isHttp ? { Authorization: `Bearer ${token}` } : {};
    return {
      baseURL: process.env.BACK_END_URL_BASE || '/api',
      ...config,
      headers: {
        ...authentication,
        ...config.headers,
      },
    };
  },
  (error) => Promise.reject(error)
);