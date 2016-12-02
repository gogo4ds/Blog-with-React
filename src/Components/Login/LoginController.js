import React, { Component } from 'react';
import LoginForm from './LoginForm'
import UserModel from '../../Models/UserModel'
import Session from '../../utilities/sessionStorageManager'

export default class LoginController extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    render() {
        return <LoginForm
            username={this.state.username}
            password={this.state.password}
            onChangeHandler={this.onChangeHandler}
            onSubmitHandler={this.onSubmitHandler}
        />
    }

    onSubmitHandler(ev){
        ev.preventDefault();
        let userData = {
            username: this.state.username,
            password: this.state.password
        };
        UserModel.loginUser(userData).then(function (response) {
            Session.save(response);
        });
    }

    onChangeHandler(event){
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
}

LoginController.contextTypes = {
    router: React.PropTypes.object
};
