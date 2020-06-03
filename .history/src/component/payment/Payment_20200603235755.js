import React from 'react';
import {ProductConsumer} from '../../Context'

function Payment() {
    return (
        <div className="container my-3">
            <div style={{fontSize:'2vw'}} className="card card-info mx-auto  py-3 px-3">
                <h6 className="text-muted text-center">لطفا به موارد زیر دقت کنید</h6>
                <div className="card-body">
                    <div className="form-group">
                        <label>لطفا مبلغ قابل پرداخت را به درستی وارد کنید</label>
                        <input type="checkbox " name="" id=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
