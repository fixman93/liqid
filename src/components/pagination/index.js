import React, { Component } from 'react'

import './pagination.scss'

class Pagination extends Component {



  render() {
    return (
      <div className='btnNav'>
        <button onClick={this.prevPage}>Prev</button>
        <button onClick={this.nextPage}>Next</button>
      </div>
    )
  }
}

export default Pagination