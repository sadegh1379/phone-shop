import React from 'react';
import {ProductConsumer} from '../../Context'

function Payment() {
    return (
        <div className="container my-3">
            <div style={{font-size:5vw;}} className="card card-info mx-auto  py-3 px-3">
                <h6 className="text-muted text-center">لطفا به موارد زیر دقت کنید</h6>
                <div className="card-body">
                    <p>لطفا مبلغ قابل پرداخت را به درستی وارد کنید</p>
                    <span className="badge badge-primary">
                        <input type="checkbox" name="" id=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Payment
