import React, { Component } from 'react'


class stepThree extends Component {

  componentWillMount() {
    let quizInfo = JSON.parse(localStorage.getItem('quizInfo'))
    if (quizInfo === null) {
      quizInfo = {}
    }
    else {
      this.setState({ color: quizInfo.color })
    }
  }

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

  handleSubmit = async () => {
    await this.props.onSubmit(Object.assign({},
      await this.state.input, { color: this.state.color }));
  }
  render() {
    const { onBack } = this.props
    return (
      <div className='container question'>
        <h3>Your favorite color:</h3>
        <form
          onSubmit={async e => {
            e.preventDefault()
            await this.handleSubmit()

          }}>
          <div className='form-group radio-btn'>
            <label htmlFor='1'>Red</label>
            <input type='radio' value='red' id='1' name='color' onChange={this.handleChange} />
          </div>
          <div className='form-group radio-btn'>
            <label htmlFor='2'>Black</label>
            <input type='radio' value='black' id='2' name='color' onChange={this.handleChange} />
          </div>
          <div className='form-group radio-btn'>
            <label htmlFor='3'>Blue</label>
            <input type='radio' value='blue' id='3' name='color' onChange={this.handleChange} />
          </div>
          <button onClick={() => onBack()}>Prev</button>
          <button type='submit' disabled={!this.state.color} className={!this.state.color ? 'disabled' : ''}>Preview</button>
        </form>
      </div>
    )
  }
}

export default stepThree