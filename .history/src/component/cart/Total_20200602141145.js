import React from 'react'

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div className="container">
            <div className="row">
                    <div className="col-10">
                        <p className=" float-right">پرداخت </p><hr className="bg-light"/>
                    </div>
            </div>
        </div>
    )
}

export default Total