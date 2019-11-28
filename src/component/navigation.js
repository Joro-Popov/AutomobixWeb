import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return(
            <header class="position-absolute w-100">
            <div class="container">
                <div class="top-header d-none d-sm-flex justify-content-between align-items-center">
                    <div class="contact">
                        <a href="tel:+1234567890" class="tel"><i class="fa fa-phone" aria-hidden="true"></i>+1234567890</a>
                        <a href="mailto:info@yourmail.com"><i class="fa fa-envelope"aria-hidden="true"></i>info@yourmail.com</a>
                    </div>
                    <nav class="d-flex aic">
                        <a href="/authentication" class="login"><i class="fa fa-user" aria-hidden="true"></i>Login/Register</a>
                        <ul class="nav social d-none d-md-flex">
                            <li><a href="https://www.facebook.com/fh5co" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        </ul>
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
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/about">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="/services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                            <li class="nav-item"><a class="nav-link" href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        )
    }
}