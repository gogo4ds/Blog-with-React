import React, { Component } from 'react';

class HomeView extends Component {
    render() {
        return (
            <div className="Home">
                {this.props.username ?
                    <h1>Welcome, {this.props.username}</h1>
                    : <h1>Welcome, please Login or Register</h1>}
            </div>
        );
    }
}

export default HomeView;
