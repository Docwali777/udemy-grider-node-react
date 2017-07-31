import React, {Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux-actions/index'

import { Link } from 'react-router-dom'



class Header extends Component {
renderContent = () =>{
  switch(this.props.auth){
    case null:
      return "Still deciding";
      break;
    case false:
      return (<a href="/auth/google">Login With Google</a>)

    default: return  (<a href="/api/logout">Logout</a>)
  }
}
  render() {
    return (

      <nav>

        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
          <ul className="right">
            <li>
                {this.props.auth ? <a href='/api/logout'>Logout</a> : <a href='/auth/google'>Login</a>}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser})
}

function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps)(Header)
