import React from 'react';
import HomeView from '../Views/HomeView';
import UserModel from '../Models/UserModel';
import Session from '../utilities/sessionStorageManager'

export default class UserController {
    constructor(AppView){
        this.appView=AppView;
    }

    login(){
        let appView = this.appView;
        let data = {
            username: 'guest',
            password: 'guest'
        };
        UserModel.loginUser(data)
            .then(function (userData) {
                Session.save(userData);
                appView.setState({
                        username: sessionStorage.getItem('username'),
                        isLogged: true,
                        view:  <HomeView username={sessionStorage.getItem('username')}/>
                    }
                );
        });
    }

    logout(){
        Session.clear();
        this.appView.setState({
            username: sessionStorage.getItem('username'),
            isLogged: false,
            view: <HomeView/>
        })
    }

    register(){

    }
}
