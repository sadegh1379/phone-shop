import React from 'react'

function CartItem(props) {


    const {img , title , id , total , price , count } = props.product;
    return (
        <div className="row py-3 d-">
            <div className="col-10 col-lg-2">
                    <img src={img} alt={title} className="img-fluid" style={{width:'60px' , height:'60px'}}/>    
            </div>
            <div className="col-10 col-lg-2">
                    <h6>{title}</h6>
            </div>
            <div className="col-10 col-lg-2">
                
            </div>
            <div className="col-10 col-lg-2">
                
            </div>
            <div className="col-10 col-lg-2">
                
            </div>
            <div className="col-10 col-lg-2">
                {/* <img src={} alt=""/> */}
            </div>
        </div>
    )
}

export default CartItem
