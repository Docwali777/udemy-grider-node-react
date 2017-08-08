import React, {Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux-actions/index'

import { Link } from 'react-router-dom'

import Payments from './payments'


class Header extends Component {
renderContent = () =>{
  switch(this.props.auth){
    case null:
      return "Still deciding";
      break;
    case false:
      return (<a href="/auth/google">Login With Google</a>)

    default: return(

      <div>  <li><Payments /></li>
      <li>Credits {this.props.auth.credits}</li>
      <li>  <a href="/api/logout">Logout</a> </li>
    </div>  )

  }
}
  render() {
    console.log(this.props.auth);
    return (

      <nav>

        <div className="">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
          <ul className="">


              {this.renderContent()}


            <li>
              {this.props.auth ? <a href="/auth/google">Login With Google</a> : <a href="/api/logout">Logout</a>   }
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
