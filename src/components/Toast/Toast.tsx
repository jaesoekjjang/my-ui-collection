import React, { memo, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const autoCloseDelay = 3000;

interface ToastProps {
  id: number;
  children: string | React.ReactNode;
  removeToast: (id: number) => void;
}

const ToastItem: React.VFC<ToastProps> = (props) => {
  const { id, removeToast, children } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeToast(id);
    }, autoCloseDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [id, removeToast]);

  return (
    <Toast ref={ref} onClick={() => removeToast(id)}>
      {children}
    </Toast>
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

const Toast = styled.div`
  box-sizing: border-box;
  padding: 0 16px;
  width: 250px;
  height: 58px;
  line-height: 58px;
  background: #fabb4d;
  color: white;
  border-radius: 2px;
  cursor: pointer;
  animation: 0.5s ease 0s ${slideIn};

  &:hover {
    transform: scale(1.05);
  }
`;

export default memo(ToastItem);
