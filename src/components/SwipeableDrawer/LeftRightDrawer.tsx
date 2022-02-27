import React from 'react';
import styled from 'styled-components';

import type { LeftRight } from './types';

interface LeftRightDrawerProps {
  direction: LeftRight;
  open: boolean;
  children: React.ReactNode;
}

const LeftRightDrawer: React.FC<LeftRightDrawerProps> = ({ direction, open, children }) => {
  return (
    <Wrapper direction={direction} open={open}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ direction: LeftRight; open: boolean }>`
  position: absolute;
  left: ${(props) => {
    if (props.direction === 'left') {
      return props.open ? 0 : '-240px';
    }
  }};
  right: ${(props) => {
    if (props.direction === 'right') {
      return props.open ? 0 : '-240px';
    }
  }};
  top: 0;
  width: 240px;
  height: 100vh;
  background: #444444;
  color: whitesmoke;
  overflow: hidden;
  transition: all 0.4s ease-out;
`;
export default LeftRightDrawer;
