import React, { Component } from 'react'
import { render } from 'react-dom'

import '../STYLES/main.css'

class App extends Component{
  render(){
    return(
      <div>
        <h1>Node and React Full Stack</h1>
        <a href='/auth/google'>Sign Up with Google</a>
      </div>
    )
  }
}


render(<App />, document.getElementById('wali'))
