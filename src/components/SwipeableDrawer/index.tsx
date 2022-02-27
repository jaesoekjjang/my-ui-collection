import React, { useState } from 'react';
import styled from 'styled-components';
import Drawer from './Drawer';

const SwipeableDrawer: React.VFC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);

  return (
    <DrawerLayout>
      <div>
        <Drawer direction="left" open={isLeftOpen} setIsOpen={setIsLeftOpen} />
        <Drawer direction="right" open={isRightOpen} setIsOpen={setIsRightOpen} />
        <Drawer direction="top" open={isTopOpen} setIsOpen={setIsTopOpen} />
        <Drawer direction="bottom" open={isBottomOpen} setIsOpen={setIsBottomOpen} />
      </div>
      <Buttons style={{ userSelect: 'none' }}>
        <Button role="button" onClick={() => setIsLeftOpen((p) => !p)}>
          LEFT
        </Button>
        <Button role="button" onClick={() => setIsRightOpen((p) => !p)}>
          RIGHT
        </Button>
        <Button role="button" onClick={() => setIsTopOpen((p) => !p)}>
          TOP
        </Button>
        <Button role="button" onClick={() => setIsBottomOpen((p) => !p)}>
          BOTTOM
        </Button>
      </Buttons>
    </DrawerLayout>
  );
};

const DrawerLayout = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #918383;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.div`
  color: #444444;
  font-size: 2.5rem;
  cursor: pointer;

  &: hover {
    color: whitesmoke;
  }
`;

export default SwipeableDrawer;
