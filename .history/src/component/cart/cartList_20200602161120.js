import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartItem from './CartItem';
import Total from './Total'

export default class cartList extends Component {

    clearCart = (func) =>{
        func();
    }
    render() {
        return (
            <div className="container my-3 py-2">
                <h3 className="display-5 text-center text-muted">سبد خرید شما</h3><button className="btn btn-danger h6">پاک کردن کل لیست</button>
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

                                

                                </>
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
