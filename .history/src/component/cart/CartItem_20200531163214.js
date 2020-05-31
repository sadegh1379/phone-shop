import React from 'react'

function CartItem(props) {


    const {img , title , id , total , price , count } = props.product;
    return (
        <div className="row">
            <div className="col-10 col-lg-2">
                    <img src={img} alt={title} className="img-fluid" style={{width:'100px' , height:'100px'}}/>    
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
