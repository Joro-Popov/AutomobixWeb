import React, { Component } from 'react';

export default class ContactForm extends Component {
render() {
    return(
    <div class="wrap-login100">
        <div class="login100-form-title" style={{ backgroundImage: 'url(images/bg-01.jpg)'}}>
            <span class="login100-form-title-1">Contact Us!</span>
        </div>
        <form class="login100-form validate-form" >
            <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                <span class="label-input100">Full Name</span>
                <input 
                class="input100" 
                type="text" 
                name="fullName" 
                placeholder="Enter your full name" 
                />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                <span class="label-input100">Email Address</span>
                <input 
                class="input100" 
                type="email" 
                name="email" 
                placeholder="Enter email address" 
                />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                <span class="label-input100">Phone Number</span>
                <input 
                class="input100" 
                type="number" 
                name="phoneNumber" 
                placeholder="Enter phone number" 
                />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                <span class="label-input100">Message</span>
                <textarea
                rows="10"
                class="input100" 
                type="text" 
                name="message" 
                placeholder="Enter your message or question" 
                >
                </textarea>
                <span class="focus-input100"></span>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn" >Send</button>
            </div>
        </form>
    </div>
    )
}
}