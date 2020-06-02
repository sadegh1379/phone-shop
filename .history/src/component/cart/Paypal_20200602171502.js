import React from 'react'

class PaypalButton extends React.Component {


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
