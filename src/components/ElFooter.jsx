import React from 'react'
import styled from 'styled-components'

const WrapFooter = styled.footer`
  background-color: #ddd;
  opacity: 0.8;
  height: 1rem;
  padding: 0.3rem;
  font-size: 0.8rem;
  text-align: center;
`
const Footer = () => (
  <WrapFooter>
    아무생각 없이 위치를 고정시키고 본 Footer
  </WrapFooter>
)

export default Footer
