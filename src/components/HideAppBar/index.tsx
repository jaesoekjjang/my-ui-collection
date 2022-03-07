import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const height = 64;

const HideAppBar = () => {
  const appBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('wheel', handleWheel);
    // @ts-ignore
    return () => window.removeEventListener('wheel', handleWheel);
  });

  const handleWheel: React.WheelEventHandler<HTMLElement> = (e) => {
    if (appBarRef.current) {
      if (e.deltaY > 0) {
        appBarRef.current.style.top = `-${height}px`;
      } else {
        appBarRef.current.style.top = '0px';
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '250vh' }}>
      <AppBar onWheel={handleWheel} height={height} ref={appBarRef}>
        <div>
          <Title>AppBar</Title>
        </div>
        <Menu />
      </AppBar>
      <Content height={height}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit deserunt,
          vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla quibusdam libero
          iste ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse,
          beatae nulla quibusdam libero iste ratione quaerat maiores! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa
          expedita officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat
          maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit
          deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla
          quibusdam libero iste ratione quaerat maiores!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa expedita
          officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat maiores! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit deserunt, vero
          eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla quibusdam libero iste
          ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          eum impedit deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae
          nulla quibusdam libero iste ratione quaerat maiores! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa
          expedita officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat
          maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit
          deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla
          quibusdam libero iste ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa expedita
          officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat maiores! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit deserunt, vero
          eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla quibusdam libero iste
          ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          eum impedit deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae
          nulla quibusdam libero iste ratione quaerat maiores!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa expedita
          officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat maiores! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit deserunt, vero
          eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla quibusdam libero iste
          ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          eum impedit deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae
          nulla quibusdam libero iste ratione quaerat maiores! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa
          expedita officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat
          maiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit
          deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla
          quibusdam libero iste ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa expedita
          officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat maiores! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit deserunt, vero
          eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla quibusdam libero iste
          ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          eum impedit deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae
          nulla quibusdam libero iste ratione quaerat maiores!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa expedita
          officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat maiores! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eligendi eum impedit deserunt, vero
          eveniet a ducimus ipsa expedita officia sunt non esse, beatae nulla quibusdam libero iste
          ratione quaerat maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          eum impedit deserunt, vero eveniet a ducimus ipsa expedita officia sunt non esse, beatae
          nulla quibusdam libero iste ratione quaerat maiores! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi eum impedit deserunt, vero eveniet a ducimus ipsa
          expedita officia sunt non esse, beatae nulla quibusdam libero iste ratione quaerat
          maiores!
        </p>
      </Content>
    </div>
  );
};

const AppBar = styled.header<{ height: number }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height}px;
  padding: 0 24px;
  background: #4c6ef5;
  color: white;
  transition: top 0.3s;
`;

const Title = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const Content = styled.article<{ height: number }>`
  padding: ${(props) => `${props.height}px 24px`};
  line-height: 1.5rem;
`;

export default HideAppBar;
