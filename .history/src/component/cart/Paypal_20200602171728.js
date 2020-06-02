import React from 'react';
import {Link} from 'rea'

class PaypalButton extends React.Component {


    handlePay = ()=>{
            
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
