import React, { Component } from 'react';
import './AllPosts.css'
import {Link} from 'react-router'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="post-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="post-body">{this.props.body}</div>
                <span className="btn-toolbar"><Link to="/posts">Read More...</Link></span>
                <div className="post-data">
                    <span className="glyphicon glyphicon-user post-author"> Author: <strong>{this.props.author}</strong></span><br/>
                    <span className="glyphicon glyphicon-time post-date"> Published on: <strong>{this.props.date}</strong></span>
                </div>
            </div>
        );
    }
}
//TODO: make link to='single post'
