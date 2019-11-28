import React, { Component } from 'react';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            fullName: undefined,
            emailAddress: undefined,
            phoneNumber: undefined,
            message: undefined,
        }
    }

    setFullName = async event => {
        await this.setState({ fullName: event.target.value});
    };

    setEmailAddress = async event => {
        await this.setState({ emailAddress: event.target.value});
    };

    setPhoneNumber = async event => {
        await this.setState({ phoneNumber: event.target.value});
    };

    setMessage = async event => {
        await this.setState({ message: event.target.value});
    };

    submitForm = event => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        const { fullName, emailAddress, phoneNumber, message } = this.state;

        return(
        <div class="wrap-login100">
            <div class="login100-form-title" style={{ backgroundImage: 'url(images/bg-01.jpg)'}}>
                <span class="login100-form-title-1">Contact Us!</span>
            </div>
            <form class="login100-form validate-form" onSubmit={this.submitForm}>
                <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                    <span class="label-input100">Full Name</span>
                    <input 
                    class="input100" 
                    type="text" 
                    name="fullName" 
                    placeholder="Enter your full name" 
                    value={fullName}
                    onChange={this.setFullName}
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
                    value={emailAddress}
                    onChange={this.setEmailAddress}
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
                    value={phoneNumber}
                    onChange={this.setPhoneNumber}
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
                    onChange={this.setMessage}
                    >
                        {message}
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