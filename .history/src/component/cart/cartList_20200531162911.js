import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartItem from './CartItem';

export default class cartList extends Component {
    render() {
        return (
            <div className="container-fliud">
                <ProductConsumer>
                    {value=>{
                        return(
                            value.cart.map((item , index)=>{
                                return(
                                   <CartItem product={item} value={} key={index}/>
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
