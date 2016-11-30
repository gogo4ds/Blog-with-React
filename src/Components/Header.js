import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="nav">
                    {!this.props.isLogged ?  <ul>
                        <li className="home" onClick={this.props.homeClicked}><a href="#">Home</a></li>
                        <li className="login"><a href="#" onClick={this.props.loginClicked}>Login</a></li>
                        <li className="register"><a href="#" onClick={this.props.registerClicked}>Register</a></li>
                    </ul> :
                        <ul>
                            <li className="home" onClick={this.props.homeClicked}><a href="#">Home</a></li>
                            <li className="posts"><a href="#">Posts</a></li>
                            <li className="create-post"><a href="#">Create</a></li>
                            <li className="news"><a href="#">Newsletter</a></li>
                            <li className="logout"><a href="#" onClick={this.props.logoutClicked}>Logout</a></li>
                        </ul>}
                </div>
            </header>
        );
    }
}

export default Header;
