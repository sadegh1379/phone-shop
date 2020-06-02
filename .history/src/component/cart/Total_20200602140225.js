import React from 'react'

function Total(props) {

    const {total , subTotal , tax} = props.value ;
    return (
        <div>
            
            <h1>{subTotal}</h1>
            <h1>{tax}</h1>
            
        </div>
    )
}

export default Total
