import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Link to='steps'>Start your first quiz</Link>
      </div>
    )
  }
}

export default Home