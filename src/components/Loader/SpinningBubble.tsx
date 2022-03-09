import React from 'react';
import styled from 'styled-components';

const SpinningBubble = () => {
  return (
    <Spinner>
      <Bubble style={{ ['--index' as any]: 1 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 2 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 3 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 4 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 5 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 6 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 7 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 8 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 9 }}></Bubble>
      <Bubble style={{ ['--index' as any]: 10 }}></Bubble>
    </Spinner>
  );
};

const Spinner = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const Bubble = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(calc(36deg * var(--index)));

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 25px;
    height: 25px;
    background: red;
    border-radius: 50%;
    animation-name: spin;
    animation-delay: calc(0.1s * var(--index));
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes spin {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;

export default SpinningBubble;
