import React from 'react';
import styled, { keyframes } from 'styled-components';

interface PopupProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.VFC<PopupProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <Wrapper isOpen={isOpen} onClick={handleClick}>
      <Modal isOpen={isOpen}>
        <Title>
          <h4>Modal Title</h4>
          <span onClick={handleClick}>X</span>
        </Title>
        <hr />
        <Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam deserunt?
            Distinctio quisquam ducimus libero assumenda harum quae deserunt fugit quaerat earum
            facilis, hic vitae sit! Debitis deserunt mollitia atque corrupti at. Quis beatae quaerat
            illum, maiores architecto eveniet. Aliquid quae fugiat vel iste, cumque omnis tempora
            repudiandae unde, cum architecto eaque possimus minima laboriosam illum laborum
            accusantium voluptatibus. Hic necessitatibus quas distinctio quos suscipit commodi, et
            in
          </p>
        </Content>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.4s;
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 500px;
  height: 250px;
  background: white;
  border-radius: 6px;
  animation: 0.4s ease-in-out 0s 1 normal
    ${(props) => (props.isOpen ? openKeyFrame : closeKeyFrame)};

  div {
    padding: 8px 16px;
  }

  hr {
    margin: 0;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }

  span {
    cursor: pointer;
  }
`;

const Content = styled.div`
  p {
    margin: 0;
  }
`;

const openKeyFrame = keyframes`
  from {
    transform: translateY(100%) scale(0);
  }
  to {
    transform: translateY(0) scale(1);
  }
`;
const closeKeyFrame = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(100%) scale(0);
  }
`;

export default Popup;
