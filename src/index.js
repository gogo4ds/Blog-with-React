import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import Home from './Components/Home/HomeView'
import Login from './Components/Login/LoginController'
import Register from './Components/Register/RegisterController'
import Logout from './Components/Logout/LogoutController'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route name="WebStep" path="/" component={App}>
            <IndexRoute name="Home" component={Home}/>
            <Route name="Home" path="/home" component={Home}/>
            <Route name="Login" path="/login" component={Login}/>
            <Route name="Register" path="/register" component={Register}/>
            <Route name="Logout" path="/logout" component={Logout}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
