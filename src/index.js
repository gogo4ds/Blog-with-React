import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import Home from './Components/Home/HomeView'
import Login from './Components/Login/LoginController'
import Register from './Components/Register/RegisterController'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
