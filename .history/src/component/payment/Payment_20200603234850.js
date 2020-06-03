import React from 'react';
import {ProductConsumer} from '../../Context'

function Payment() {
    return (
        <div className="container my-3">
            <div className="card card-info mx-auto text-center py-3 px-3">
                <h6 className="text-muted">لطفا به موارد زیر دقت کنید</h6>
                <div>
                    <p>لطفا مبلغ قابل پرداخت را به درستی وارد کنید</p>
                    <span className="badge badge-primary"></span>
                </div>
            </div>
        </div>
    )
}

export default Payment
