import React from 'react'
import styled from 'styled-components'

const WrapHeader = styled.header`
  width: 100%;
  background-color: #333;
  padding: 0.5rem;
  color: #eee;
`
const Header = () => (
  <WrapHeader>
    하는일은 없지만 의욕이 충만한 Header    
  </WrapHeader>
)
export default Header
