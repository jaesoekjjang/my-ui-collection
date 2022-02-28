import React from 'react';
import styled from 'styled-components';

import type { TopBottom } from './types';

interface TopBottomDrawerProps {
  direction: TopBottom;
  open: boolean;
  children: React.ReactNode;
}

const TopBottomDrawer: React.FC<TopBottomDrawerProps> = ({ direction, open, children }) => {
  return (
    <Wrapper direction={direction} open={open}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ direction: TopBottom; open: boolean }>`
  position: absolute;
  left: 0;
  top: ${(props) => props.direction === 'top' && 0};
  bottom: ${(props) => props.direction === 'bottom' && 0};
  width: 100vw;
  max-height: ${(props) => (props.open ? '60vh' : 0)};
  background: #444444;
  color: whitesmoke;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
`;
export default TopBottomDrawer;
