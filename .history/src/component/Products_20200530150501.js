import React, { Component } from 'react';
import {ProductConsumer} from '../Context';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {value =>{
                        value.Products
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}
