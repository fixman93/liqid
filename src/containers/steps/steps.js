import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/header'
import Pagination from '../../components/pagination'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'

class Steps extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
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
        ...data
      }
    }
    ))
    this.nextPage()
  }

  render() {
    const { page } = this.state
    return (
      <div>
        <Header />
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