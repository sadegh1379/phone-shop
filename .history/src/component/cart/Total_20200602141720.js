import React from 'react'

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div className="container py-3">
            <div className="row">
                    <div className="col-10">
                    <h3 className="text-dark text-center">پرداخت</h3><hr className="text-light  my-4"/>

                            <h6>
                                    <span className="text-muted "> مبلغ : </span><span className="text-danger float-left">{price} تومان</span>
                            </h6>

                            <h6 className="my-3">
                            <span className="text-muted"> هزینه ی پست : </span><span className=" float-left h5">{company} </span>
                            </h6> 
                            <h6 className="my-3">
                            <span className="text-muted">  ی پست : </span><span className=" float-left h5">{company} </span>
                            </h6> 
                       
                    </div>
            </div>
        </div>
    )
}

export default Total
