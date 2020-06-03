import React from 'react';
import {Link} from 'react-router-dom';
import Payment from '../payment/Payment';

class PaypalButton extends React.Component {


    handlePay = ()=>{
            
    }

    render(){
        return (
            <div>
                <Link to={} className="btn btn-outline-success"
                onClick={()=>this.handlePay()}
                >
                    پرداخت
                </a>
            </div>
        )
    }
   
}

export default PaypalButton;
