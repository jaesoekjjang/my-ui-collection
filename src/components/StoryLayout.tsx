import React from 'react'
import styled from 'styled-components'

interface StoryLayoutProps {
  background?: string;
  children: React.ReactNode;
}

const StoryLayout: React.VFC<StoryLayoutProps> = ({background, children}) => {
  return (
    <Layout style={{background}}>{children}</Layout>
  )
}

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StoryLayout