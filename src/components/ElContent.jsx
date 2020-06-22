import React from 'react'
import styled from 'styled-components'

const useHeader = true
const useFooter = true
const WrapContent = styled.div`
  border: 1px dotted black;
  /* height: calc(100vh - (0.5rem + 0.5rem + 1rem) - (0.3rem + 0.3rem + 1rem) - (1rem + 1rem) - 2px); */
  height: calc(100vh - (0.5rem + 0.5rem + 1rem)${useHeader ? ` - (0.3rem + 0.3rem + 1rem)` : ''}${useFooter ? ` - (1rem + 1rem)` : ''} - 2px);
  padding: 1rem 0.5rem;
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
