import React, { Component } from 'react';
import './App.css';
//import components
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import observer from '../src/utilities/observer';
import Breadcrumbs from 'react-breadcrumbs';
import Alert from 'react-s-alert';

class App extends Component {
    constructor(){
        super();
        this.state = {
            isLogged: false,
            username: null
        };

        this.sessionChange = this.sessionChange.bind(this);
        observer.sessionChange = this.sessionChange;
    }

    sessionChange(){
        if(sessionStorage.getItem('userID')){
            this.setState({
                isLogged: true,
                username: sessionStorage.getItem('username')
            })
        }else{
            this.setState({
                isLogged: false,
                username: null
            })
        }
    }

    render() {
    return (
          <div className="App">
              <Header isLogged={this.state.isLogged}/>
              <Breadcrumbs routes={this.props.routes} params={this.props.params} setDocumentTitle={true}/>
              {this.props.children}
              <Alert stack={{limit: 3}} />
          </div>
        );
    }
}

export default App;
