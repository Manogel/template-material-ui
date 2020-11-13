import axios from 'axios';

const development = 'http://localhost:3333';

const api = axios.create({
  baseURL: development,
});

export function setResponseInterceptor(onRejected?: (error: any) => any) {
  api.interceptors.response.use((response) => {
    return response;
  }, onRejected);
}

export function setToken(token: string) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default api;
