import React, { useState, useCallback } from 'react';
import ToastItem from './Toast';
import styled from 'styled-components';

type ToastItemInfo = {
  content: string | React.ReactNode;
  id: number;
};

const ToastContainer = () => {
  const [toastItems, setToastItems] = useState<ToastItemInfo[]>([{ content: 'Toasted !', id: 0 }]);

  const handleClick = () => {
    setToastItems((toastItems) => [
      ...toastItems,
      {
        content: 'Toasted !',
        id: toastItems.length > 0 ? toastItems[toastItems.length - 1].id + 1 : 0,
      },
    ]);
  };

  const removeToast = useCallback((id: number) => {
    setToastItems((toastItems) => toastItems.filter((toast) => toast.id !== id));
  }, []);

  const hasItems = (toastItems: ToastItemInfo[]) => {
    return toastItems.length > 0;
  };

  const mapItems = (toastItems: ToastItemInfo[]) => {
    return (
      hasItems(toastItems) &&
      toastItems.map((toast) => (
        <ToastItem key={toast.id} id={toast.id} removeToast={removeToast}>
          {toast.content}
        </ToastItem>
      ))
    );
  };

  return (
    <div>
      <Button onClick={handleClick}>Toast 🍞</Button>
      {<Container>{mapItems(toastItems)}</Container>}
    </div>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 0;
  right: 0;
  margin: 16px;

  .show {
    transform: translateX(0);
  }

  .hide {
    transform: translateX(120%);
  }
`;

const Button = styled.button`
  width: 132px;
  height: 40px;
  background: #434253;
  color: white;
  font-size: 1rem;
  border: 2px solid white;
  cursor: pointer;
`;

export default ToastContainer;
