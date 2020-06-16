import React, { Component , createContext } from 'react';

const UserContext = createContext()

export default class UserContext extends Component {
    render() {
        return (
            <U>
                {this.props.children}
            </div>
        )
    }
}
