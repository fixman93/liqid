import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pagination from '../../components/pagination'

class stepThree extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.color)
    // when we want to take form with all fields we can do that with Object.assing()
    //this.props.onSubmit(Object.assign({}, this.state.age));
  }
  render() {
    const { onBack } = this.props
    return (
      <div>
        <h3>Your favorite color:</h3>
        <form
          onSubmit={async e => {
            e.preventDefault()
            await this.handleSubmit()

          }}>
          <div className='form-group'>
            <label>Red</label>
            <input type='radio' value='red' name='color' onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label>Black</label>
            <input type='radio' value='black' name='color' onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label>Blue</label>
            <input type='radio' value='blue' name='color' onChange={this.handleChange} />
          </div>
          <button onClick={() => onBack()}>Prev</button>
          <button type='submit'>Preview</button>
        </form>
      </div>
    )
  }
}

export default stepThree