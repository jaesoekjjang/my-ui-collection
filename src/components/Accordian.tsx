import React, { useState } from 'react'
import Dropdown from './Dropdown';
import styled from 'styled-components'

interface AccordianItemProps {
  title: string;
}

const AccordianItem:React.VFC<AccordianItemProps> = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(p=>!p);
  }

  return (
    <Wrapper>
      <Title isOpen={isOpen} onClick={handleClick}>
        <div>{title}</div>
        <Dropdown isOpen={isOpen}/>
      </Title>
      <Contents isOpen={isOpen}>
        <p style={{margin: 0}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ipsa! Voluptatibus facilis commodi doloremque laudantium aspernatur nemo distinctio officiis, hic similique sit, nisi culpa. Neque eaque nemo mollitia nisi cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ipsa! Voluptatibus facilis commodi doloremque laudantium aspernatur nemo distinctio officiis, hic similique sit, nisi culpa. Neque eaque nemo mollitia nisi cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ipsa! Voluptatibus facilis commodi doloremque laudantium aspernatur nemo distinctio officiis, hic similique sit, nisi culpa. Neque eaque nemo mollitia nisi cum!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ipsa! Voluptatibus facilis commodi doloremque laudantium aspernatur nemo distinctio officiis, hic similique sit, nisi culpa. Neque eaque nemo mollitia nisi cum!
        </p>
      </Contents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 800px;
  `
  
  const Title = styled.div<{isOpen: boolean}>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border:  ${props=>props.isOpen ? '2px solid #4181ED' : '1px solid gray'};
  cursor: pointer;
`

const Contents = styled.div<{isOpen: boolean}>`
  box-sizing: border-box;
  height: ${props=>props.isOpen ? '200px' : 0};
  padding: ${props=>props.isOpen ? '8px' : 0};
  border: ${props=>props.isOpen ? '1px' : '0px'} solid gray;
  border-top: ${props=>props.isOpen && 0};
  overflow-y: ${props=>props.isOpen ? 'scroll' : 'hidden'};
  transition: all 0.6s;
`

const titles = ['Accordian One', 'Accordian Two', 'Accordian Three', 'Accordian Four']

const Accordian = () =>{
  return (
    <Accordians>
      {titles.map((title)=><AccordianItem key={title} title={title}/>)}
    </Accordians>
  )
}

const Accordians = styled.div`
  margin: 0; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export default Accordian