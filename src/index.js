import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/HomeView'
import Login from './Components/Login/LoginController'
import Register from './Components/Register/RegisterController'
import Logout from './Components/Logout/LogoutController'
import Posts from './Components/Post/AllPosts/AllPostsController'
import CreatePost from './Components/Post/Create/CreatePostController';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route name="WebStep" path="/" component={App}>
            <IndexRoute name="Home" component={Home}/>
            <Route name="Home" path="/home" component={Home}/>
            <Route name="Login" path="/login" component={Login}/>
            <Route name="Register" path="/register" component={Register}/>
            <Route name="Logout" path="/logout" component={Logout}/>
            <Route name="Posts" path="/posts" component={Posts}/>
            <Route name="Create Post" path="/create-post" component={CreatePost}/>
        </Route>
    </Router>,
  document.getElementById('root')
);
