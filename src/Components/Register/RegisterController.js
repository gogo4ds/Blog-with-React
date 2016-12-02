import React, { Component } from 'react';
import RegisterForm from './RegisterForm'
import UserModel from '../../Models/UserModel';
import Session from '../../utilities/sessionStorageManager';
import {browserHistory} from 'react-router';

export default class RegisterController extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            repeatPass:''
        };

        this.submitHandle=this.submitHandle.bind(this);
        this.changeHandle=this.changeHandle.bind(this);
    }

    render() {
        return (
        <div>
            <h1>Register Form</h1>
            <RegisterForm
            username={this.state.username}
            password={this.state.password}
            repeatPassword={this.state.repeatPass}
            onsubmit={this.submitHandle}
            onChangeHandler={this.changeHandle}
            />
        </div>
        )
    }

    submitHandle(event) {
        event.preventDefault();
        let data={username:this.state.username,password:this.state.password};
        UserModel.registerUser(data)
            .then(function (response) {
                Session.save(response);
                browserHistory.push('/');
            });
    }

    changeHandle(event) {
        let newState={};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }
}
