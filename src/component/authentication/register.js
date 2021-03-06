import React, { Component } from 'react';
import ApiConfig from '../../services/ApiConfig';

export default class Register extends Component {
constructor(props) {
    super(props);

    this.state = {
        username: undefined,
        password: undefined,
        confirmPassword: undefined,
    };
}

handleStateChange = async event => {
    const { name, value } = event.target;
    await this.setState({ [name]: value });
};

register = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    await ApiConfig.registerUser(username, password);

    this.props.redirectAfterAuthentication();
};

render() {
    const { username, password, confirmPassword } = this.state;

    return(
    <div class="wrap-login100">
        <div class="login100-form-title" style={{ backgroundImage: 'url(images/bg-01.jpg)'}}>
            <span class="login100-form-title-1">Register</span>
        </div>
        <form class="login100-form validate-form" onSubmit={this.register}>
            <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                <span class="label-input100">Username</span>
                <input 
                class="input100" 
                type="text" 
                name="username" 
                placeholder="Enter username"
                value={username}
                onChange={this.handleStateChange}
                />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                <span class="label-input100">Password</span>
                <input 
                class="input100" 
                type="password" 
                name="password" 
                placeholder="Enter password" 
                value={password}
                onChange={this.handleStateChange}
                />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                <span class="label-input100">Confirm password</span>
                <input 
                class="input100" 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm password" 
                value={confirmPassword}
                onChange={this.handleStateChange}
                />
                <span class="focus-input100"></span>
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn">Register</button>
            </div>
        </form>
    </div>
    )
}
}