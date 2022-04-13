import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface ProgressBarProps {
  autoClose: number;
}

const ProgressBar: React.VFC<ProgressBarProps> = ({ autoClose }) => {
  const delay = `${autoClose / 1000}s`;
  return <Progress delay={delay} />;
};

const progress = keyframes`
  from{
    transform: scaleX(1);
  }
  to{
    transform: scaleX(0);
  }
`;

const Progress = styled.div<{ delay: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: #5f2700;
  transform-origin: left;
  animation: ${(props) => props.delay} linear ${progress};
  animation-fill-mode: forwards;
`;

export default ProgressBar;
