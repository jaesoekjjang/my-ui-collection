import React, { memo, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ProgressBar from './ProgressBar';

interface ToastProps {
  id: string;
  children: string | React.ReactNode;
  removeToast: (id: string) => void;
}

const AUTO_CLOSE = 5000;
const ANIMATION_DURATION = 500;

const ToastItem: React.FC<ToastProps> = (props) => {
  const { id, removeToast, children } = props;
  const [toClose, setToClose] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      removeToast(id);
    }, AUTO_CLOSE + 500);
    const animationTimer = setTimeout(() => {
      setToClose(true);
    }, AUTO_CLOSE);

    return () => {
      clearTimeout(removeTimer);
      clearTimeout(animationTimer);
    };
  }, [id, removeToast]);

  const handleClick = () => {
    setToClose(true);
    setTimeout(() => {
      removeToast(id);
    }, ANIMATION_DURATION);
  };

  return (
    <ToastWrapper>
      <Toast id={id} ref={ref} onClick={handleClick} toClose={toClose}>
        {children}
        <ProgressBar autoClose={AUTO_CLOSE} />
      </Toast>
    </ToastWrapper>
  );
};

const slideIn = keyframes`
  from{
    transform: translateX(120%);
  }
  to{
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(120%);
  }
`;

const ToastWrapper = styled.div`
  box-sizing: border-box;
  width: 240px;
  height: 58px;
  &:hover {
    transform: scale(1.03);
  }
`;

const Toast = styled.div<{ toClose: boolean }>`
  padding: 0 16px;
  position: relative;
  line-height: 58px;
  background: #fabb4d;
  color: #5f2700;
  border-radius: 2px;
  cursor: pointer;
  animation: ${`${ANIMATION_DURATION / 1000}s`} ease 0s
    ${(props) => (props.toClose ? slideOut : slideIn)};
  animation-fill-mode: forwards;
`;

export default memo(ToastItem);
