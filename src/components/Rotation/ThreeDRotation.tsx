import React from 'react'
import styled from 'styled-components'

const ThreeDRotation = () => {
  return (
    <Cube>
      <Face className='one'>1</Face>
      <Face className='two'>2</Face>
      <Face className='three'>3</Face>
      <Face className='four'>4</Face>
      <Face className='five'>5</Face>
      <Face className='six'>6</Face>
    </Cube>
  )
}

const Cube = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
`

const Face = styled.div`
  width: 100%;
  height: 100%;
  background: gray; 
`


export default ThreeDRotation;