import React from 'react';
import styled from 'styled-components';
import AccordianItem from './AccordianItem';

const titles = ['Accordian One', 'Accordian Two', 'Accordian Three', 'Accordian Four'];

const Accordian = () => {
  return (
    <Accordians>
      {titles.map((title) => (
        <AccordianItem key={title} title={title} />
      ))}
    </Accordians>
  );
};

const Accordians = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Accordian;
