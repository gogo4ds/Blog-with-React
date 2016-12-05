import React, { Component } from 'react';

export default class SingleComment extends Component {
    render() {
            return (
            <div className="container">
                <span className="comment-author"><i>{this.props.author} on </i> <span><i>{this.props.date}</i></span></span>
                <br/>
                <div className="comment-box">
                    <div className="body">
                        <span className="tip tip-up"></span>
                        <div className="comment-body">
                            <span>{this.props.body}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
