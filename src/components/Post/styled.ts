import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 750px;
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  padding: 20px;
  display: flex;
`;

export const Title = styled.h3`
  font-size: 26px;
`;

export const Author = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  line-height: 23px;
  width: fit-content;
  color: #006ed5;
`;

export const Photo = styled.img`
  width: 126px;
  height: 82px;
  background: #d9d9d9;
  border-radius: 4px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`;
