import React from 'react';
import styled, { css } from 'styled-components'

type ThemeName = 'primary' | 'secondary' | 'warning'

type Theme = typeof themes[ThemeName]

interface ButtonProps {
  theme?: ThemeName;
  label?: string;
  size?: 'sm' | 'md' | 'lg'
}

const Button:React.VFC<ButtonProps> = ({theme='primary', label = 'button', size='md'}) => {
  let scale = 1;
  if(size === 'sm') scale = 0.75
  if(size === 'lg') scale = 1.25

  const height =  `${2*scale}rem`
  const fontSize = `${0.875*scale}rem`
  const padding = `${0.5*scale} ${1*scale}rem`

  const props = {height, fontSize, padding, theme:themes[theme]}

  return <MyButton {...props}>{label}</MyButton>;
};

const  MyButton = styled.button<{theme: Theme, height: string, fontSize: string, padding: string}>`
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  

  ${props=>
    css`
      height: ${props.height};
      padding: ${props.padding};
      font-size: ${props.fontSize};
      color: ${props.theme.color};
      background: ${props.theme.background};
      &: hover {
        background: ${props.theme.hover.background};
      }
      &: active: {
        background: ${props.theme.active.background};
      }
    `
  }
`

const themes = {
  primary:{
    background:' #20c997',
    color: 'white',
    hover: {
    background: '#38d9a9',
    },
    active: {
    background: '#12b886',
    }
  },
  secondary:{
    background:' #e9ecef',
    color: '#343a40',
    hover: {
    background: '#f1f3f5',
    },
    active: {
    background: '#dee2e6',
    }
  },
  warning:{
    background:' #f59f00',
    color: '#343a40',
    hover: {
    background: '#fcc419',
    },
    active: {
    background: '#e67700',
    }
  },
}


export default Button