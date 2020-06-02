import React from 'react';
import {Link} from 'react-router-dom';

class PaypalButton extends React.Component {


    handlePay = ()=>{
            
    }

    render(){
        return (
            <div>
                <Link to="" className="btn btn-outline-success"
                onClick={()=>this.handlePay()}
                >
                    پرداخت
                </Link>
            </div>
        )
    }
   
}

export default PaypalButton
