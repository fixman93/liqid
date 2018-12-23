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
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.age)
    // when we want to take form with all fields we can do that with Object.assing()
    //this.props.onSubmit(Object.assign({}, this.state.age));
  }
  render() {
    const { onBack } = this.props
    return (
      <div>
        <h3>Your age:</h3>
        <form
          onSubmit={async e => {
            e.preventDefault()
            await this.handleSubmit()

          }}>
          <div className='form-group'>
            <label>Age</label>
            <input type="text" placeholder="Your age" name="age" onChange={this.handleChange} />
          </div>
          <button onClick={() => onBack()}>Prev</button>
          <button type='submit'>Next</button>
        </form>
      </div>
    )
  }
}

export default stepOne