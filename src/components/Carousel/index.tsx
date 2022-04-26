import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chevron from './Chevron';
import Ads from './Ads';

const WIDTH = 400;
const HEIGHT = 200;
const PAGES = 4;

const Carousel = () => {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(moveToNextSlide, 3000);
    return () => clearInterval(interval);
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
              <Ads width={WIDTH} height={HEIGHT} />
            ))}
        </Slides>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  overflow: hidden;
`;

const Slides = styled.div<{ pageIndex: number }>`
  position: absolute;
  display: flex;
  left: ${(props) => ` ${-WIDTH * props.pageIndex}px`};
  transform: ${(props) =>
    `translateX(${
      -WIDTH * PAGES + ((props.pageIndex - (props.pageIndex % PAGES)) / PAGES) * WIDTH * PAGES
    }px)`};
  transition: left 0.7s ease-out;
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
`;

const PrevButton = styled(Button)`
  right: calc(100% - 32px);
`;

const NextButton = styled(Button)`
  left: calc(100% - 32px);
`;

export default Carousel;
