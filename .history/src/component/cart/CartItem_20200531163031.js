import React from 'react'

function CartItem(props) {


    const {img , name , id , total , price , count } = props.item;
    return (
        <div className="row">
            <div className="col-10 col-lg-2">
                    <img src={img} alt={name}/>    
            </div>
            <div className="col-10 col-lg-2">
                
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
