import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import styled from 'styled-components'
import { ElHeader, ElBody, ElFooter, ElContent } from './components'
import _store from './store'

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`
const store = createStore(_store)
const Element = (
  <Provider store={ store }>
    <Wrap>
      <ElHeader/>
      <ElBody>
        <ElContent>자릿값이 걱정인 Content 1</ElContent>
        <ElContent>사는게 걱정인 Content 2</ElContent>
        <ElContent>걱정없는 Content 3</ElContent>
      </ElBody>
      <ElFooter/>
    </Wrap>
  </Provider>
)
export default Element
