import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const width = 300;
const height = 400;

const HolographyInset = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animating = false;

    const animation = (e: MouseEvent) => {
      if (animating) return;

      animating = true;
      return requestAnimationFrame(() => {
        if (containerRef.current && imgRef.current) {
          const originX = window.innerWidth / 2;
          const originY = window.innerHeight / 2;

          const distanceX = originX - e.clientX;
          const distanceY = originY - e.clientY;

          const xDeg = distanceX / 20;
          const yDeg = distanceY / 20;

          containerRef.current.style.transform = `rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`;
          imgRef.current.style.transform = `translateX(${xDeg * 1.01}px) translateY(${
            yDeg * 1.01
          }px)`;

          animating = false;
        }
      });
    };

    window.addEventListener('mousemove', animation);
    return () => window.removeEventListener('mousemove', animation);
  });

  return (
    <Container ref={containerRef}>
      <Title>
        <p>날개 크리보</p>
      </Title>
      <Img ref={imgRef} width={width} src="./kuribo.png" alt="kuribo" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  background: #f0c2d5;
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
`;

export default HolographyInset;
