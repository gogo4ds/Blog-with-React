import React, { Component } from 'react';
import './App.css';
//import components
import Header from './Components/Common/Header'
import observer from '../src/utilities/observer'

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
              {this.props.children}
          </div>
        );
    }
}

export default App;
