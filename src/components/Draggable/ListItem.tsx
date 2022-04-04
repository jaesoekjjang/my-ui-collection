import React from 'react';
import styled from 'styled-components';
import Hamburger from '../Icons/Hamburger';

interface ListItemProps {
  title: string;
}

const ListItem: React.VFC<ListItemProps> = ({ title }) => {
  return (
    <li draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <El>
        <Hamburger />
        <p>{title}</p>
      </El>
    </li>
  );
};

const handleDragStart: React.DragEventHandler<HTMLLIElement> = (e) => {
  e.currentTarget.style.opacity = '0.6';
  e.currentTarget.classList.add('dragging');
};

const handleDragEnd: React.DragEventHandler<HTMLLIElement> = (e) => {
  e.currentTarget.style.opacity = '1';
  e.currentTarget.classList.remove('dragging');
};

const El = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 8px 16px;
  background: white;
  border: 1px solid lightgray;
  cursor: pointer;
`;
export default ListItem;
