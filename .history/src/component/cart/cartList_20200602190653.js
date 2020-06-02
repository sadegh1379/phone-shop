import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartItem from './CartItem';
import Total from './Total';
import {Link} from 'react-router-dom';

export default class cartList extends Component {

    clearCart = (func) =>{
        func();
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
                                <div>
                                        <div className="display-4 text-center container p-4 ">
                                                     <h6 >سبد خرید شما خالی است</h6>
                                        </div>
                                        <Link className="btn btn-info" to="/">بازگشت به فروشگاه</Link>

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
