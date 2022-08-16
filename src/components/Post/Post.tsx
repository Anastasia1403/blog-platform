import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Wrapper, Title, Author, Photo, InfoWrapper } from './styled';

interface ISinglePostProps {
  title: string;
  authorName: string;
}
function Post(props: ISinglePostProps) {
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
}

export default Post;
