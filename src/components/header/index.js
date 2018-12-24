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
      <div className='container headerNav'>
        <ul className={activeId === 4 ? 'active' : ''}>
          <li className={activeId === 1 ? 'active' : ''}>1</li>
          <li className={activeId === 2 ? 'active' : ''}>2</li>
          <li className={activeId === 3 ? 'active' : ''}>3</li>
        </ul>
      </div>
    )
  }
}

export default Header