import React, { Component } from 'react';
import './styles.css';

class NotFound extends Component {
    render() {
        const {props} = this.props;
        return (
            <div className="NotFound" {...props}>
                <h1>Not Found</h1>
            </div>
        );
    }
}

export default NotFound;
