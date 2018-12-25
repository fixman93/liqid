import React, { Component } from 'react'
import Button from '../../common/forms/Button/index'
import Input from '../../common/forms/Input/index'
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
    return (
      <div className='container question'>
        <h3>Your age:</h3>
        <form
          onSubmit={async e => {
            e.preventDefault()
            await this.handleSubmit()

          }}>
          <div className='form-group'>
            <Input type='text' placeholder='Your age' name='age' change={this.handleChange} value={this.state.age} />
          </div>
          <Button
            className={!this.state.age ? 'disabled' : ''}
            text='Next'
            type='submit'
            disabled={!this.state.age}
          />
        </form>
      </div>
    )
  }
}

export default stepOne