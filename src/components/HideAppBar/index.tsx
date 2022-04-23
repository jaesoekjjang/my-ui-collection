import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const height = 64;

const HideAppBar = () => {
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (deltaY !== e.deltaY) {
        setDeltaY(e.deltaY);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div style={{ position: 'relative', height: '250vh' }}>
      <AppBar deltaY={deltaY}>
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

const AppBar = styled.header<{ deltaY: number }>`
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
  transform: translateY(${(props) => (props.deltaY > 0 ? '-100%' : '0')});
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
