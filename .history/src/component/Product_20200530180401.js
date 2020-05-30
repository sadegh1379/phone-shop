import React from 'react'

function Product(props) {



    const {img , title , info , total , count , inCart} = props.product;
    return (
        
        <div className="col-10 col-lg-3 text-center">
               <div className="card">
                    <h5 className="card-title">{title}</h5>
                    <div className="image-container">
                        <img src={img} alt={}/>
                    </div>

               </div>
        </div>
    )
}

export default Product;
