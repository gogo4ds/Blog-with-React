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


const appKey = 'kid_ryzXtnZfl';
const appSecret = '8e5cbe23218047719f9a928422e0dc73';
const baseUrl = 'https://baas.kinvey.com/';


class App extends Component {
    constructor(){
        super();
        this.state = {
            isLogged: false,
            username: null,
            view: <HomeView/>,
        }
    }

    render() {
    return (
          <div className="App">
              <Header isLogged={this.state.isLogged}
                  loginClicked={this.showLoginForm.bind(this)}
                  logoutClicked={this.logoutUser.bind(this)}
                  registerClicked={this.showRegisterForm.bind(this)} homeClicked={this.showHomeView.bind(this)}
              />
              {this.state.view}
          </div>
        );
    }

    handleLogin(){
        let userController=new UserController(this,baseUrl,appKey,appSecret);
        userController.login();
    }

    showLoginForm(){
        this.setState({
            view: <LoginForm loginClicked={this.handleLogin.bind(this)}/>
        })
    }

    logoutUser(){
      sessionStorage.clear();
        this.setState({
            username: sessionStorage.getItem('username'),
            isLogged: false,
            view: <HomeView/>
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
}

export default App;
