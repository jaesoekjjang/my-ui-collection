import React, { useState } from 'react';
import styled from 'styled-components';

const cubeSize = 150;

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
  width: ${cubeSize}px;
  height: ${cubeSize}px;
  font-size: 2rem;
  transform-style: preserve-3d;
  transform: ${(props) =>
    `rotate3d(${props.vector[0]}, ${props.vector[1]}, ${props.vector[2]}, ${props.deg}deg)`};
  transition: transform 1s;
  cursor: pointer;
  user-select: none;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ff9070;
    text-align: center;
    line-height: ${cubeSize}px;
    border: 1px solid black;
  }
`;

const Front = styled.div`
  transform: translateZ(${cubeSize / 2}px);
`;
const Left = styled.div`
  right: ${cubeSize / 2}px;
  transform: rotateY(-90deg);
`;
const Right = styled.div`
  left: ${cubeSize / 2}px;
  transform: rotateY(90deg);
`;
const Top = styled.div`
  bottom: ${cubeSize / 2}px;
  transform: rotateX(90deg);
`;
const Bottom = styled.div`
  top: ${cubeSize / 2}px;
  transform: rotateX(-90deg);
`;
const Back = styled.div`
  transform: translateZ(-${cubeSize / 2}px);
`;

export default BasicCube;
