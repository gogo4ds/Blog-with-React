import React, { Component } from 'react';
import './CreatePost.css';

export default class CreatePostForm extends Component {
    render() {
        return (
        <div className="form-style-5">
            <form onSubmit={this.props.onsubmit}>
                <fieldset>
                    <legend><span className="glyphicon glyphicon-pencil"></span> Create Post</legend>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        required
                        placeholder="Post title*"
                        value={this.props.title}
                        onChange={this.props.onchange}
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        required
                        placeholder="Post author*"
                        value={this.props.author}
                        onChange={this.props.onchange}
                    />
                    <textarea
                        className="form-control"
                        type="text"
                        name="description"
                        required
                        placeholder="Post description*"
                        rows="10"
                        value={this.props.description}
                        onChange={this.props.onchange}
                    >
                    </textarea>
                </fieldset>
                <input className="btn btn-default" type="submit" value="Create Post"/>
            </form>
        </div>
        )
    }
}