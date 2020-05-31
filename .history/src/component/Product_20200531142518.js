import React from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import './product.css'

function Product(props) {



    const {img , title , id , info , total , count , inCart , price} = props.product;

    const { addToCart , handleModal , openModal , detail } = props.value ;
    return (
    
        <div className="col-10 col-lg-4 col-md-4  text-center justify-content-center py-3 m-3 mx-auto">
               <div className="card card-hover py-3">
                    <h5 className="card-title">{title}</h5>
                    <div className="image-container">
                        <img  id="card-image" className="my-3" style={{width:'100px' , height:'100px'}} src={img} alt={title}
                         onClick={()=>console.log("sadegh")}
                        />
                        <button disabled={inCart ? true : false} id="cart-btn"  className="btn btn-outline-info"
                        onClick={()=>addToCart(id)}
                        >
                            {inCart ? <p>موجود در سبد</p> : <span className="fa fa-shopping-cart "></span>}
                            
                        </button>
                    </div>
                    <div className="card-body">
                        <h3 className="lead card-text">{price} <span>$</span></h3>
                    </div>
               </div>
               {}
        </div>
    
    )
}



export default Product;
