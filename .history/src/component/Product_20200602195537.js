import React from 'react';
import {Link } from 'react-router-dom';
import './product.css';

function Product(props) {



    const {img , title , id , inCart , price} = props.product;

    const { addToCart , handleDetail , openLoading } = props.value ;
    return (
    
        <div className="col-10 col-lg-4 col-md-6  text-center justify-content-center mx-auto py-1">
               <div className="card card-hover py-3">
                    <strong className="card-title">{title}</strong>
                    
                    <div className="image-container">
                    <Link to="/detail">
                        <img  id="card-image" className="my-3" style={{width:'100px' , height:'100px' , cursor:'pointer'}} src={img} alt={title}
                         onClick={()=>handleDetail(id) , openLoading }
                        />
                    </Link>
                        <button disabled={inCart ? true : false} id="cart-btn"  className="btn btn-outline-info"
                        onClick={()=>addToCart(id)}
                        >
                            {inCart ? <p>موجود در سبد</p> : <span className="fa fa-shopping-cart text-danger"
                            
                            ></span>}
                            
                        </button>
                    </div>
                    
                   
                    <div className="card-body">
                        <p className="muted card-text">{price} <span className="h6 text-danger muted">تومان</span></p>
                    </div>
               </div>
               
        </div>
       
        
        
    )
}



export default Product;
