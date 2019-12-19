import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './component/common/navigation';
import Footer from './component/common/footer';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Authentication from './containers/authentication';
import Details from './containers/details';
import RepairDetails from './component/details/serviceDetails';

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
            <Route exact path='/repairs/:id' component={Details} />
            <Route path='/repairs/details/:id' component={RepairDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}
