import React from 'react'

clas PaypalButton {


    handlePay = ()=>{

    }
    return (
        <div>
            <button className="btn btn-outline-success"
            onClick={()=>this.handlePay()}
            >
                پرداخت
            </button>
        </div>
    )
}

export default PaypalButton
