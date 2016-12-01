import React, { Component } from 'react';

class HomeView extends Component {
    render() {
        return (
            <div className="Home">
                {this.props.username ?
                    <h1>Welcomeee, {this.props.username}</h1>
                    : <h1>HELLO , please Login or Register!!!</h1>
                }
            </div>
        );
    }
}

export default HomeView;
