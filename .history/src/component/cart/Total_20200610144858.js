import React from 'react';
import PaypalButton from './Paypal';

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div className="container py-3">
            <div className="row "
            class="" data-wow-offset="10"  data-wow-iteration="10"
            >
                    <div className="col-10 text-right mx-auto">
                    <h3 className="text-dark text-center">پرداخت</h3><hr className="text-light  my-4"/>

                            <h6 className="my-3">
                            <span className="text-muted"> قیمت کل   : </span><span className=" float-left h5 cost">{subTotal} </span>
                            </h6> 

                            <h6 className="my-3">
                            <span className="text-muted"> هزینه ی پست : </span><span className=" float-left h5 cost">{tax} </span>
                            </h6> 
                          
                            <h6>
                                    <span className="text-muted "> مبلغ قابل پرداخت : </span><span className="text-danger cost float-left">{total} تومان</span>
                            </h6>
                            <h6 className="my-3">
                                    <span className="text-muted ">   درگاه پرداخت : </span><span className="text-danger float-left cost">
                                            <PaypalButton total={total}
                                            
                                            />
                                            {/* <a href='https://me.sizpay.ir/SizPayNamad/C5108E9612ABD79150011898040000800395290'><img src='https://me.sizpay.ir/SizPayNamadImg/C5108E9612ABD79150011898040000800395290' style={{cursor: 'pointer'}}/> </a> */}
                                    </span>
                            </h6>

                       
                    </div>
            </div>
        </div>
    )
}

export default Total
