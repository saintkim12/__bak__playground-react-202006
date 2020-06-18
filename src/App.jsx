import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import styled from 'styled-components'
import { ElHeader, ElBody, ElFooter } from './components'
import _store from './store'

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const store = createStore(_store)
const Element = (
  <Provider store={ store }>
    <Wrap>
      <ElHeader/>
      <ElBody/>
      <ElFooter/>
    </Wrap>
  </Provider>
)
export default Element
