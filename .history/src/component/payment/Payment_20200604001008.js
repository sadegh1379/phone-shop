import React from 'react';
import {ProductConsumer} from '../../Context'
import Total from '../cart/Total';

function Payment() {
    return (
        <div className="container my-3 row mx-auto">
            <div className="card col-10 card-info mx-auto  py-3 px-3">
                <h6 className="text-muted text-center">لطفا به موارد زیر دقت کنید</h6>
                <div className="card-body">
                    <div className="form-group text-right">
                        <span>1- 
                        <label>لطفا مبلغ قابل پرداخت را به درستی وارد کنید</label>
                        <input type="checkbox"  className="mr-4 ml-1"/>فهمیدم
                        </span>
                       
                    </div>
                    <div className="form-group text-right">
                        <span>2- 
                        <label>لطفا نام و شماره تلفن خود را وارد کنید</label>
                        <input type="checkbox"  className="mr-4 ml-1"/>فهمیدم
                        </span>
                       
                    </div>
                    <div>
                        <h6> <span className="float-right">مبلغ قابل پرداخت </span> 
                        <ProductConsumer>
                            {value=>{
                                return(
                                <span className="text-danger h5">{ value.total} تومان</span>
                               
                                )
                            }}
                            
                        </ProductConsumer>
                        </h6>
                    </div>
                    <button className="btn btn-block btn-success mt-">
                        پرداخت
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment
