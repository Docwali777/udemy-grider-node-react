import React, {Component} from 'react'
import {render} from 'react-dom'


import {BrowserRouter, Route} from 'react-router-dom'

import '../../STYLES/main.css'

import Header from './Header'
const DashBoard = () => <h2>Dash Board</h2>
const SurveyNew = () => <h2>Survey New</h2>
const Landing = () => <h2>Landing</h2>

const App = () => (
  <div>
    <BrowserRouter>
      <div>
      <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/surveys' component={DashBoard} />
        <Route path='/surveys/new' component={SurveyNew} />
      </div>
    </BrowserRouter>
  </div>

)


export default App
