import React, { useState } from 'react';
import styled from 'styled-components';

const CUBE_SIZE = 150;

const BasicCube = () => {
  const [vector, setVector] = useState([1, 1, 1]);
  const [deg, setDeg] = useState(30);

  const handleClick = () => {
    setVector(
      Array(3)
        .fill(0)
        .map(() => Math.random() * 2 - 1)
    );
    setDeg(Math.random() * 360);
  };

  return (
    <Cube onClick={handleClick} vector={vector} deg={deg}>
      <Front>Front</Front>
      <Left>Left</Left>
      <Right>Right</Right>
      <Top>Top</Top>
      <Bottom>Bottom</Bottom>
      <Back>Back</Back>
    </Cube>
  );
};

const Cube = styled.div<{ vector: number[]; deg: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CUBE_SIZE}px;
  height: ${CUBE_SIZE}px;
  font-size: 2rem;
  transform-style: preserve-3d;
  transform: ${({ vector, deg }) =>
    `rotate3d(${vector[0]}, ${vector[1]}, ${vector[2]}, ${deg}deg)`};
  transition: transform 1s;
  cursor: pointer;
  user-select: none;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ff9070;
    text-align: center;
    line-height: ${CUBE_SIZE}px;
    border: 1px solid black;
  }
`;

const Front = styled.div`
  transform: translateZ(${CUBE_SIZE / 2}px);
`;
const Left = styled.div`
  right: ${CUBE_SIZE / 2}px;
  transform: rotateY(-90deg);
`;
const Right = styled.div`
  left: ${CUBE_SIZE / 2}px;
  transform: rotateY(90deg);
`;
const Top = styled.div`
  bottom: ${CUBE_SIZE / 2}px;
  transform: rotateX(90deg);
`;
const Bottom = styled.div`
  top: ${CUBE_SIZE / 2}px;
  transform: rotateX(-90deg);
`;
const Back = styled.div`
  transform: translateZ(-${CUBE_SIZE / 2}px);
`;

export default BasicCube;
