import React, { memo } from 'react';
import Mail from '../Icons/Mail';
import Bell from '../Icons/Bell';
import User from '../Icons/User';
import styled from 'styled-components';

const Buttons = () => {
  return (
    <Container>
      <Button>
        <Mail />
      </Button>
      <Button>
        <Bell />
      </Button>
      <Button>
        <User />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  & svg {
    display: block;
  }
`;

export default memo(Buttons);
