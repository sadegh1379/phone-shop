import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartItem from './CartItem';

export default class cartList extends Component {
    render() {
        return (
            <div className="container-fliud">
                <ProductConsumer>
                    {

                    }
                </ProductConsumer>
            </div>
        )
    }
}
