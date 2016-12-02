import React, { Component } from 'react';
import '../../styles/Form.css'

export default class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="Form LoginForm">
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.props.username}
                    onChange={this.props.onChangeHandler}
                    required/>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.props.onChangeHandler}
                    required/>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}
