import React, { Component } from 'react';
import '../../styles/Form.css'

export default class RegisterForm extends Component {
    render() {
        return (
            <form className="Form RegisterForm" onSubmit={this.props.onsubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.props.username}
                    onChange={this.props.onChangeHandler}
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.props.password}
                    onChange={this.props.onChangeHandler}
                    required
                />
                <input
                    type="password"
                    placeholder="repeat password"
                    name="repeatPass"
                    value={this.props.repeatPassword}
                    onChange={this.props.onChangeHandler}
                    required
                />
                <input type="submit" value="Register"/>
            </form>
        );
    }
}
