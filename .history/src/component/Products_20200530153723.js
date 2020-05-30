import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Product from './Product';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>awdawd</h1>
                <ProductConsumer>
                    
                    {value =>{
                        console.log(value.p)
                       value.products.map(product =>{
                           return(
                               <Product/>
                           )
                       })
                        
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}
