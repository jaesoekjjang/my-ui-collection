import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chevron from './Chevron';
import Ads from './Ads';

const Carousel = () => {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setInterval(moveToNextSlide, 3000);
  }, []);

  const moveToNextSlide = () => {
    setPageIndex((index) => index + 1);
  };

  const moveToPrevSlide = () => {
    setPageIndex((index) => index - 1);
  };

  return (
    <div style={{ position: 'relative' }}>
      <PrevButton onClick={moveToPrevSlide}>
        <Chevron direction="prev" />
      </PrevButton>
      <NextButton onClick={moveToNextSlide}>
        <Chevron direction="next" />
      </NextButton>
      <Container>
        <Slides pageIndex={pageIndex}>
          {Array(3)
            .fill(0)
            .map(() => (
              <Ads />
            ))}
        </Slides>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  overflow: hidden;
`;

const Slides = styled.div<{ pageIndex: number }>`
  position: absolute;
  display: flex;
  left: ${(props) => ` ${-400 * props.pageIndex}px`};
  transform: ${(props) =>
    `translateX(${-1600 + ((props.pageIndex - (props.pageIndex % 4)) / 4) * 1600}px)`};
  transition: left 0.7s ease-out;
`;

const PrevButton = styled.div`
  position: absolute;
  right: calc(100% - 32px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

const NextButton = styled.div`
  position: absolute;
  left: calc(100% - 32px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

export default Carousel;
