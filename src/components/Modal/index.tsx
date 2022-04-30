import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import styled from 'styled-components';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    const root = document.querySelector('#root');
    root?.parentNode?.insertBefore(portal, root?.nextSibling as Node);

    return () => {
      root?.parentNode?.removeChild(portal);
    };
  }, []);

  return (
    <div>
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <Button role="button" onClick={() => setIsOpen(true)}>
        Click Me!!
      </Button>
    </div>
  );
};

const Button = styled.div`
  width: 150px;
  height: 40px;
  background: #ff6b6b;
  border-color: #ff6b6b;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background: #f03e3e;
    border-color: #f03e3e;
  }
`;

export default Modal;
