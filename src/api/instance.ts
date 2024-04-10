import axios from 'axios';
import { toast } from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_LINKBRARY_BaseURL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')?.replace(/"/gi, '');

    if (!accessToken) return config;
    config.headers.Authorization = accessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const accessToken = response.data.data.accessToken;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
