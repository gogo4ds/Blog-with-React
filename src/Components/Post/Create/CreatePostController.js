import React, { Component } from 'react';
import CreatePostForm from './CreatePostForm';
import {create} from '../../../Models/PostModel';
import {browserHistory} from 'react-router';
import Alert from 'react-s-alert';

export default class CreatePostController extends Component{
    constructor(props) {
        super(props);
        this.state={
            title:'',
            author:'',
            description:''
        }
    }
    render() {
        return (
            <div>
                <CreatePostForm
                    title={this.state.title}
                    author={this.state.author}
                    description={this.state.description}
                    onsubmit={this.handleSubmit.bind(this)}
                    onchange={this.handleChange.bind(this)}
                />
            </div>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        let data={
            title:this.state.title,
            author:this.state.author,
            body:this.state.description,
            date:new Date()
        };
        create(data)
            .then(function (response) {
                Alert.closeAll();
                Alert.success('Post created !', {timeout: 2000});
                browserHistory.push('/posts')
            });
    }

    handleChange(event) {
        let newState={};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }
}

