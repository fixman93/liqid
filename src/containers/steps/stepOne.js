import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pagination from '../../components/pagination'

class stepOne extends Component {

  constructor(props) {
    super(props)
    this.state = {
      age: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleStep = this.handleStep.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleStep = (e) => {
    e.preventDefault()
    localStorage.setItem('step-1', JSON.stringify(this.state.age));
    console.log(this.state.age)
    localStorage.getItem('step-1')

  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleStep}>
          <label>How old are you?</label>
          <input type="text" placeholder="Your age" name="age" onChange={this.handleChange} />
          <input type='submit' value='submit' />
        </form>
        <Pagination />
      </div>
    )
  }
}

export default stepOne