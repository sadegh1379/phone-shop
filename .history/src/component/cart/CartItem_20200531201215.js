import React from 'react'

function CartItem(props) {

        const styled = {
                backgroundColor : '#BDBDBD'
        }
        const myStyle ={
                position : 'fixed' ,

        }

    const {img , title , info , id , total , price , company , color , count } = props.product;
    const{handleRemoveItem} = props.value;
    return (
            <div style={styled} className=" py-4 row d-flex text-center justify-content-center my-4">

                        <div className="col-lg-4 text-center  col-md-12 py-md-4">
                                <strong className="py-md-4 py-sm-4">{title}</strong><hr className="bg-white"/>
                                <div className="card text-right card-body card-dark bg-dark text-white my-md-4 my-sm-4 mx-auto">
                                <h6 className="my-3"> قیمت : {price} <span className="mx-1 ">تومان</span></h6>

                                                <span>شرکت سازنده : <span className="h5">{company} </span> </span>
                                                <span className="my-3"> رنگ : <span className="h6">{color} </span> </span>
                                        <h6 className="text-muted ">
                                                {info}
                                        </h6>
                                </div>
                                
                        </div>

                        <div className="col-lg-4  col-md-12 align-items-center d-flex justify-content-center" >
                                <img className="img-thumbnail" src={img} alt={title}/>
                        </div>
                        <div style={myStyle} className="col-lg-4 col-md-12">
                                تمام خرید : 500تومان
                        </div>
                
            </div>
    )
}

export default CartItem
