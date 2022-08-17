import React from 'react';
import {
  Wrapper, Title, Author, Photo, InfoWrapper,
} from './styled';

interface ISinglePostProps {
  title: string;
  authorName: string;
}
const Post = (props: ISinglePostProps) => {
  const { title, authorName } = props;
  return (
    <Wrapper>
      <Photo />
      <InfoWrapper>
        <Title>{title}</Title>
        <Author>{authorName}</Author>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Post;
