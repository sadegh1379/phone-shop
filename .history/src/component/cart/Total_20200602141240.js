import React from 'react'

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div className="container">
            <div className="row">
                    <div className="col-10">
                        <h3 className=" float-right">پرداخت </h3><br/><hr className="bg-light my-2"/>
                    </div>
            </div>
        </div>
    )
}

export default Total
