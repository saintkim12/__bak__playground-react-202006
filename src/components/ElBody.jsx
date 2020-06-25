import React from 'react'
import { any } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const getWrapBody = ({ header: { height: headerHeight = `1rem`, paddingY: headerPadding = `0.5rem` }, footer: { height: footerHeight = `1rem`, paddingY: footerPadding = `0.3rem` } }) => styled.div`
  overflow-y: scroll;
  height: calc(100vh - (${headerHeight} + ${headerPadding} * 2) - (${footerHeight} + ${footerPadding} * 2));
`

const Body = connect(state => ({ ...state.ui }))(({ header, footer, children }) => {
  console.log(header, footer, children)
  const WrapBody = getWrapBody({ header, footer })
  return (
    <WrapBody>
      {/* 일단 새하얀거만 장점인 Body */}
      { children }
    </WrapBody>
  )
})

Body.propTypes = {
  children: any
}
export default Body
