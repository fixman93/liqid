import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './header.scss'

class Header extends Component {

  static propTypes = {
    activeId: PropTypes.number.isRequired
  }

  static defaultProps = {
    activeId: 1
  }
  render() {
    const { activeId } = this.props
    return (
      <div className='headerNav'>
        <ul className={activeId === 4 ? 'active' : ''}>
          <li className={activeId === 1 ? 'active' : ''}></li>
          <li className={activeId === 2 ? 'active' : ''}></li>
          <li className={activeId === 3 ? 'active' : ''}></li>
        </ul>
      </div>
    )
  }
}

export default Header