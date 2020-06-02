import React from 'react'

class PaypalButton extends React.Component {


    handlePay = ()=>{
            console.log('pay')
    }

    render(){
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
   
}

export default PaypalButton
