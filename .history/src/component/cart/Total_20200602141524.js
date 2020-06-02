import React from 'react'

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div className="container حغ">
            <div className="row">
                    <div className="col-10">
                        <h3 className=" float-right">پرداخت </h3>
                        <h3>مبلغ  </h3>
                    </div>
            </div>
        </div>
    )
}

export default Total
