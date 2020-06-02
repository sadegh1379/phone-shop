import React from 'react';
import {Link } from 'react-router-dom';
import './product.css'

function Product(props) {



    const {img , title , id , inCart , price} = props.product;

    const { addToCart , handleDetail , openModal , detail } = props.value ;
    return (
    
        <div className="col-10 col-lg-4 col-md-6  text-center justify-content-center py-3 ">
               <div className="card card-hover py-3">
                    <h5 className="card-title">{title}</h5>
                    
                    <div className="image-container">
                    <Link to="/detail">
                        <img  id="card-image" className="my-3" style={{width:'100px' , height:'100px' , cursor:'pointer'}} src={img} alt={title}
                         onClick={()=>handleDetail(id)}
                        />
                    </Link>
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
               
        </div>
    
    )
}



export default Product;
