import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Container, Title } from './styles';

const WIDTH = 300;
const HEIGHT = 400;

const HolographyOutset = () => {
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
          containerRef.current.style.backgroundPosition = `${distanceX * 0.2 - WIDTH / 2}px ${
            distanceY * 0.2 - HEIGHT / 2
          }px`;
          imgRef.current.style.transform = `translateX(${-xDeg * 1.2}px) translateY(${
            -yDeg * 1.2
          }px)`;

          animating = false;
        }
      });
    };

    window.addEventListener('mousemove', animation);

    return () => window.removeEventListener('mousemove', animation);
  }, []);

  return (
    <OutsetContainer width={WIDTH} height={HEIGHT} ref={containerRef}>
      <Title>
        <p>푸른 눈의 백룡</p>
      </Title>
      <Img ref={imgRef} width={WIDTH} src="./blue-eyes.png" alt="blue-eyes" />
    </OutsetContainer>
  );
};

const OutsetContainer = styled(Container)`
  background-image: url('./flash-background.jpg');
  background-size: 600px 800px;
  background-position: center;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
`;

const Img = styled.img`
  position: absolute;
  top: 20%;
  left: 4%;
`;
export default HolographyOutset;
