import React, { Component } from 'react';

export default class Register extends Component {
constructor(props) {
    super(props);

    this.state = {
        username: undefined,
        password: undefined,
        confirmPassword: undefined,
    };
}

setUsername = async event => {
    await this.setState({ username: event.target.value })
};

setPassword = async event => {
    await this.setState({ password: event.target.value });
};

setConfirmPassword = async event => {
    await this.setState({ confirmPassword: event.target.value });
};

register = event => {
    event.preventDefault();
    console.log(this.state);
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
                onChange={this.setUsername}
                />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                <span class="label-input100">Password</span>
                <input 
                class="input100" 
                type="password" 
                name="pass" 
                placeholder="Enter password" 
                value={password}
                onChange={this.setPassword}
                />
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                <span class="label-input100">Confirm password</span>
                <input 
                class="input100" 
                type="password" 
                name="pass" 
                placeholder="Confirm password" 
                value={confirmPassword}
                onChange={this.setConfirmPassword}
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