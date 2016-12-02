import React, { Component } from 'react';
import './Header.css'
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="nav">
                    {!this.props.isLogged ?  <ul>
                        <li className="home"><Link to="/home">Home</Link></li>
                        <li className="login"><Link to="/login">Login</Link></li>
                        <li className="register"><Link to="/register">Register</Link></li>
                    </ul> :
                        <ul>
                            <li className="home"><Link to="/home">Home</Link></li>
                            <li className="posts"><Link to="/posts">Posts</Link></li>
                            <li className="create-post"><Link to="/create">Create</Link></li>
                            <li className="logout"><Link to="/logout">Logout</Link></li>
                        </ul>}
                </div>
            </header>
        );
    }
}

export default Header;
