import React, { Component } from 'react'
import Button from '../../common/forms/Button/index'
import Input from '../../common/forms/Input/index'

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
            <Input type='radio' name='color' change={this.handleChange} value='red' id='1' />
          </div>
          <div className='form-group radio-btn'>
            <label htmlFor='2'>Black</label>
            <Input type='radio' name='color' change={this.handleChange} value='black' id='2' />
          </div>
          <div className='form-group radio-btn'>
            <label htmlFor='3'>Blue</label>
            <Input type='radio' name='color' change={this.handleChange} value='blue' id='3' />
          </div>
          <Button
            text='Prev'
            type='submit'
            click={() => onBack()}
          />
          <Button
            className={!this.state.color ? 'disabled' : ''}
            text='Preview'
            type='submit'
            disabled={!this.state.color}
          />
        </form>
      </div>
    )
  }
}

export default stepThree