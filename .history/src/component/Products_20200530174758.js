import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Product from './Product';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container justify-content-center">
                    <div className="row">

                    </div>
                </div>
                
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
