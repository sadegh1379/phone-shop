import React, { Component } from 'react';
import {ProductConsumer } from '../../Context';
import CartColum from './CartColum';

export default class cartList extends Component {
    render() {
        return (
            <div className="container-fliud p">
                <div className="row d-flex justify-content-center ">
                        <CartColum/>

                </div>
            </div>
        )
    }
}
