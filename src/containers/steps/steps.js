import React, { Component } from 'react'

import Header from '../../components/header'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'

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
      console.log('minus jedan', this.state.page)
    }
  }

  nextPage = () => {
    if (this.state.page < 4) {
      this.setState(prevState => ({
        page: prevState.page + 1
      }))
      localStorage.setItem('page', JSON.stringify(this.state.page));
      console.log('plus jedan', this.state.page)
    }
  }

  handleStep = (data) => {
    console.log(data)
    this.setState(prevState => ({
      input: {
        ...prevState.input,
        ...data
      }
    }))
    console.log('sadsada', this.state.input)
    localStorage.setItem('quizInfo', JSON.stringify(this.state.input))
    this.nextPage()
  }

  render() {
    const { page, input } = this.state
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
      </div>
    )
  }
}

export default Steps