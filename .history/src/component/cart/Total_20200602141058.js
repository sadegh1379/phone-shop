import React from 'react'

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div className="container">
            <div className="row">
                    <div className="col-10">
                        <p className="text-muted float-right">پرداخت </p>
                    </div>
            </div>
        </div>
    )
}

export default Total
