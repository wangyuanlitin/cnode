import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import trunk from 'redux-thunk';
import Routes from './routes'
import reducer from './reducers'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(trunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('container')
);
