import axios from 'axios';
import { LOCALSTORAGE_TOKEN_KEY } from '../constants/authConst';

const deskTop= typeof window !== 'undefined'

axios.interceptors.request.use(
  (config) => {
    const isHttp = !!config?.url?.startsWith('http');
    const token = deskTop ? localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) : null;
    const authentication =
      token && !isHttp ? { Authorization: `Bearer ${token}` } : {};
    return {
      ...config,
      baseURL: "http://localhost:80",
      headers: {
        ...authentication,
        ...config.headers,
      },
    };
  },
  (error) => Promise.reject(error)
);