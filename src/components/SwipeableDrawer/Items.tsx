import React from 'react';
import styled from 'styled-components';
import Hamburger from '../Icons/Hamburger';

interface ItemsProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const items = ['받은 편지함', '임시 보관함', '보낸 편지함', '기타'];

const Items: React.VFC<ItemsProps> = ({ setIsOpen }) => {
  const closeDrawer = () => {
    setIsOpen((p) => !p);
  };

  return (
    <Li>
      <div style={{ padding: '8px 16px' }}>
        <span style={{ cursor: 'pointer' }} onClick={closeDrawer}>
          <Hamburger />
        </span>
      </div>
      <Hr />
      {items.map((item) => (
        <Ul key={item}>
          <div>{item}</div>
        </Ul>
      ))}
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 16px 16px;
  cursor: pointer;

  &:hover {
    background: #7e7e7e;
  }
`;

const Hr = styled.hr`
  margin: 0;
`;

export default Items;
