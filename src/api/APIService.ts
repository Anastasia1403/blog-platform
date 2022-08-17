import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const APIService = {
  get: (url: string) => instance.get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.error('error', err);
    }),
  post: <T>(url: string, data: T) => instance.post(url, data)
    .then((res) => res.data)
    .catch((err) => {
      console.error('error', err);
    }),
};
