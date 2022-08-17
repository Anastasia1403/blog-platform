export const api = {
  posts: (id?: number): string => `/posts/${id ?? ''}`,
  users: (id?: string): string => `/users/${id ?? ''}`,
  comments: (id?: number): string => `/comments/${id ?? ''}`,
  postComments: (postId: string): string => `/posts/${postId}/comments`,
};
