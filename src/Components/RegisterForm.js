import React, { Component } from 'react';
import './Form.css'

class RegisterForm extends Component {
    render() {
        return (
            <div className="Form RegisterForm">
                <input type="text" placeholder="Username" id="username" required
                       ref={input => this.usernameField = input}/>
                <input type="password" placeholder="password" id="password" required
                       ref={input => this.passwordField = input}/>
                <input type="password" placeholder="repeat password" id="password" required
                       ref={input => this.repeatPasswordField = input}/>
                <input type="submit" value="Register" onClick={this.handleSubmit.bind(this)}/>
            </div>
        );
    }

    handleSubmit(ev){
        ev.preventDefault();
        //TODO: check if valid input
        if(this.passwordField.value === this.repeatPasswordField.value){
            this.props.onsubmit(
                this.usernameField.value,
                this.passwordField.value)
        }else{
            console.log('Passwords not matching');
            //TODO: show better info box
        }
    }
}

export default RegisterForm;
