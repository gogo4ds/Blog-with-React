import React, { Component } from 'react';
import Requester from '../../../utilities/KinveyRequester'
import Alert from 'react-s-alert'
import {browserHistory} from 'react-router';
import DeletePostForm from './DeletePostForm'

export default class DeletePostController extends Component {
    constructor(props) {
        super(props);
        this.state=({
            postID: null,
            post: null
        });
        this.requester = new Requester('Kinvey')
        this.ondelete = this.ondelete.bind(this);
    }

    componentDidMount(){
        let _self = this;
        this.requester.ajaxGET('appdata', 'posts', this.props.params.postID).then(function (post) {
           _self.setState({
               postID: post._id,
               post: <DeletePostForm title={post.title} body={post.body} author={post.author} ondelete={_self.ondelete}/>
           })
        });
    }

    render() {
        if(this.state.post){
            return (
                <div className="posts-view">
                    <h1>Delete Post</h1>
                    {this.state.post}
                </div>
            );
        }
        return <div className="alert alert-success" role="alert">Loading...</div>;
    }

    ondelete(ev){
        ev.preventDefault();
        this.requester.ajaxDELETE('appdata', 'posts', this.state.postID).then(function (success) {
            console.log(success);
            browserHistory.push('/posts');
            Alert.success('Post Deleted', {
                timeout: 1500,
                effect: 'bouncyflip',
                position: 'bottom',
                offset: 50
            })
        });
    }
}
