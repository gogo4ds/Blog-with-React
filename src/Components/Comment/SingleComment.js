import React, { Component } from 'react';

export default class SingleComment extends Component {
    render() {
            let style={
                border:'5px solid',
                borderRadius:'8px',
                margin:'10px'
        };
            return (<div>
                <div style={style}>
                    <h3>{this.props.body}</h3>
                </div>
            </div>
        );
    }
}
