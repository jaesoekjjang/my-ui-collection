import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from '../Icons/Hamburger';

const todos = ['Javascript', 'React', 'Nest', 'Three'];

const DraggableList = () => {
  const [todoItems, setTodoItems] = useState(todos);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <Ul>
        {todoItems.map((item) => (
          <Li key={item} draggable="true" onDragOver={handleDragOver}>
            <span>{item}</span>
            <Hamburger />
          </Li>
        ))}
      </Ul>
    </div>
  );
};

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
`;

const Li = styled.li`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 720px;
  height: 32px;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
`;

export default DraggableList;
