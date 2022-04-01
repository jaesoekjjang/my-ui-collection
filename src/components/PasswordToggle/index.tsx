import React, { useState } from 'react';
import styled from 'styled-components';
import OpenEye from './OpenEye';
import ClosedEye from './ClosedEye';

const PasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleClick = () => {
    setVisible((p) => !p);
  };

  const handleFocus = () => {
    setFocus((p) => !p);
  };

  return (
    <div>
      <Wrapper focus={focus}>
        <Label htmlFor="password" focus={focus}>
          password
        </Label>
        <Input
          type={visible ? 'text' : 'password'}
          name="password"
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          {visible ? <ClosedEye /> : <OpenEye />}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div<{ focus: boolean }>`
  position: relative;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  color: gray;
  border: 1px solid ${(props) => (props.focus ? '3F7EE8' : 'gray')};
  border-radius: 5px;
  box-shadow: ${(props) => props.focus && '0px 0px 6px 2px #3F7EE8'};
`;

const Label = styled.label<{ focus: boolean }>`
  position: absolute;
  bottom calc(100% + 8px);
  left: 0;
  font-size: 18px;
  color: ${(props) => props.focus && '#3F7EE8'}
`;

const Input = styled.input`
  padding: 0;
  margin: 0;
  width: 400px;
  height: 50px;
  border: none;
  color: white;
  background: transparent;

  &: focus {
    outline: none;
  }
`;

export default PasswordToggle;
