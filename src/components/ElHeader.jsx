import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const getWrapHeader = ({ ...obj }) => styled.header`
  background-color: #333;
  color: #eee;
  ${Object.entries(obj).map(([key, value]) => ({ [key]: value }))}
`
const Header = connect(state => ({ ...state.ui.header }))(({ height, paddingY, paddingX = `0.5rem` }) => {
  // state 변경 시 반응하도록 처리
  const WrapHeader = getWrapHeader({ height, padding: `${paddingY} ${paddingX}` })
  return (
    <WrapHeader>
      {`하는일은 없지만 의욕이 충만한 Header::Height:${height}`}
    </WrapHeader>
  )
})
export default Header
