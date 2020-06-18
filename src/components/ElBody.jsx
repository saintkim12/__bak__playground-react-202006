import React from 'react'
import styled from 'styled-components'

const WrapBody = styled.div`
  padding: 1rem 0.5rem;
  overflow-y: auto;
`

const Body = () => (
  <WrapBody>
    일단 새하얀거만 장점인 Body
    <div style={{ height: '2000px' }}></div>
  </WrapBody>
)
export default Body
