import React, { Component } from 'react';

export default class NAvigation extends Component {
    render() {
        return(
           <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/contact">Contact</a></li>
           </ul>
        )
    }
}