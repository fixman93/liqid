import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../components/pagination'


class Home extends Component {
  render() {
    return (
      <div>

        <Link to='step-1'>step-1</Link>
        <Pagination />
      </div>
    )
  }
}

export default Home