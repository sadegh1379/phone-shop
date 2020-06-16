import React, { Component , createContext } from 'react';

const UserContext = createContext()

export default class UserProvider extends Component {


    state = {

    }

    componen

    render() {
        return (
            <UserContext.Provider>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider , UserConsumer} ;
