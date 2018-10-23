import { combineReducers } from 'redux'

import user from './reducers/userReducer'

const rootReducers = combineReducers({
  user
})

export default rootReducers
