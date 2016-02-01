import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                React package
                {this.props.children}
            </div>
        )
    }
}
