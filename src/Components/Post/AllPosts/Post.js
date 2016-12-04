import React, { Component } from 'react';
import './AllPosts.css'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="post-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="post-body">{this.props.body}</div>
                <span className="btn-toolbar"><Link to={'/posts/id/' + this.props.id}>Read More...</Link></span>
                <div className="post-data">
                    <span className="glyphicon glyphicon-user post-author"> Author: <strong>{this.props.author}</strong></span><br/>
                    <span className="glyphicon glyphicon-time post-date"> Published on: <strong>{this.props.date}</strong></span>
                </div>
                {this.props.creator === sessionStorage.getItem('userID') ?
                    <div>
                        <button className="btn btn-primary" onClick={this.handleEdit.bind(this)}>Edit</button>
                        <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>Delete</button>
                    </div>
                    : null}
            </div>
        );
    }

    handleEdit(){
        browserHistory.push(`posts/${this.props.id}/edit`)
    }

    handleDelete(){
        browserHistory.push(`posts/${this.props.id}/delete`)
    }
}
//TODO: make link to='single post'
