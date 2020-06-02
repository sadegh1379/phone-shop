import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartItem from './CartItem';

export default class cartList extends Component {
    render() {
        return (
            <div className="container my-3 py-2">
                <h3 className="display-5 text-center text-muted">سبد خرید شما</h3>
                <ProductConsumer>
                    {value=>{
                        if(value.cart.length > 0){
                            return(
                                value.cart.map((item , index)=>{
                                    return(
                                       <CartItem product={item} value={value} key={index}/>
                                    )
                                }) ,
                                <Total value={value}/>
                            )
                        }else{
                            return(
                                <div className="display-4 text-center container p-4 ">
                                        <h6 >سبد خرید شما خالی است</h6>
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
