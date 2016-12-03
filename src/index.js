import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import Home from './Components/Home/HomeView'
import Login from './Components/Login/LoginController'
import Register from './Components/Register/RegisterController'
import Logout from './Components/Logout/LogoutController'
import Posts from './Components/Post/AllPosts/AllPostsController'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route name="WebStep" path="/" component={App}>
            <IndexRoute name="Home" component={Home}/>
            <Route name="Home" path="/home" component={Home}/>
            <Route name="Login" path="/login" component={Login}/>
            <Route name="Register" path="/register" component={Register}/>
            <Route name="Logout" path="/logout" component={Logout}/>
            <Route name="Posts" path="/posts" component={Posts}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
