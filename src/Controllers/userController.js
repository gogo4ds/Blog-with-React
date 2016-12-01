import Requester from '../utilities/KinveyRequester';
import React from 'react';
import HomeView from '../Views/HomeView';

export default class User {
    constructor(AppView,baseUrl,appKey,appSecret){
        this.appView=AppView;
        this._requester=new Requester();
        this._baseUrl=baseUrl;
        this._appKey=appKey;
        this._appSecret=appSecret;
    }

    login(){
        let appView=this.appView;
        let url = this._baseUrl + 'user/' + this._appKey + '/login';
        let authorization = 'Basic ' + btoa(this._appKey +":"+this._appSecret);
        let data = {
            username: 'a',
            password: 'a'
        };
        this._requester.ajaxPOST(url, authorization, data)
            .then(loginSuccess).catch(function (err) {
            console.log(err);
        });

        function loginSuccess(successData) {
            sessionStorage.setItem('username', successData.username);
            sessionStorage.setItem('authToken', successData._kmd.authtoken);
            appView.setState(
                {
                    username: sessionStorage.getItem('username'),
                    isLogged: true,
                    view:  <HomeView username={sessionStorage.getItem('username')}/>
                }
            );
        }
    }

    logout(){

    }

    register(){

    }
}
