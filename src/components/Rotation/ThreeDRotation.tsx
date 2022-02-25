import React, { useState} from 'react'
import styled from 'styled-components'

const ThreeDRotation = () => {
  const [vector, setVector] = useState([1, 1, 1])
  const [deg, setDeg] = useState(30)

  const handleClick = () =>{
    setVector([Math.random()*2-1, Math.random()*2-1, Math.random()*2-1])
    setDeg(Math.random()*360)
  }

  return (
      <Cube onClick={handleClick} vector={vector} deg={deg}>
        <Front>Front</Front>
        <Left>Left</Left>
        <Right>Right</Right>
        <Top>Top</Top>
        <Bottom>Bottom</Bottom>
        <Back>Back</Back>
      </Cube>
  )
}

const Cube = styled.div<{vector: number[], deg: number}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  font-size: 2rem;
  transform-style: preserve-3d;
  transform: ${props=>`rotate3d(${props.vector[0]}, ${props.vector[1]}, ${props.vector[2]}, ${props.deg}deg)`};
  transition: all 1s;
  cursor: pointer;
  user-select: none;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #FF9070;
    text-align: center;
    line-height: 150px;
    border: 1px solid black;
}
`

const Front = styled.div`
  transform: translateZ(75px);
`
const Left = styled.div`
  right: 75px;
  transform: rotateY(-90deg);
`
const Right = styled.div`
  left: 75px;
  transform: rotateY(90deg);
`
const Top = styled.div`
  bottom: 75px;
  transform: rotateX(90deg);
`
const Bottom = styled.div`
  top: 75px;
  transform: rotateX(-90deg);
`
const Back = styled.div`
  transform: translateZ(-75px);
`


export default ThreeDRotation;