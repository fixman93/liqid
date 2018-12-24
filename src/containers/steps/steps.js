import React, { Component } from 'react'

import Header from '../../components/header'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'

class Steps extends Component {


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
    localStorage.setItem('quizInfo', data)
    this.nextPage()
  }

  render() {
    const { page, input } = this.state
    return (
      <div>
        <Header activeId={page} />
        {page === 1 && (
          <StepOne
            propsData={input}
            onBack={this.prevPage}
            onSubmit={this.handleStep}
          />
        )}
        {page === 2 && (
          <StepTwo
            propsData={input}
            onBack={this.prevPage}
            onSubmit={this.handleStep}
          />
        )}
        {page === 3 && (
          <StepThree
            propsData={input}
            onBack={this.prevPage}
            onSubmit={this.handleStep}
          />
        )}
        {page === 4 && (
          <div className='previewPage'>
            Thank you! You are done!
          </div>
        )}
      </div>
    )
  }
}

export default Steps