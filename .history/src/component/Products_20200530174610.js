import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Product from './Product';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <p className=""></p>
                <ProductConsumer>
                    
                    {value =>{
                        
                        return(
                                value.products.map((product,index)=>{
                                    return(
                                    <Product key={index}/>
                                    )
                                })
                        )   
                            }
                    }
                </ProductConsumer>
            </React.Fragment>
        )
    }
}
