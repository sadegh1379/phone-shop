import React from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import './product.css'

function Product(props) {



    const {img , title , info , total , count , inCart} = props.product;
    return (
    
        <div className="col-10 col-lg-4 text-center justify-content-center py-3 m-3 mx-auto">
               <div onClick={()=>{

               }} className="card py-3">
                    <h5 className="card-title">{title}</h5>
                    <div className="image-container"
                    onClick={}
                    >
                        <Link>
                        <img id="card-image" style={{width:'100px' , height:'100px'}} src={img} alt={title}/>
                        </Link>
                        <button id="cart-btn"  className="btn btn-outline-info">
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
