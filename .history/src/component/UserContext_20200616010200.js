import React, { Component , createContext } from 'react';
import {Users} from '.././data'

const UserContext = createContext()

export default class UserProvider extends Component {


    state = {

    }

    componentWillMount(){

    }

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
