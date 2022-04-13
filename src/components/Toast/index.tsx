import React, { useState, useCallback } from 'react';
import ToastItem from './ToastItem';
import styled from 'styled-components';

type ToastItemInfo = {
  content: string | React.ReactNode;
  id: string;
};

const ToastContainer = () => {
  const [toastItems, setToastItems] = useState<ToastItemInfo[]>([]);

  const handleClick = () => {
    setToastItems((toastItems) => [
      {
        content: 'Toasted !',
        id: String(Math.random()).substring(2, 8),
      },
      ...toastItems,
    ]);
  };

  const removeToast = useCallback((id: string) => {
    setToastItems((toastItems) => toastItems.filter((toast) => toast.id !== id));
  }, []);

  const hasItems = (toastItems: ToastItemInfo[]) => {
    return toastItems.length > 0;
  };

  const mapItems = (toastItems: ToastItemInfo[]) => {
    return toastItems.map((toast) => (
      <ToastItem key={toast.id} id={toast.id} removeToast={removeToast}>
        {toast.content}
      </ToastItem>
    ));
  };

  return (
    <div>
      <Button onClick={handleClick}>Toast 🍞</Button>
      {hasItems(toastItems) && <Container>{mapItems(toastItems)}</Container>}
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
