import React from 'react'
import styled from 'styled-components'

const WrapContent = styled.div`
  border: 1px dotted black;
  height: calc(100vh - (0.5rem + 0.5rem + 1rem) - (0.3rem + 0.3rem + 1rem + (0.1rem)) - 2px);
  margin: 1rem 0;
  &:nth-of-type(1) {
    margin: 0 0 1rem 0;
  }
  &:nth-last-child(1) {
    margin: 1rem 0 0 0;
  }
`

const Content = (props) => (
  <WrapContent>
    { props.children }
  </WrapContent>
)
export default Content
