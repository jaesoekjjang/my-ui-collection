import React, { useState } from 'react';
import Dropdown from './Dropdown';
import styled, { css } from 'styled-components';

interface AccordianItemProps {
  title: string;
}

const AccordianItem: React.VFC<AccordianItemProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((p) => !p);
  };

  return (
    <Wrapper>
      <Title isOpen={isOpen} onClick={handleClick}>
        <div>{title}</div>
        <Dropdown isOpen={isOpen} />
      </Title>
      <Contents isOpen={isOpen}>
        <p style={{ margin: 0 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ipsa! Voluptatibus
          facilis commodi doloremque laudantium aspernatur nemo distinctio officiis, hic similique
          sit, nisi culpa. Neque eaque nemo mollitia nisi cum! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Consequatur, ipsa! Voluptatibus facilis commodi doloremque
          laudantium aspernatur nemo distinctio officiis, hic similique sit, nisi culpa. Neque eaque
          nemo mollitia nisi cum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequatur, ipsa! Voluptatibus facilis commodi doloremque laudantium aspernatur nemo
          distinctio officiis, hic similique sit, nisi culpa. Neque eaque nemo mollitia nisi cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ipsa! Voluptatibus
          facilis commodi doloremque laudantium aspernatur nemo distinctio officiis, hic similique
          sit, nisi culpa. Neque eaque nemo mollitia nisi cum!
        </p>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
`;

const Title = styled.div<{ isOpen: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: ${(props) => (props.isOpen ? '600' : '400')};
  background: #f7f6f3;
  border: ${(props) => (props.isOpen ? '2px solid black' : '1px solid gray')};
  cursor: pointer;
`;

const Contents = styled.div<{ isOpen: boolean }>`
  box-sizing: border-box;
  background: white;
  transition: all 0.6s;

  ${({ isOpen }) =>
    css`
      height: ${isOpen ? '200px' : 0};
      padding: ${isOpen ? '8px' : 0};
      border: ${isOpen ? '1px' : '0px'} solid gray;
      border-top: ${isOpen && 0};
      overflow-y: ${isOpen ? 'scroll' : 'hidden'};
    `}
`;

export default AccordianItem;
