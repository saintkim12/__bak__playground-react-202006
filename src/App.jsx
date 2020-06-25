import React from 'react'
import { Provider, connect } from 'react-redux'
import styled from 'styled-components'
import { ElHeader, ElBody, ElFooter, ElContent } from './components'
import store from './redux'
import { changeHeader } from './redux/ui/action'
const WrapBody = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`
const Wrap = connect()(({ dispatch }) => {
  const onClicked = () => {
    dispatch(changeHeader({ height: '300px' }))
    console.log('changed header', store.getState())
  }
  return (
    <WrapBody>
      <ElHeader/>
      <ElBody>
        <ElContent>
          <button onClick={ onClicked }>hahaho</button>
          <p style={{ color: 'red' }}>자릿값이 걱정인 Content 1</p>
        </ElContent>
        <ElContent>사는게 걱정인 Content 2</ElContent>
        <ElContent>걱정없는 Content 3</ElContent>
      </ElBody>
      <ElFooter/>
    </WrapBody>
  )
})
const Element = (
  <Provider store={ store }>
    <Wrap></Wrap>
  </Provider>
)

export default Element
