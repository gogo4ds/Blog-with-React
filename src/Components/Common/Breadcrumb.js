import React from 'react'
import Breadcrumbs from 'react-breadcrumbs'

let MyComponent = React.createClass({
    render: function() {
        return (
            <div>
                <Breadcrumbs routes={this.props.routes} params={this.props.params}/>
            </div>
        );
    }
});

export default MyComponent