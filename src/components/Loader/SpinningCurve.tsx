import React from 'react';
import styled from 'styled-components';

const SpinningCurve = () => {
  return (
    <div>
      <SVG style={{ width: '250px', height: '250px' }}>
        <Circle cx="125" cy="125" r="100"></Circle>
      </SVG>
    </div>
  );
};

const SVG = styled.svg`
  animation: rotate 3s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 13;
  stroke: #228be6;
  stroke-dasharray: ${2 * Math.PI * 100};
  animation: spring 3s linear infinite;

  @keyframes spring {
    0% {
      stroke-dashoffset: ${2 * Math.PI * 100};
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.001% {
      stroke-dashoffset: ${2 * Math.PI * 100 * 2};
    }
    100% {
      stroke-dashoffset: ${2 * Math.PI * 100};
    }
  }
`;
export default SpinningCurve;
