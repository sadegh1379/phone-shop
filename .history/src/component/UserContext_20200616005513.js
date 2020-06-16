import React, { Component , createContext } from 'react';

const UserContext = createContext()

export default class UserProvider extends Component {
    render() {
        return (
            <UserContext.Provider>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export { User}
