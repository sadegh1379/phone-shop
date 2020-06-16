import React, { Component } from 'react'
import GetId from '../static/GetId';
import {Link } from 'react-router-dom';
import {UserConsumer} from '../../UserContext';
import './login.css';


 class SinIn extends Component {
     constructor(){
         super();
         GetId();
	 }
	 
	 state ={
		 name : '',
		 passWord : '' ,
		 remember : false
	 }

	 handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value 
        })
	}
	handleCheck = ()=>{
        this.setState({
            remember : !this.state.remember 
        })
    }

    handleSubmit = (e , func)=>{
        e.preventDefault();

            let newUser = this.state ;
            func(newUser);
            this.setState({
                name : '',
                passWord : ''
            })

            setTimeout(()=>this.props.history.push('/') , 3000)
    
    }



     
    render() {
        return (
			<UserConsumer>
				{value=>{
					return(

					)
				}}
			</UserConsumer>
           
        )
    }
}

export default SinIn
