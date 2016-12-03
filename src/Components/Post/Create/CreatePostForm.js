import React, { Component } from 'react';

export default class CreatePostForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onsubmit}>
                <div className="form-group centered">
                    <label className="control-label col-sm-2">Post Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        required
                        placeholder="Post title"
                        value={this.props.title}
                        onChange={this.props.onchange}/>
                </div>
                <div className="form-group centered">
                    <label className="control-label col-sm-2">Post Author:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        required
                        placeholder="Post author"
                        value={this.props.author}
                        onChange={this.props.onchange}
                    />
                </div>
                <div className="form-group centered">
                    <label className="control-label col-sm-2">Post Description:</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="description"
                        required
                        placeholder="Post description"
                        rows="10"
                        value={this.props.description}
                        onChange={this.props.onchange}
                        >
                    </textarea>
                </div>
                <input className="btn btn-default" type="submit" value="Create Post"/>
            </form>
        )
    }
}