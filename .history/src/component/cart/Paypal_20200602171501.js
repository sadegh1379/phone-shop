import React from 'react'

class PaypalButton extends React.C {


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
