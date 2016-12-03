import React, { Component } from 'react';
import CreatePostForm from './CreatePostForm';
import {create} from '../../../Models/PostModel';
import {browserHistory} from 'react-router';

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
                <h1>Create Post</h1>
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
                browserHistory.push('/');
            })
    }

    handleChange(event) {
        let newState={};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }
}
