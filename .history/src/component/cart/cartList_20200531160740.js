import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartColum from './CartColum';

export default class cartList extends Component {
    render() {
        return (
            <div className="container-fliud py-3 px-2">
                <div className="row  justify-content-around ">
                        <CartColum/>

                </div>
            </div>
        )
    }
}
