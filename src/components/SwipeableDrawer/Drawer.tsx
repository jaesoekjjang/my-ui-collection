import React from 'react';
import LeftRightDrawer from './LeftRightDrawer';
import TopBottomDrawer from './TopBottomDrawer';
import Items from './Items';

import type { Direction, LeftRight } from './types';

interface DrawerProps {
  direction: Direction;
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.VFC<DrawerProps> = ({ direction, open, setIsOpen }) => {
  if (isLeftRight(direction)) {
    return (
      <LeftRightDrawer direction={direction} open={open}>
        <Items setIsOpen={setIsOpen} />
      </LeftRightDrawer>
    );
  } else {
    return (
      <TopBottomDrawer direction={direction} open={open}>
        <Items setIsOpen={setIsOpen} />
      </TopBottomDrawer>
    );
  }
};

const isLeftRight = (direction: string): direction is LeftRight => {
  return direction === 'left' || direction === 'right';
};

export default Drawer;
