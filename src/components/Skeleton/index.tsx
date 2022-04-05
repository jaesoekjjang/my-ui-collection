import React from 'react';
import styled, { keyframes } from 'styled-components';

const Skelton = () => {
  return (
    <Card style={{ color: 'white' }}>
      <Img></Img>
      <Text>
        <Name></Name>
        <Intro></Intro>
      </Text>
    </Card>
  );
};

const load = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 24px 24px;
  width: 300px;
  height: 120px;
  background: white;
  border: 1px solid white;
  border-radius: 10px;

  & span {
    background-image: linear-gradient(90deg, lightgray 0%, #e6e6e6 50%, lightgray 100%);
    background-size: 200% 200%;
    animation: 1.5s ${load} linear infinite;
  }
`;

const Img = styled.span`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: lightgray;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & div {
    background: lightgray;
    border-radius: 5px;
  }
`;

const Name = styled.span`
  width: 80px;
  height: 16px;
`;

const Intro = styled.span`
  width: 150px;
  height: 12px;
`;

export default Skelton;
