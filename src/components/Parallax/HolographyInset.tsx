import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const width = 300;
const height = 400;

const HolographyInset = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      if (ref.current && imgRef.current) {
        const originX = window.innerWidth / 2;
        const originY = window.innerHeight / 2;

        const distanceX = originX - e.clientX;
        const distanceY = originY - e.clientY;

        const xDeg = distanceX / 20;
        const yDeg = distanceY / 20;
        ref.current.style.transform = `rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`;
        imgRef.current.style.transform = `translateX(${xDeg * 1.01}px) translateY(${
          yDeg * 1.01
        }px)`;
      }
    });
  });

  return (
    <Container ref={ref}>
      <Title>
        <p>날개 크리보</p>
      </Title>
      <Img ref={imgRef} src="./kuribo.png" alt="kuribo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  background: #f0c2d5;
  background-position: center;
  background-size: 600px 800px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 20px -4px black;
`;

const Title = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  z-index: 1;
`;

const Img = styled.img`
  position: absolute;
  top: 35%;
  left: 0;
  width: 100%;
`;

export default HolographyInset;
