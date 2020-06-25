import { combineReducers } from 'redux'
const reducer = (state = { header: { height: '1rem', paddingY: '0.5rem' }, footer: { height: '1rem', paddingY: '0.3rem' }}, { type, ...param }) => {
  console.log('state', state)
  switch (type) {
    case 'CHANGE_HEADER':
      console.log('CHANGE_HEADER', state, param)
      return ({ ...state, header: { ...state.header, ...param.header } })
    case 'CHANGE_FOOTER':
      console.log('CHANGE_FOOTER', state, param)
      return ({ ...state, footer: { ...state.footer, ...param.footer } })
    default:
      console.log('default', { type, ...param })
      return state
  }
}

export default combineReducers({
  ui: reducer
})
