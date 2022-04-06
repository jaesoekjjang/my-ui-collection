import React from 'react';
import styled from 'styled-components';

const EnlargeableCard = () => {
  return (
    <Container>
      <Top>
        <Img></Img>
      </Top>
      <Bottom>
        <h2>Hover the Image</h2>
        <p>You can enlarge the image by hovering it.</p>
        <Tags>
          <span>Card</span>
        </Tags>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 320px;
  height: 350px;
  background: white;
  overflow: hidden;
`;

const Top = styled.div`
  height: 55%;
  transition: 0.5s ease;

  &: hover {
    height: 100%;
  }

  &: hover > div {
    transform: scale(1.15);
  }
`;

const Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('./EnlargeableCardImage.jpg');
  background-size: cover;
  background-position: center center;
  transition: 0.5s ease;
`;

const Bottom = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
  padding: 16px 16px;

  h2,
  p {
    margin: 0;
  }
`;

const Tags = styled.div`
  display: flex;

  span {
    height: 24px;
    padding: 0 4px;
    background: #9ea3b5;
    color: white;
    font-weight: 400;
    border: 1px solid #9ea3b5;
    border-radius: 4px;
  }
`;

export default EnlargeableCard;
