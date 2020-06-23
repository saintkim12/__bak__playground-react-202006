import { combineReducers } from 'redux'
const reducer = (state = {}, action) => {
  console.log('reducer')
  switch (action.type) {
    case 'CHANGE_HEADER':
      console.log('CHANGE_HEADER', action)
      return ({ ...state, ...action })
    default:
      console.log('default', action)
      return state
  }
}

export default combineReducers({
  ui: reducer
})
