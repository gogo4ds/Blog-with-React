import React, { Component } from 'react';
import './SinglePost.css'

export default class SinglePost extends Component {
    render() {
        return (
            <div className="single-post">
                <div className="post-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="post-body">{this.props.body}</div>
                <div className="post-data">
                    <span className="glyphicon glyphicon-user post-author"> Author: <strong>{this.props.author}</strong></span><br/>
                    <span className="glyphicon glyphicon-time post-date"> Published on: <strong>{this.props.date}</strong></span>
                </div>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">Delete</button>
            </div>
        );
    }
}
//TODO: make link to='single post'