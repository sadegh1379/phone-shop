import React from 'react'

function CartItem(props) {


    const {img , title , id , total , price , count } = props.product;
    const{handleRemoveItem} = props.value;
    return (
            <div>
                    
            </div>
        // <div className="row py-3 d-flex justify-content-center align-items-center text-center my-4">
        //     <div className="col-10 col-lg-2">
        //             <img src={img} alt={title} className="img-fluid" style={{width:'60px' , height:'60px'}}/>    
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{title}</b>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{count}</b>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{total}</b><span className="px-1">$</span>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{price}</b><span className="px-1">$</span>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //         <span style={{cursor:'pointer'}} className="fa fa-trash"
        //         onClick={()=>handleRemoveItem(id)}
        //         ></span>
        //     </div>
        // </div>
    )
}

export default CartItem
