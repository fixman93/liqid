import React, { Component } from 'react'

class stepTwo extends Component {

  componentWillMount() {
    let quizInfo = JSON.parse(localStorage.getItem('quizInfo'))
    if (quizInfo === null) {
      quizInfo = {}
    }
    else {
      this.setState({ status: quizInfo.status })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      status: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = async () => {
    await this.props.onSubmit(Object.assign({},
      await this.state.input, { status: this.state.status }));
  }
  render() {
    const { onBack } = this.props
    return (
      <div className='container question'>
        <h3>Your status:</h3>
        <form
          onSubmit={async e => {
            e.preventDefault()
            await this.handleSubmit()

          }}>
          <div className='form-group'>
            <select name="status" onChange={this.handleChange} value={this.state.status}>
              <option></option>
              <option value='Single'>Single</option>
              <option value='Married'>Married</option>
            </select>
          </div>
          <button onClick={() => onBack()}>Prev</button>
          <button type='submit' disabled={!this.state.status}>Next</button>
        </form>
      </div>
    )
  }
}

export default stepTwo