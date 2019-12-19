import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Navigation from './component/common/navigation';
import Footer from './component/common/footer';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Authentication from './containers/authentication';
import Details from './containers/details';
import RepairDetails from './component/details/serviceDetails';
import { thisExpression } from '@babel/types';

class App extends Component {
  PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/authentication', state: {from: props.location}}} />}
      />
    )
  }

  PublicRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Redirect to={{pathname: '/', state: {from: props.location}}} />
          : <Component {...props} />}
      />
    )
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Router>
        <div className="App">
          <Navigation />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <this.PublicRoute authed={isAuthenticated} path='/authentication' component={Authentication} />
            <this.PrivateRoute authed={isAuthenticated} exact path='/repairs/:id' component={Details} />
            <this.PrivateRoute authed={isAuthenticated} path='/repairs/details/:id' component={RepairDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ 
  isAuthenticated: state.authReducer.isAuthenticated, 
});

export default connect(mapStateToProps, null)(App)  
