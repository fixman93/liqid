import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'

import './steps.scss'

class Steps extends Component {

  componentWillMount() {
    let quizInfo = JSON.parse(localStorage.getItem('quizInfo'))
    if (quizInfo === null) {
      quizInfo = {}
    }
    else {
      this.setState({ input: quizInfo })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      input: {}
    }
  }
  prevPage = () => {
    if (this.state.page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1
      }))
      localStorage.setItem('page', JSON.stringify(this.state.page));
    }
  }

  nextPage = () => {
    if (this.state.page < 4) {
      this.setState(prevState => ({
        page: prevState.page + 1
      }))
      localStorage.setItem('page', JSON.stringify(this.state.page));
    }
  }

  handleStep = (data) => {
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        ...data
      }
    }))
    localStorage.setItem('quizInfo', JSON.stringify(this.state.input))
    this.nextPage()
  }

  render() {
    const { page } = this.state
    return (
      <div>
        <Header activeId={page} />
        {page === 1 && (
          <StepOne
            onBack={this.prevPage}
            onSubmit={this.handleStep}
          />
        )}
        {page === 2 && (
          <StepTwo
            onBack={this.prevPage}
            onSubmit={this.handleStep}
          />
        )}
        {page === 3 && (
          <StepThree
            onBack={this.prevPage}
            onSubmit={this.handleStep}
          />
        )}
        {page === 4 && (
          <div className='container finished'>
            3/3 questions
            <Link to='/preview'>Go to preview page</Link>
          </div>
        )}
      </div>
    )
  }
}

export default Steps