import React, { Component , createContext } from 'react';
import {Users} from './data';

const UserContext = createContext()

export default class UserProvider extends Component {


    state = {

        users : '' ,
        sinUp : false ,
        alert : {
            text : '',
            color : ''
        } ,
        user : [] ,
        
    }

    componentWillMount(){
        let tempUser = []
        Users.forEach((item)=>{
            let user = {...item} ;
            tempUser = [...tempUser , user];
            
        })
        // console.log(tempUser);

        this.setState(()=>{
            return{
                users : tempUser
            }
        })
    }

    // add user
    addUser = (user )=>{
        let chek = false;
        let users = [...this.state.users]
        if(user.pass_1 != user.pass_2){
            this.setState({
                alert : {
                    text : 'رمز ورود همخوانی ندارد',
                    color : 'danger'
                }
            })
            
        }else{
            users = [...users , user];
            // console.log(users)
            this.setState(()=>{
                return{
                users : users , 

                alert : {
                    text : '... شما ثبت نام شدید لطفا صبر کنید ',
                    color : 'success'
                },

                sinUp : true ,
                
            }})

            chek = true;
           
        }
        setTimeout(()=>{
            this.setState({
                alert : {
                    text : '',
                    color : ''
                }
            }) 
    
        } , 3000)

        return chek;
       
    }

    // sin in users
    userSinIn = (data)=>{
        let loginCheck ;
        if(data.name === '' | data.passWord === ''){
            this.setState({
                alert:{
                    text : 'لطفا هر دو فیلد را پر کنید',
                    color : 'danger'
                }
            })
        }else{
            
            // console.log(this.state.users);
            let user ;
            this.state.users.map((item)=>{
               
                if(item.name === data.name && item.pass_1 === data.passWord){
                    this.setState({
                       
                        sinUp : true ,
                        alert : {
                            text : 'در حال ورود به فروشگاه',
                            color : 'success'
                        }
                    }) 
                   
                    loginCheck = true;
                    
                }
                
            })

            if(logu)
        }
        
        
           

            setTimeout(()=>{
                this.setState({
                    alert : {
                        text : '',
                        color : ''
                    }
                }) 
        
            } , 3000);
            return loginCheck;
        
        
    }

    render() {
        return (
            <UserContext.Provider  value={
                {
                    ...this.state ,
                    addUser : this.addUser,
                    userSinIn : this.userSinIn
                    
                }
            }>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider , UserConsumer} ;
