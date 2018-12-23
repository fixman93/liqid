import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/home'
import Header from './components/header'
import stepOne from './containers/steps/stepOne'
import stepTwo from './containers/steps/stepTwo'
import stepThree from './containers/steps/stepThree'

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }
  componentDidMount() {
    this.setState({ page: localStorage.getItem('page') })
  }
  render() {
    console.log('oooo', this.state.page)
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            {this.state.page === 1 && (
              <Route path='/step-1' component={stepOne} />
            )}
            {this.state.page === 2 && (
              <Route path='/step-2' component={stepTwo} />
            )}
            {this.state.page === 2 && (
              <Route exact path='/step-3' component={stepThree} />
            )}
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
