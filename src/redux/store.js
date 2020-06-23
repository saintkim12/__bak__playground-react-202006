import { createStore } from 'redux'
import ui from './ui/reducer'
const store = createStore(ui)
export default store
