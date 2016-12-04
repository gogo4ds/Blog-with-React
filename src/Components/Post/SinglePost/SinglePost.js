import React, { Component } from 'react';
import {browserHistory} from 'react-router';
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
                    {this.props.postCreator===sessionStorage.getItem('userID') ?
                        <div>
                            <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Edit</button>
                            <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>Delete</button>
                        </div>
                        :null
                    }
                </div>
        );
    }

    handleClick(event) {
        event.preventDefault();
        browserHistory.push('/posts/edit/id/'+this.props.id);
    }

    handleDelete(event) {
        event.preventDefault();
        browserHistory.push('/posts/delete/id/'+this.props.id);
    }
}
