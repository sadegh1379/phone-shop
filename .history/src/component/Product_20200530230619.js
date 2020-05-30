import React from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import './product.css'

function Product(props) {



    const {img , title , info , total , count , inCart} = props.product;
    return (
    
        <div className="col-10 col-lg-4 col-md-4  text-center justify-content-center py-3 m-3 mx-auto">
               <div className="card cart py-3">
                    <h5 className="card-title">{title}</h5>
                    <div className="image-container">
                        <Link to="/detail">
                        <img id="card-image" style={{width:'100px' , height:'100px'}} src={img} alt={title}
                         onClick={()=>console.log("clicked image container")}
                        />
                        </Link>
                        <button id="cart-btn"  className="btn btn-outline-info"
                        onClick={()=>console.log("added to cart")}
                        >
                            <span className="fa fa-shopping-cart "></span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h3 className="lead card-text">{total} <span>$</span></h3>
                    </div>
               </div>
        </div>
    
    )
}



export default Product;
