import React, { Component } from 'react';
import './Form.css'

class LoginForm extends Component {
    render() {
        return (
            <div className="Form LoginForm">
                <input type="text" placeholder="Username" id="username"/>
                <input type="password" placeholder="password" id="password"/>
                <input type="submit" value="Login" onClick={this.props.loginClicked}/>
            </div>
        );
    }
}

export default LoginForm;
