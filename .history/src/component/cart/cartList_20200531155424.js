import React, { Component } from 'react';
import {Pro}
import CartColum from './CartColum';

export default class cartList extends Component {
    render() {
        return (
            <div className="container-fliud">
                <div className="row text-center my-3 py-3 ">
                        <CartColum/>
                </div>
            </div>
        )
    }
}
