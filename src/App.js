import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/home'
import Steps from './containers/steps/steps'
import Preview from './containers/preview'

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
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/steps' component={Steps} />
            <Route exact path='/preview' component={Preview} />
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
