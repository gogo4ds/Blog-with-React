import React, { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost'
import SingleComment from '../../Comment/SingleComment';
import Requester from '../../../utilities/KinveyRequester'
import CommentForm from '../../Comment/Create/CommentForm';

export default class SinglePostController extends Component {
    constructor(props){
        super(props);
        this.state ={
            post: null,
            postId:null,
            postComments:null,
            commentBody:null
        }
    }

    componentDidMount(){
        let _self = this;
        let requester = new Requester('Kinvey');
        requester.ajaxGET('appdata', 'posts', this.props.params.postID).then(function (post) {
            _self.setState({
                post: <SinglePost key={post._id}
                                  id={post._id}
                                  title={post.title}
                                  body={post.body}
                                  author={post.author}
                                  date={post.date}
                                  postCreator={post._acl.creator}
                />,
                postId:post._id
            });
        });
        requester.ajaxGET('appdata','comments')
            .then(function (comments) {
                let commentsPost=[];
                comments=comments.filter(c=>c.postID==='5842ade501bde1035e5865d3');
                for (let comment of comments) {
                    commentsPost.push(<SingleComment
                        key={comment._id}
                        body={comment.body}
                    />)
                }
                _self.setState({
                   postComments:commentsPost
                });
                console.dir(comments);
            })
    }

    handleCommentSubmit(event) {
        event.preventDefault();
        alert(this.state.commentBody);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }


    render() {
        if(this.state.post){
            return (
                <div>
                    <div className="posts-view">
                        <h1>Single Post</h1>
                        {this.state.post}
                    </div>
                        <div>
                            <CommentForm
                                onChangeHandler={this.onChangeHandler.bind(this)}
                                onSubmitHandle={this.handleCommentSubmit.bind(this)}
                            />
                        </div>
                        <div>
                            <hr/>
                            {this.state.postComments}
                        </div>
                </div>
            )
        }
        return <div className="alert alert-success" role="alert">Loading...</div>;
    }
}
