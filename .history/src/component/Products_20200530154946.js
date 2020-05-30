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
                        return(
<h1>{ value.products[0].title}</h1>
                        )
                        
                        
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}
