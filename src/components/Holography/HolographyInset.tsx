import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Title } from './styles';

const WIDTH = 300;
const HEIGHT = 400;

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
  }, []);

  return (
    <InsetContainer width={WIDTH} height={HEIGHT} ref={containerRef}>
      <InsetTitle>
        <p>날개 크리보</p>
      </InsetTitle>
      <Img ref={imgRef} width={WIDTH} src="./kuribo.png" alt="kuribo" />
    </InsetContainer>
  );
};

const InsetContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0c2d5;
  overflow: hidden;
`;

const InsetTitle = styled(Title)`
  z-index: 1;
`;

const Img = styled.img`
  position: absolute;
  top: 35%;
  left: 0;
`;

export default HolographyInset;
