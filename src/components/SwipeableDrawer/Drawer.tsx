import React, { memo } from 'react';
import styled from 'styled-components';
import Items from './Items';

import type { Direction, TopBottom, LeftRight } from './types';

const WIDTH = 240;

interface DrawerProps {
  direction: Direction;
  open: boolean;
  setIsOpen: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ direction, open, setIsOpen }) => {
  if (isLeftRight(direction)) {
    return (
      <LeftRightContainer direction={direction} open={open}>
        <Items setIsOpen={setIsOpen} />
      </LeftRightContainer>
    );
  } else {
    return (
      <TopBottomContainer direction={direction} open={open}>
        <Items setIsOpen={setIsOpen} />
      </TopBottomContainer>
    );
  }
};

const isLeftRight = (direction: string): direction is LeftRight => {
  return direction === 'left' || direction === 'right';
};

const Container = styled.div`
  position: absolute;
  background: #444444;
  color: whitesmoke;
  overflow: hidden;
  transition: 0.4s ease-out;
`;

const TopBottomContainer = styled(Container)<{ direction: TopBottom; open: boolean }>`
  left: 0;
  bottom: ${(props) => props.direction === 'top' && '100%'};
  top: ${(props) => props.direction === 'bottom' && '100%'};
  width: 100vw;
  transform: ${({ direction, open }) => {
    if (direction === 'top') {
      return open ? 'translateY(100%)' : 'translateY(0%)';
    } else {
      return open ? 'translateY(-100%)' : 'translateY(0%)';
    }
  }};
`;

const LeftRightContainer = styled(Container)<{ direction: LeftRight; open: boolean }>`
  left: ${(props) => {
    if (props.direction === 'left') {
      return props.open ? 0 : `-${WIDTH}px`;
    }
  }};
  right: ${(props) => {
    if (props.direction === 'right') {
      return props.open ? 0 : `-${WIDTH}px`;
    }
  }};
  top: 0;
  width: ${WIDTH}px;
  height: 100vh;
`;

export default memo(Drawer);
