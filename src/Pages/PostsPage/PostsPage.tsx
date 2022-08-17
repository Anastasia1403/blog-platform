import React from 'react';
import Post from '../../components/Post';
import { PostsWrapper } from './styled';

function PostsPage() {
  return (
    <PostsWrapper>
      <Post authorName="Dereck Mitchel" title="New Amazing Title" />
    </PostsWrapper>
  );
}
export default PostsPage;
