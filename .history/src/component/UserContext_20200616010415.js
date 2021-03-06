import React, { Component , createContext } from 'react';
import {Users} from '.././data';

const UserContext = createContext()

export default class UserProvider extends Component {


    state = {

    }

    componentWillMount(){
        let tempUser = []
        Users.forEach((item)=>{
            let user = {...item} ;
            tempUser = [...tempUser , ]
        })
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
