import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const width = 300;
const height = 400;

const HolographyOutset = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    window.addEventListener('mousemove', (e: MouseEvent) => {
      if (ref.current && imgRef.current) {
        const originX = window.innerWidth / 2;
        const originY = window.innerHeight / 2;

        const distanceX = originX - e.clientX;
        const distanceY = originY - e.clientY;

        const xDeg = distanceX / 15;
        const yDeg = distanceY / 20;
        ref.current.style.transform = `rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`;
        ref.current.style.backgroundPosition = `${-distanceX * 0.2 - width / 2}px ${
          distanceY * 0.2 - height / 2
        }px`;
        imgRef.current.style.transform = `translateX(${xDeg * 1.2}px) translateY(${yDeg * 1.2}px)`;
      }
    });
  });

  return (
    <Container ref={ref}>
      <Title>
        <p>푸른 눈의 백룡</p>
      </Title>
      <Img ref={imgRef} src="./blue-eyes.png" alt="blue-eyes" />
    </Container>
  );
};

const Container = styled.div`
  width: ${width}px;
  height: ${height}px;
  background-image: url('./flash-background.jpg');
  background-size: 600px 800px;
  background-position: center;
  border-radius: 4px;
`;

const Title = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;

const Img = styled.img`
  position: relative;
  top: 20%;
  left: 4%;
  width: 100%;
`;
export default HolographyOutset;
