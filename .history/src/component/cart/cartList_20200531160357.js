import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartColum from './CartColum';

export default class cartList extends Component {
    render() {
        return (
            <div className="container-fliud d-flex">
                <div className="row   justify-content-between">
                        <CartColum/>

                </div>
            </div>
        )
    }
}
