import { combineReducers } from 'redux'
const reducer = (state = {}, { type, ...param }) => {
  console.log('state', state)
  switch (type) {
    case 'CHANGE_HEADER':
      console.log('CHANGE_HEADER', state, param)
      return ({ ...state, header: { ...state.header, ...param.header } })
    default:
      console.log('default', { type, ...param })
      return state
  }
}

export default combineReducers({
  ui: reducer
})
