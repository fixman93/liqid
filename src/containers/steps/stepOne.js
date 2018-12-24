import React, { Component } from 'react'

class stepOne extends Component {

  componentWillMount() {
    let quizInfo = JSON.parse(localStorage.getItem('quizInfo'))
    if (quizInfo === null) {
      quizInfo = {}
    }
    else {
      this.setState({ age: quizInfo.age })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      age: '',
      question: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = async () => {
    await this.props.onSubmit(Object.assign({},
      await this.state.input, { age: this.state.age }));
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
            <input type="text" placeholder="Your age" name="age" onChange={this.handleChange} value={this.state.age} />
          </div>
          <button onClick={() => onBack()}>Prev</button>
          <button type='submit' disabled={!this.state.age}>Next</button>
        </form>
      </div>
    )
  }
}

export default stepOne