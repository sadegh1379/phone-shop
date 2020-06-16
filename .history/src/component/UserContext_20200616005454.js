import React, { Component , createContext } from 'react';

const UserContext = createContext()

export default class UserContext extends Component {
    render() {
        return (
            <UserContext.Provider>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;


