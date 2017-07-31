import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import * as actions from '../redux-actions'
import {BrowserRouter, Route} from 'react-router-dom'


import Header from './Header'
const DashBoard = () => <h2>Dash Board</h2>
const SurveyNew = () => <h2>Survey New</h2>
import Landing from './Landing'

class App extends Component{
  componentDidMount(){
this.props.fetchUser()
  }


  render(){
    return (
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
  }
}


export default connect(null, actions)(App)
