import React, { Component } from 'react';
import './App.css';

//import components
import Header from './Components/Header'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'

//import views
import HomeView from './Views/HomeView'

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
              <p>TEST SYNC</p>
          </div>
        );
    }

    loginUser(){
      sessionStorage.setItem('username', 'Pesho');
        this.setState({
            username: sessionStorage.getItem('username'),
            isLogged: true,
            view:  <HomeView username={sessionStorage.getItem('username')}/>
        })
    }

    showLoginForm(){
        this.setState({
            view: <LoginForm loginClicked={this.loginUser.bind(this)}/>
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
