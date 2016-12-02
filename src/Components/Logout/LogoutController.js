import {Component} from 'react'
import Session from '../../utilities/sessionStorageManager'
import {browserHistory} from 'react-router'
import UserModel from '../../Models/UserModel'

export default class LogoutController extends Component{

    componentDidMount(){
        UserModel.logoutUser();
        Session.clear();
        browserHistory.push('/');
    }

    render(){
        return null
    }
}


