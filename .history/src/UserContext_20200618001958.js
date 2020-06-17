import React, { Component , createContext } from 'react';
import {Users} from './data';

const UserContext = createContext()

export default class UserProvider extends Component {


    state = {

        users : [] ,
        sinUp : false ,
        alert : {
            text : '',
            color : ''
        } ,
        user : [] ,
        
    }

    componentDidMount(){
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
        // console.log(tempUser)
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
        
        if(data.name==='' | data.passWord === ''){
            this.setState({
                alert:{
                    text : 'لطفا هر دو فیلد را پر کنید',
                    color : 'danger'
                }
            })
        }else{

            this.state.users.map((item)=>{
               
                if(item.name === data.name & item.pass_1 === data.passWord){
                    this.setState({
                       
                        sinUp : true ,
                        alert : {
                            text : 'در حال ورود به فروشگاه',
                            color : 'success'
                        }
                    }) 
                   
                    loginCheck = true;
                    
                    
                }
                return loginCheck;
                // else{
                //     this.setState({
                //         alert : {
                //             text : 'هنوز ثبت نام نکرده اید',
                //             color : 'danger'
                //         }
                //     })
                //     loginCheck = false
                // }
                
            }
            )
        }
        
        
           

            setTimeout(()=>{
                this.setState({
                    alert : {
                        text : '',
                        color : ''
                    }
                }) 
        
            } , 3000);
            
        
        
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
