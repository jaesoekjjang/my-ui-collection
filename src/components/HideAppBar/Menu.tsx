import React from 'react';
import Mail from '../Icons/Mail';
import Bell from '../Icons/Bell';
import User from '../Icons/User';
import styled from 'styled-components';

const Menu = () => {
  return (
    <Ul>
      <li>
        <Mail />
      </li>
      <li>
        <Bell />
      </li>
      <li>
        <User />
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export default Menu;
