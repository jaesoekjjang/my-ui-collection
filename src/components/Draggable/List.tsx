import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';

const List = () => {
  return (
    <Container>
      <h3>TODOS</h3>
      <OL onDragOver={handleDragOver}>
        <ListItem title="HTML" />
        <ListItem title="CSS" />
        <ListItem title="Javascript" />
        <ListItem title="React.js" />
        <ListItem title="Storybook" />
      </OL>
    </Container>
  );
};

const handleDragOver: React.DragEventHandler<HTMLOListElement> = (e) => {
  e.preventDefault();
  const dragging = document.querySelector('.dragging')!;
  const closest = getClosest(e.currentTarget, e.clientY)!;
  if (closest !== dragging) {
    e.currentTarget.insertBefore(dragging, closest);
  } else {
    e.currentTarget.appendChild(dragging);
  }
};

const getClosest = (container: HTMLUListElement, y: number) => {
  const elems = container.querySelectorAll('li:not(.dragging)');
  const dragging = container.querySelector('.dragging')!;

  return Array.from(elems).reduce(
    (closest, elem) => {
      const rect = elem.getBoundingClientRect();
      const distance = y - (rect.top + rect.height / 2);
      if (distance < 0 && distance > closest.distance) {
        return { distance, node: elem };
      } else {
        return closest;
      }
    },
    { distance: Number.NEGATIVE_INFINITY, node: dragging }
  ).node;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 300;
  text-align: center;

  h3 {
    font-size: 2rem;
  }
`;

const OL = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 560px;
  list-style: none;
`;

export default List;
