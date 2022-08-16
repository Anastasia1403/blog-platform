import { Comment } from '../types/comments';
import { Post } from '../types/posts';
import { instance } from './url';

export const APIService = {
  get: (url: string) => instance.get(url)
    .then((res) => res.data)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('error', err);
    }),
  post: (url: string, data: Post | Comment) => instance.post(url, data)
    .then((res) => res.data)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('error', err);
    }),
};
