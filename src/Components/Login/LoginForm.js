import React, { Component } from 'react';
import '../../styles/Form.css'

export default class LoginForm extends Component {
    render() {
        return (
            <div className="Form LoginForm">
                <input type="text" placeholder="Username" id="username" required/>
                <input type="password" placeholder="password" id="password" required/>
                <input type="submit" value="Login"/>
            </div>
        );
    }
}
