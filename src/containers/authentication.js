import React, { Component } from 'react';
import Login from '../component/authentication/login';
import Register from '../component/authentication/register';

export default class Authentication extends Component {
    redirectAfterAuthentication = () => {
        this.props.history.push('/');
    }

    render() {
        return(
        <div>
            <div class="limiter">
               <Login redirectAfterAuthentication={this.redirectAfterAuthentication}/>
               <Register redirectAfterAuthentication={this.redirectAfterAuthentication}/>
            </div>
        </div>
        )
    }
}