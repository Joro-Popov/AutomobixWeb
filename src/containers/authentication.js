import React, { Component } from 'react';
import Login from '../component/authentication/login';
import Register from '../component/authentication/register';

export default class Authentication extends Component {
    render() {
        return(
        <div>
            <div class="limiter">
               <Login />
               <Register />
            </div>
        </div>
        )
    }
}