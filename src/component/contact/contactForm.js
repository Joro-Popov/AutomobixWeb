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

    handleStateChange = async event => {
        const { name, value } = event.target;

        await this.setState({ [name]: value});
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
                    onChange={this.handleStateChange}
                    />
                    <span class="focus-input100"></span>
                </div>
                <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                    <span class="label-input100">Email Address</span>
                    <input 
                    class="input100" 
                    type="email" 
                    name="emailAddress" 
                    placeholder="Enter email address" 
                    value={emailAddress}
                    onChange={this.handleStateChange}
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
                    onChange={this.handleStateChange}
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
                    onChange={this.handleStateChange}
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