import React, { Component } from 'react';
import './global.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                React Boilerplate
                {this.props.children}
            </div>
        )
    }
}
