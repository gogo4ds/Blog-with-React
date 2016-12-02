import React, { Component } from 'react';
import '../../styles/Form.css'

export default class RegisterForm extends Component {
    render() {
        return (
            <div className="Form RegisterForm">
                <input type="text" placeholder="Username" id="username" required/>
                <input type="password" placeholder="password" id="password" required/>
                <input type="password" placeholder="repeat password" id="password" required/>
                <input type="submit" value="Login"/>
            </div>
        );
    }
}
