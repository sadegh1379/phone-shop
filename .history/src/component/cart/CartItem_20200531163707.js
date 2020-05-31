import React from 'react'

function CartItem(props) {


    const {img , title , id , total , price , count } = props.product;
    return (
        <div className="row py-3 d-flex justify-content-center align-items-center text-center">
            <div className="col-10 col-lg-2">
                    <img src={img} alt={title} className="img-fluid" style={{width:'60px' , height:'60px'}}/>    
            </div>
            <div className="col-10 col-lg-2">
                    <b>{title}</b>
            </div>
            <div className="col-10 col-lg-2">
                    <b>{count}</b>
            </div>
            <div className="col-10 col-lg-2">
                    <b>{total}</b>
            </div>
            <div className="col-10 col-lg-2">
                    <b>{price}</b>
            </div>
            <div className="col-10 col-lg-2">
                <span className=""></span>
            </div>
        </div>
    )
}

export default CartItem
