import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Drawer from './Drawer';

const SwipeableDrawer: React.VFC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);

  const handleLeftClick = useCallback(() => setIsLeftOpen((p) => !p), []);
  const handleRightClick = useCallback(() => setIsRightOpen((p) => !p), []);
  const handleTopClick = useCallback(() => setIsTopOpen((p) => !p), []);
  const handleBottomClick = useCallback(() => setIsBottomOpen((p) => !p), []);

  return (
    <DrawerLayout>
      <div>
        <Drawer direction="left" open={isLeftOpen} setIsOpen={handleLeftClick} />
        <Drawer direction="right" open={isRightOpen} setIsOpen={handleRightClick} />
        <Drawer direction="top" open={isTopOpen} setIsOpen={handleTopClick} />
        <Drawer direction="bottom" open={isBottomOpen} setIsOpen={handleBottomClick} />
      </div>
      <Buttons style={{ userSelect: 'none' }}>
        <Button role="button" onClick={handleLeftClick}>
          LEFT
        </Button>
        <Button role="button" onClick={handleRightClick}>
          RIGHT
        </Button>
        <Button role="button" onClick={handleTopClick}>
          TOP
        </Button>
        <Button role="button" onClick={handleBottomClick}>
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
