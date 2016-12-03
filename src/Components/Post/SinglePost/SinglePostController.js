import React, { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost'
import Requester from '../../../utilities/KinveyRequester'

export default class SinglePostController extends Component {
    constructor(props){
        super(props);
        this.state ={
            post: null,
        }
    }

    componentDidMount(){
        let _self = this;
        let requester = new Requester('Kinvey');
        requester.ajaxGET('appdata', 'posts', this.props.params.postID).then(function (post) {
            _self.setState({
                post: <SinglePost key={post._id} title={post.title} body={post.body} author={post.author} date={post.date}/>
            });
        });
    }

    render() {
        if(this.state.post){
            return (
                <div className="posts-view">
                    <h1>Single Post</h1>
                    {this.state.post}
                </div>
            )
        }
        return <div className="alert alert-success" role="alert">Loading...</div>;
    }
}
