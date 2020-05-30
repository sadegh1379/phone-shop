import React, { Component } from 'react';
import {ProductConsumer} from '../Context';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {value =>{
                        value.products.map(product =>{
                            return(
                                <Pro
                            )
                        })
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}
