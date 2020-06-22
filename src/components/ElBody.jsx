import React from 'react'
import styled from 'styled-components'

const useHeader = true
const useFooter = true
const WrapBody = styled.div`
  overflow-y: scroll;
  /* height: calc(100vh - (0.5rem + 0.5rem + 1rem) - (0.3rem + 0.3rem + 1rem + (0.1rem)) - (1rem + 1rem)); */
  height: calc(100vh${useHeader ? ` - (0.3rem + 0.3rem + 1rem)` : ''}${useFooter ? ` - (1rem + 1rem)` : ''});
`

const Body = (props) => (
  <WrapBody>
    {/* 일단 새하얀거만 장점인 Body */}
    { props.children }
  </WrapBody>
)
export default Body
