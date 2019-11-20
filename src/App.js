import React, { Component } from 'react';
import Navigation from './containers/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}