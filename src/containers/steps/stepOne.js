import React, { Component } from 'react'
import Pagination from '../../components/pagination'

class stepOne extends Component {
  render() {
    return (
      <div>
        <form>
          <label>How old are you?</label>
          <input type='text' placeholder='Your age' />
        </form>
        <Pagination />
      </div>
    )
  }
}

export default stepOne