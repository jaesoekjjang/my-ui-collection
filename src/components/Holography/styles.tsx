import styled from 'styled-components';

export const Container = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px -4px black;
`;

export const Title = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;
