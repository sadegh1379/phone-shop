import React from 'react'

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div className="container">
            <div className="row">
                    <div className="col-10">
                        <h6 className="display"></h6>
                    </div>
            </div>
        </div>
    )
}

export default Total
