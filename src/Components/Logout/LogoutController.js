import {Component} from 'react'
import Session from '../../utilities/sessionStorageManager'
import {browserHistory} from 'react-router'
import UserModel from '../../Models/UserModel'
import observer from '../../utilities/observer'

export default class LogoutController extends Component{

    componentDidMount(){
        UserModel.logoutUser();
        Session.clear();
        observer.sessionChange();
        browserHistory.push('/home');
    }

    render(){
        return null
    }
}


