import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const api = {
  posts: (id?: number) => `/posts/${id ?? ''}`,
  users: (id?: string) => `/users/${id ?? ''}`,
  comments: (id?: number) => `/comments/${id ?? ''}`,
  postComments: (postId: string) => `/posts/${postId}/comments`,
};
