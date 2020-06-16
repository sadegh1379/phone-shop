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

    sinUpUser = (user)=>{
        let newUsers = [...this.state.users , user]
        this.setState(()=>{
            users : newUsers
        })
    }

    render() {
        return (
            <UserContext.Provider  value={
                {
                    ...this.state ,
                    sinUpUser : this.sinUpUser
                }
            }>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider , UserConsumer} ;
