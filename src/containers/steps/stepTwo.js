import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pagination from '../../components/pagination'

class stepTwo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: 'i'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.status)
    // when we want to take form with all fields we can do that with Object.assing()
    //this.props.onSubmit(Object.assign({}, this.state.age));
  }
  render() {
    const { onBack } = this.props
    return (
      <div>
        <h3>Your status:</h3>
        <form
          onSubmit={async e => {
            e.preventDefault()
            await this.handleSubmit()

          }}>
          <div className='form-group'>
            <label>Status</label>
            <select name="status" onChange={this.handleChange} value={this.state.status}>
              <option></option>
              <option value='Single'>Single</option>
              <option value='Married'>Married</option>
            </select>
          </div>
          <button onClick={() => onBack()}>Prev</button>
          <button type='submit'>Next</button>
        </form>
      </div>
    )
  }
}

export default stepTwo