import React from 'react';
import {ProductConsumer} from '../../Context'
import { useState } from 'react';
import Total from '../cart/Total';

function Payment() {

    const [one , setOne] = useState(false);
    const [tow, setTow] = useState(false);
    return (
        <div className="container my-3 row mx-auto">
            <div className="card col-10 card-info mx-auto  py-3 px-3">
                <h6 className="text-muted text-center">لطفا به موارد زیر دقت کنید</h6>
                <div className="card-body">
                    <div className="form-group text-right">
                        <span>1- 
                        <label>لطفا مبلغ قابل پرداخت را به درستی وارد کنید</label>
                        <input type="checkbox"
                        checked={one}
                        onClick={()=>setOne((ps)=>{
                            return !ps
                        })}
                        className="mr-4 ml-1"/>فهمیدم
                        </span>
                       
                    </div>
                    <div className="form-group text-right">
                        <span>2- 
                        <label>لطفا نام و شماره تلفن خود را وارد کنید</label>
                        <input type="checkbox"
                        checked={tow}
                        onClick={()=>setTow((ps)=>{
                            return !ps
                        })}
                        className="mr-4 ml-1"/>فهمیدم
                        </span>
                       
                    </div>
                    <div>
                        <h6> <span className="float-right ">مبلغ قابل پرداخت </span> 
                        <ProductConsumer>
                            {value=>{
                                return(
                                <span className="text-danger h5">{ value.total} تومان</span>
                               
                                )
                            }}
                            
                        </ProductConsumer>
                        </h6>
                    </div>
                  
                </div>
                {one === tow === true &&}
                <a href="https://me.sizpay.ir/sadeghpay"
                disable
                className="btn btn-block btn-success mt-3">
                        پرداخت
                    </a>
            </div>
        </div>
    )
}

export default Payment
