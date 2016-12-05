import React, { Component } from 'react';
import Post from './Post'
import './AllPosts.css'
import Requester from '../../../utilities/KinveyRequester'

export default class AllPostsController extends Component {
    constructor(props){
        super(props);
        this.state ={
            posts: null,
        }
    }

    componentDidMount(){
        let requester = new Requester('Kinvey');
        let _self = this;
        let posts = [];
        requester.ajaxGET('appdata', 'posts').then(function (success) {
            for(let post of success){
                posts.push(<Post key={post._id}
                                 id={post._id}
                                 title={post.title}
                                 body={post.body}
                                 author={post.author}
                                 date={post.date}
                                 postCreator={post._acl.creator}
                />);
            }
            _self.setState({
                posts: posts
            });
        });
    }

    render() {
        if(this.state.posts){
            return (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="posts-view col-sm-8">
                                    <h1>All Posts</h1>
                                    {this.state.posts}
                                </div>
                            </div>
                        </div>
                    </div>

            )
        }
        return <div className="alert alert-success" role="alert">Loading...</div>;
    }
}
