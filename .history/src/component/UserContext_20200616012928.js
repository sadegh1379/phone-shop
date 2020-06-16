import React, { Component , createContext } from 'react';
import {Users} from '.././data';

const UserContext = createContext()

export default class UserProvider extends Component {


    state = {

        users : []
    }

    componentWillMount(){
        let tempUser = []
        Users.forEach((item)=>{
            let user = {...item} ;
            tempUser = [...tempUser , user]
        })

        this.setState(()=>{
            return{
                users : tempUser
            }
        })
    }

    sin

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
