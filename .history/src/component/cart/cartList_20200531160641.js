import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartColum from './CartColum';

export default class cartList extends Component {
    render() {
        return (
            <div className="container-fliud">
                <div className="row d-flex justify">
                        <CartColum/>

                </div>
            </div>
        )
    }
}
