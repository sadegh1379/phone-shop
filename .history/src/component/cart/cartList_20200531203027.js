import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartItem from './CartItem';

export default class cartList extends Component {
    render() {
        return (
            <div className="container my-3 py-2">
                <h1 className="display-4">سبد خرید شما</h1>
                <ProductConsumer>
                    {value=>{
                        return(
                            value.cart.map((item , index)=>{
                                return(
                                   <CartItem product={item} value={value} key={index}/>
                                )
                            })
                        )
                    }

                    }
                </ProductConsumer>
            </div>
        )
    }
}
