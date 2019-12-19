import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiConfig from '../../src/services/ApiConfig';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
    state = {
        isAuthenticated: false,
    };

    async componentWillUpdate(nextProps) {
        const { isAuthenticated } = nextProps;
        if (isAuthenticated !== this.state.isAuthenticated) {
            await this.setState({ isAuthenticated });
        }
    };

    logout = () => {
        ApiConfig.logoutUser();
        sessionStorage.clear();
    };

    render() {
        const { isAuthenticated } = this.state;
        
        return(
            <header class="w-100 navigation-content">
            <div class="container">
                <div class="top-header d-none d-sm-flex justify-content-between align-items-center">
                    <div class="contact">
                        <a href="tel:+1234567890" class="tel"><i class="fa fa-phone" aria-hidden="true"></i>+1234567890</a>
                        <a href="mailto:info@yourmail.com"><i class="fa fa-envelope"aria-hidden="true"></i>info@yourmail.com</a>
                    </div>
                    <nav class="d-flex aic">
                        {!isAuthenticated ?
                        <NavLink class="login" to="/authentication">Login / Register</NavLink>
                        : 
                        <button class="login" onClick={this.logout}><i class="fa fa-user" aria-hidden="true"></i>Logout</button>
                        }
                    </nav>
                </div>
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="/"><img src="/images/logo.png" alt="Multipurpose" /></a>
                    <div class="group d-flex align-items-center">
                        <button class="navbar-toggler" 
                        type="button" data-toggle="collapse"data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="login-icon d-sm-none" href="#"><i class="fa fa-user"></i></a>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav navigation">
                            <NavLink class="nav-item" to="/">Home</NavLink>
                            {isAuthenticated && <NavLink class="na-item" to="/contact">My Repairs</NavLink>}
                            <NavLink class="nav-item" to="/about">About Us</NavLink>
                            <NavLink class="nav-item" to="/services">Services</NavLink>
                            <NavLink class="nav-item" to="/contact">Contact Us</NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        )
    }
}

const mapStateToProps = state => ({ 
    isAuthenticated: state.authReducer.isAuthenticated, 
});

const mapDispatchToProps = dispatch => {
    // return {
    //   increment: () => dispatch({ type: 'INCREMENT' }),
    //   decrement: () => dispatch({ type: 'DECREMENT' }),
    //   reset: () => dispatch({ type: 'RESET' })
    // }
  }
export default connect(mapStateToProps, null)(Navigation)  
