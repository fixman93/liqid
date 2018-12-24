import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './preview.scss'

class Preview extends Component {

  componentWillMount() {
    let quizInfo = JSON.parse(localStorage.getItem('quizInfo'))
    if (quizInfo === null) {
      quizInfo = {}
    }
    else {
      this.setState({ input: quizInfo })
    }
  }

  state = {
    input: {}
  }
  render() {
    return (
      <div className='previewPage'>
        <h1>You have done with quiz! </h1>
        <h2>Your answers:</h2>
        <div className='answers'>
          <h4>Your age: <span>{this.state.input.age}</span></h4>
          <h4>Your status: <span>{this.state.input.status}</span></h4>
          <h4>Your favorite color: <span>{this.state.input.color}</span></h4>
        </div>
        <Link to='/'>Back to home page</Link>
      </div>
    )
  }
}

export default Preview