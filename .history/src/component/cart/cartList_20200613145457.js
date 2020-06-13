import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartItem from './CartItem';
import Total from './Total';
import {Link} from 'react-router-dom';
import GetId from '../static/GetId';

export default class cartList extends Component {
    constructor(){
        GetId()
    }

   
    render() {
        return (
            <div className="container my-3 py-2">
                <h3 className="display-5 text-center text-muted">سبد خرید شما</h3>
                <ProductConsumer>
                    {value=>{
                        if(value.cart.length > 0){
                            return(
                                <>
                                <Total value={value}/>
                                {value.cart.map((item , index)=>{
                                    return(
                                        
                                       <CartItem product={item} value={value} key={index}/>
                                    )
                                })}
                                <button className="btn btn-outline-danger float-right btn-block my-3"
                                onClick={()=>value.clearCart()}
                                >پاک کردن  همه</button>
                                

                                </>
                            )
                        }else{
                            return(
                                <div className="mx-auto text-center">
                                       
                                                     <h6 className=" text-center container p-4 ">سبد خرید شما خالی است</h6>
                                       
                                        <Link className="btn btn-outline-danger mx-auto wow bounceInLeft" to="/" data-wow-dely="3s" data-wow-duration="2s" >بازگشت به فروشگاه <span className="fa fa-arrow-left"></span></Link>

                                </div>
                               
                            )
                        }
                       
                    }

                    }
                  
                </ProductConsumer>
                
            </div>
        )
    }
}
