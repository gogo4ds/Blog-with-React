import React, { Component } from 'react';
import './AllPosts.css'
import {Link} from 'react-router'
import Requester from '../../../utilities/KinveyRequester'


export default class Post extends Component {
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
                <div className="post">
                    <div className="post-title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="post-body">{this.props.body}</div>
                    <span className="btn-toolbar"><Link to={'/posts/id/' + this.props.id}>Read More...</Link></span>
                    <div className="post-data">
                        <span className="glyphicon glyphicon-user post-author"> Author: <strong>{this.props.author}</strong></span><br/>
                        <span className="glyphicon glyphicon-time post-date"> Published on: <strong>{this.props.date.substring(0, 10)}</strong></span>
                    </div>
                    {this.props.postCreator===sessionStorage.getItem('userID') ?
                        <div className="edit-delete-links">
                            <Link to={'/posts/edit/id/'+this.props.id}>Edit{" "}</Link>
                            <Link to={'/posts/delete/id/'+this.props.id}>Delete</Link>
                        </div>
                        :null
                    }
                    <br/>
                    <span className="comments-counter glyphicon glyphicon-comment">{' '}
                        <Link to={'/posts/id/' + this.props.id}>Comments:</Link> {this.state.comments}
                    </span>
                </div>
            );
    }
}
