import React from 'react'

function Product(props) {



    const {img , title , info , total , count , inCart} = props.product;
    return (
        
        <div className="col-10 col-lg-3 text-center">
                <h1>{title}</h1>
                img
        </div>
    )
}

export default Product;
