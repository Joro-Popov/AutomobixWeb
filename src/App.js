import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'

import Navigation from './component/navigation';
import Footer from './component/footer';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Authentication from './containers/authentication';
import Details from './containers/details';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/authentication' component={Authentication} />
            <Route path='/repairs/details/:id' component={Details} />
          <Footer />
        </div>
      </Router>
    );
  }
}
