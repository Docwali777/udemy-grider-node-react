import 'materialize-css/dist/css/materialize.min.css'

import React, {Component} from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'

import reducers from './redux-reducer/index'

const store = createStore(reducers, {}, applyMiddleware(thunk))

render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('wali'))
