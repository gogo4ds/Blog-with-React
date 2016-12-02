import React from 'react';
import HomeView from '../Views/HomeView';
import UserModel from '../Models/UserModel';
import Session from '../utilities/sessionStorageManager'

export default class UserController {
    constructor(AppView){
        this.appView=AppView;
    }

    register(username, password){
        let that = this;
        let data = {
            username: username,
            password: password
        };
        UserModel.registerUser(data)
            .then(function (userData) {
                Session.save(userData);
                that.appView.setState({
                        username: userData.username,
                        isLogged: true,
                        view:  <HomeView username={userData.username}/>
                    }
                );
            });
    }

    login(username, password){
        let that = this;
        let data = {
            username: username,
            password: password
        };
        UserModel.loginUser(data)
            .then(function (userData) {
                Session.save(userData);
                that.appView.setState({
                        username: userData.username,
                        isLogged: true,
                        view:  <HomeView username={userData.username}/>
                    }
                );
        });
    }

    logout(authToken){
        UserModel.logoutUser();
        Session.clear();
        this.appView.setState({
            username: sessionStorage.getItem('username'),
            isLogged: false,
            view: <HomeView/>
        })
    }
}
