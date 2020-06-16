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
        }
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

    // add user
    addUser = (user)=>{
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
                    text : 'با موفقیت ثبت نام شدید در حال انتقال به صفحه ورود...',
                    color : 'success'
                },

                sinUp : true
            }})

        }
        setTimeout(()=>{
            this.setState({
                alert : {
                    text : '',
                    color : ''
                }
            }) 
    
        } , 3000)
        
       

        
    }

    render() {
        return (
            <UserContext.Provider  value={
                {
                    ...this.state ,
                    addUser : this.addUser
                }
            }>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider , UserConsumer} ;
