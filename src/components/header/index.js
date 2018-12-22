import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className='headerNav'>
        <ul>
          <li className='active'></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Header