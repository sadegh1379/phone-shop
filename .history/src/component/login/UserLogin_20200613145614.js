import React, { Component } from 'react'
import GetId from '../static/GetId';

 class UserLogin extends Component {
     constructor(){
         super();
         GetId();
     }
    render() {
        return (
            <div className="text-center">
                <h1 className=" display-1 m-4">Login page</h1>
            </div>
        )
    }
}

export default UserLogin
