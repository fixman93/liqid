import React, { Component } from 'react'

import './pagination.scss'

class Pagination extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }
  prevPage = () => {
    if (this.state.page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1
      }))
      localStorage.setItem('page', JSON.stringify(this.state.page));
      console.log('minus jedan', this.state.page)
    }
  }

  nextPage = () => {
    if (this.state.page < 4) {
      this.setState(prevState => ({
        page: prevState.page + 1
      }))
      localStorage.setItem('page', JSON.stringify(this.state.page));
      console.log('plus jedan', this.state.page)
    }
  }

  render() {
    console.log('ukupno', this.state.page)
    return (
      <div className='btnNav'>
        <button onClick={this.prevPage}>Prev</button>
        <button onClick={this.nextPage}>Next</button>
      </div>
    )
  }
}

export default Pagination