import React, { Component } from 'react';

export default class SingleComment extends Component {
    render() {
            return (
                <div className="well">
                    <div className="media">
                        <div className="media-body">
                            <h4 className="margin-t-0"><h1>{this.props.author}</h1></h4>
                            <p>{this.props.date}</p>
                            <p>{this.props.body}</p>
                        </div>
                    </div>
                </div>
        );
    }
}
