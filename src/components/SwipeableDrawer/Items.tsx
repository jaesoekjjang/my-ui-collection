import React, { memo } from 'react';
import styled from 'styled-components';
import Hamburger from '../Icons/Hamburger';

interface ItemsProps {
  setIsOpen: () => void;
}

const items = ['받은 편지함', '임시 보관함', '보낸 편지함', '기타'];

const Items: React.VFC<ItemsProps> = ({ setIsOpen }) => {
  return (
    <>
      <div style={{ padding: '8px 16px' }}>
        <span style={{ display: 'inline-block', cursor: 'pointer' }} onClick={() => setIsOpen()}>
          <Hamburger />
        </span>
      </div>
      <Hr />
      <Li>
        {items.map((item) => (
          <Ul key={item}>
            <div>{item}</div>
          </Ul>
        ))}
      </Li>
    </>
  );
};

const Li = styled.li`
  list-style: none;
`;

const Ul = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 16px 16px;
  height: 52px;
  cursor: pointer;

  &:hover {
    background: #7e7e7e;
  }
`;

const Hr = styled.hr`
  margin: 0;
`;

export default memo(Items);
