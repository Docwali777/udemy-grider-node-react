import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import {fetchUser} from '../redux-actions/index'

class Header extends Component{
  componentWillMount(){
      this.user()
  }
  componentDidMount(){
      this.user()
  }
  user = () =>{
    this.props.fetchUser
  }

  render(){
    console.log(this);
    return(

    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">Logo</a>
        <ul className="right">
          <li><a href="/auth/google">Login With Google</a></li>
          <li><a href='/api/logout'>Logout</a></li>
        </ul>
      </div>
    </nav>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchUser
  })
}

export default connect(null, mapDispatchToProps)(Header)
