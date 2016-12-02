import React, { Component } from 'react';
import './App.css';
//import components
import Header from './Components/Common/Header'

class App extends Component {
    constructor(){
        super();
        this.state = {
            isLogged: false,
            username: null,
            userId: null,
            authToken: null
        };
    }

    render() {
    return (
          <div className="App">
              <Header isLogged={this.state.isLogged}/>
              {this.props.children}
          </div>
        );
    }
        return (
              <div className="App">
                  <Header isLogged={this.state.isLogged}/>
                  {this.props.children}
              </div>
            );
        }
}

export default App;
