import React, { Component } from 'react';
import {UserConsumer} from '../UserContext';

export class SinUP extends Component {

    state = {
        name  : '',
        lastName : '',
        phone : '',
        pass_1 : '',
        pass_2 : ''

    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        

    }



    render() {

       const {name , lastName , phone , pass_1 , pass_2} = this.state ;
         return(
             <UserConsumer>
                 {value=>
                 return
                 }
             </UserConsumer>
         )
    }
}

export default SinUP
