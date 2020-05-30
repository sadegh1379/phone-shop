import React from 'react';
import styled from 'styled-components';

function Product(props) {



    const {img , title , info , total , count , inCart} = props.product;
    return (
    
        <div className="col-10 col-lg-4 text-center justify-content-center py-3 m-3 mx-auto">
               <div className="card py-3">
                    <h5 className="card-title">{title}</h5>
                    <div className="image-container">
                        <img style={{width:'100px' , height:'100px'}} src={img} alt={title}/>
                    </div>
                    <div className="card-body">
                        <h3 className="lead card-text">{total} <span>$</span></h3>
                    </div>
               </div>
        </div>
    
    )
}



export default Product;
