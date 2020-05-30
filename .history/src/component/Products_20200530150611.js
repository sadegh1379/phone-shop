import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Product from './Product'

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {value =>{
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
