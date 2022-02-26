import React, { useState } from 'react';
import styled from 'styled-components';

const LightBulb = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((p) => !p);
  };

  return (
    <Background clicked={clicked}>
      <Wrapper clicked={clicked} onClick={handleClick}>
        <Circle clicked={clicked}></Circle>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div<{ clicked: boolean }>`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.clicked
      ? 'radial-gradient(circle at top,#ffd600 0%, #fbb232 15%, #dba23e 30%, black 100%)'
      : 'black'};
`;

const Wrapper = styled.div<{ clicked: boolean }>`
  position: relative;
  width: 50px;
  height: 40px;
  background: ${(props) => (props.clicked ? '#F1F1F1' : 'gray')};
  cursor: pointer;

  &::before {
    position: absolute;
    width: 40px;
    height: 40px;
    right: calc(100% - 20px);
    content: '';
    background: inherit;
    border-radius: 100%;
  }

  &::after {
    position: absolute;
    width: 40px;
    height: 40px;
    left: calc(100% - 20px);
    content: '';
    background: inherit;
    border-radius: 100%;
  }

  &:hover {
    span {
      box-shadow: 0 0 4px 16px rgba(255, 255, 255, 0.15);
    }
  }
`;
const Circle = styled.span<{ clicked: boolean }>`
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  top: 50%;
  left: ${(props) => (props.clicked ? '100%' : 0)};
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${(props) => (props.clicked ? '#FCDD09' : '#E0E0E0')};
  transition: left 0.5s;
`;

export default LightBulb;
