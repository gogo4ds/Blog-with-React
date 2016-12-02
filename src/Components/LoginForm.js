import React, { Component } from 'react';
import './Form.css'

class LoginForm extends Component {
    render() {
        return (
            <div className="Form LoginForm">
                <input type="text" placeholder="Username" id="username" required
                       ref={input => this.usernameField = input}/>
                <input type="password" placeholder="password" id="password" required
                       ref={input => this.passwordField = input}/>
                <input type="submit" value="Login" onClick={this.handleSubmit.bind(this)}/>
            </div>
        );
    }

    handleSubmit(ev){
        ev.preventDefault();
        //TODO: check if valid input
        this.props.onsubmit(
            this.usernameField.value,
            this.passwordField.value)
    }
}

export default LoginForm;
