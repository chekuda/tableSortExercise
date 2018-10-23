import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'

import HomeContainer from './Containers/HomeContainer'
import rootReducers from './redux/rootReducers'

const initialState = {
  user: {
    currentView: []
  }
}

const configureStore = initialState => {
  return createStore(
    rootReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

render(
  <Provider store={configureStore(initialState)}>
    <HomeContainer />
  </Provider>
, document.getElementById('root'))
