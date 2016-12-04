import React, { Component } from 'react';
import Requester from '../../../utilities/KinveyRequester'

export default class EditPostController extends Component {
    constructor(props) {
        super(props);
        this.state=({
            postId:this.props.params.postID
        })
    }

    componentDidMount() {
        let requester=new Requester('Kinvey');
        requester.ajaxGET('appdata','posts',this.state.postId)
            .then(function (post) {
                console.dir(post);
            })
    }


    render() {
        return (
            <div>
                Test controller
            </div>
        )
    }
}