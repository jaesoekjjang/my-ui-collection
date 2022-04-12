import React from 'react';
import styled from 'styled-components';

const ClipText = () => {
  return <Text>ClipText</Text>;
};

const Text = styled.h1`
  background-image: url('./negx.jpg');
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 6rem;
  color: transparent;
  background-position-x: 100%;
  animation: 5s alternate 0s linear infinite slide;

  @keyframes slide {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 100%;
    }
  }
`;

export default ClipText;
