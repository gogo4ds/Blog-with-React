import React, { Component } from 'react';
import LoginForm from './LoginForm'

export default class LoginController extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <LoginForm/>
    }
}
