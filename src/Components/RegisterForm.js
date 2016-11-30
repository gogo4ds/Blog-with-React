import React, { Component } from 'react';
import './Form.css'

class RegisterForm extends Component {
    render() {
        return (
            <div className="Form RegisterForm">
                <input type="text" placeholder="Username" id="username"/>
                <input type="password" placeholder="password" id="password"/>
                <input type="password" placeholder="repeat password" id="password"/>
                <input type="submit" value="Register" onClick={this.props.loginClicked}/>
            </div>
        );
    }
}

export default RegisterForm;
