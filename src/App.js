import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Test from './containers/test'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => (<div>home</div>)} />
            <Route path='/test' component={Test} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
