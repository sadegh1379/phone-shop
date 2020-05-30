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
                        return
                        <h1>{value}</h1>
                        
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}
