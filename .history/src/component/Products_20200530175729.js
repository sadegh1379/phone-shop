import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Product from './Product';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container ">
                    <div className="row ld-flex justify-content-between">
                            <ProductConsumer>
                            
                            {value =>{
                                
                                return(
                                        value.products.map((item,index)=>{
                                            return(
                                            <Product product={item} value={value}  key={index}/>
                                            )
                                        })
                                )   
                                    }
                            }
                        </ProductConsumer>
                    </div>
                </div>
                
               
            </React.Fragment>
        )
    }
}
