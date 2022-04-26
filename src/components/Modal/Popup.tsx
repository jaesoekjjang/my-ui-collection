import React, { useRef, useState } from 'react';
import ReactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';

interface PopupProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.VFC<PopupProps> = (props) => {
  const { setIsOpen } = props;
  const [animationStart, setAnimationStart] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpen(false);
    ref.current?.removeEventListener('animationend', closeModal);
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    ref.current?.addEventListener('animationend', closeModal);
    setAnimationStart(false);
  };

  return ReactDom.createPortal(
    <Background animationStart={animationStart} onClick={handleClick}>
      <Container animationStart={animationStart} ref={ref}>
        <Title>
          <h4>Modal Title</h4>
          <span onClick={handleClick}>&#10060;</span>
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
      </Container>
    </Background>,
    document.getElementById('portal') as Element
  );
};

const Background = styled.div<{ animationStart: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.animationStart ? 1 : 0)};
  transition: all 0.4s;
`;

const Container = styled.div<{ animationStart: boolean }>`
  position: fixed;
  width: 500px;
  height: 250px;
  background: white;
  border-radius: 6px;
  animation: 0.4s ease-in-out 0s 1 normal
    ${(props) => (props.animationStart ? openKeyFrame : closeKeyFrame)};

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
