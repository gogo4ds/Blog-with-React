import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Requester from '../../../utilities/KinveyRequester'
import './SinglePost.css'
import '../AllPosts/AllPosts.css'

export default class SinglePost extends Component {
    constructor(props){
        super(props);
        this.state={
            comments: null
        }
    }

    componentDidMount(){
        let requester = new Requester('Kinvey');
        let that = this;
        let postID = '' + this.props.id;
        requester.ajaxGET('appdata', `comments/?query={"postID":"${postID}"}`).then(function (success) {
            that.setState({
                comments: success.length
            })
        })
    }

    render() {
        return (
                <div className="single-post">
                    <div className="post-title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="post-body">{this.props.body}</div>
                    <div className="post-data">
                        <span className="glyphicon glyphicon-user post-author"> Author: <strong>{this.props.author}</strong></span><br/>
                        <span className="glyphicon glyphicon-time post-date"> Published on: <strong>{this.props.date.substring(0, 10)}</strong></span>
                    </div>
                    {this.props.postCreator===sessionStorage.getItem('userID') ?
                        <div>
                            <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Edit</button>
                            <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>Delete</button>
                        </div>
                        :null
                    }
                    <span className="comments-counter glyphicon glyphicon-comment"> Comments: {this.state.comments}</span>
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
