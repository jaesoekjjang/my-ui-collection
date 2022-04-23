import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

type Direction = 'up' | 'down';

const height = 64;

const HideAppBar = () => {
  const [direction, setDirection] = useState<Direction>('up');

  const lastPos = useRef(0);
  const deltaY = useRef(-1);

  useEffect(() => {
    const handleWheel = () => {
      const crntPos = window.scrollY;
      if (deltaY.current > 0 && crntPos < lastPos.current) {
        deltaY.current = -1;
        setDirection('up');
      }

      if (deltaY.current < 0 && crntPos > lastPos.current) {
        deltaY.current = 1;
        setDirection('down');
      }

      lastPos.current = crntPos;
    };

    window.addEventListener('scroll', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div style={{ position: 'relative', height: '250vh' }}>
      <AppBar direction={direction}>
        <Title>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Home
          </a>
        </Title>
        <Menu />
      </AppBar>
      <Content>
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

const AppBar = styled.header<{ direction: Direction }>`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${height}px;
  padding: 0 24px;
  box-sizing: border-box;
  background: #4c6ef5;
  color: white;
  transition: 0.3s;
  transform: translateY(${(props) => (props.direction === 'up' ? '0' : '-100%')});
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Content = styled.article`
  padding: ${height}px 24px;
  line-height: 1.5rem;
`;

export default HideAppBar;
