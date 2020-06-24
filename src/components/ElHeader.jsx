import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const getWrapHeader = (...arg) => styled.header`
  background-color: #333;
  /* height: ${'1rem'}; */
  padding: 0.5rem;
  color: #eee;
  ${arg}
`
const Header = connect(state => ({ ...state.ui.header }))(({ height = '1rem' }) => {
  // state 변경 시 반응하도록 처리
  const WrapHeader = getWrapHeader(`height: ${height}`)
  return (
    <WrapHeader>
      {`하는일은 없지만 의욕이 충만한 Header::Height:${height}`}
    </WrapHeader>
  )
})
export default Header
