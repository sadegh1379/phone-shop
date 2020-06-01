import React from 'react';
import {Link } from 'react-router-dom';
import './product.css'

function Product(props) {



    const {img , title , id , inCart , price} = props.product;

    const { addToCart , handleModal , openModal , detail } = props.value ;
    return (
    
        <div className="col-10 col-lg-4 col-md-4  text-center justify-content-center py-3  mx-auto">
               <div className="card card-hover py-3">
                    <h5 className="card-title">{title}</h5>
                    <Link>
                    
                    </Link>
                   
                    <div className="card-body">
                        <h3 className="lead card-text">{price} <span>$</span></h3>
                    </div>
               </div>
               
        </div>
    
    )
}



export default Product;
