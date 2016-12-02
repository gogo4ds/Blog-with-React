import React, { Component } from 'react';
import RegisterForm from './RegisterForm'

export default class RegisterController extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <RegisterForm/>
    }
}
