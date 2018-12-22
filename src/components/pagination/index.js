import React, { Component } from 'react'

import './pagination.scss'

class Pagination extends Component {
  render() {
    return (
      <div className='btnNav'>
        <button>Prev</button>
        <button>Next</button>
      </div>
    )
  }
}

export default Pagination