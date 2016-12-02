import React, { Component } from 'react';
import './App.css';
//import components
import Header from './Components/Header'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
//import views
import HomeView from './Views/HomeView'
//import controllers
import UserController from './Controllers/UserController'

class App extends Component {
    constructor(){
        super();
        this.state = {
            isLogged: false,
            username: null,
            view: <HomeView/>,
        };
        this.userController = new UserController(this);
    }

    render() {
    return (
          <div className="App">
              <Header isLogged={this.state.isLogged}
                      loginClicked={this.showLoginForm.bind(this)}
                      logoutClicked={this.logoutUser.bind(this)}
                      registerClicked={this.showRegisterForm.bind(this)}
                      homeClicked={this.showHomeView.bind(this)}
              />
              {this.state.view}
          </div>
        );
    }

    showLoginForm(){
        this.setState({
            view: <LoginForm onsubmit={this.loginUser.bind(this)}/>
        })
    }

    showRegisterForm(){
        this.setState({
            view: <RegisterForm onsubmit={this.registerUser.bind(this)}/>
        })
    }

    showHomeView(){
        this.setState({
            view: <HomeView username={this.state.username}/>
        })
    }

    registerUser(username, password){
        this.userController.register(username, password)
    }

    loginUser(username, password){
        this.userController.login(username, password)
    }

    logoutUser(){
        this.userController.logout()
    }
}

export default App;
