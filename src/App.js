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
                      logoutClicked={this.handleLogout.bind(this)}
                      registerClicked={this.showRegisterForm.bind(this)}
                      homeClicked={this.showHomeView.bind(this)}
              />
              {this.state.view}
          </div>
        );
    }

    showLoginForm(){
        this.setState({
            view: <LoginForm loginClicked={this.handleLogin.bind(this)}/>
        })
    }

    showRegisterForm(){
        this.setState({
            view: <RegisterForm />
        })
    }

    showHomeView(){
        this.setState({
            view: <HomeView username={this.state.username}/>
        })
    }

    handleLogin(){this.userController.login()}

    handleLogout(){this.userController.logout()}
}

export default App;
