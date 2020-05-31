import React from 'react'

function CartItem(props) {

        const styled = {
                backgroundColor : '#BDBDBD'
        }

    const {img , title , info , id , total , price , company , count } = props.product;
    const{handleRemoveItem} = props.value;
    return (
            <div style={styled} className=" py-4 row d-flex text-center justify-content-center my-4">
                        <div className="col-lg-6 text-center  col-md-12 py-md-4">
                                <strong className="py-md-4 py-sm-4">{title}</strong><hr className="bg-white"/>
                                <div className="card card-body card-dark bg-dark text-white my-md-4 my-sm-4 mx-auto">
                                <h6 className="my-3"> قیمت : {price} <span className="mx-1 ">تومان</span></h6>

                                                <span>شرکت سازنده : <span className="h5">{company} </span> </span>
                                        {/* <h5>
                                                {info}
                                        </h5> */}
                                </div>
                                
                        </div>
                        <div className="col-lg-6  col-md-12 align-items-center d-flex justify-content-center" >
                                <img className="img-thumbnail" src={img} alt={title}/>
                        </div>
                
            </div>
        // <div className="row py-3 d-flex justify-content-center align-items-center text-center my-4">
        //     <div className="col-10 col-lg-2">
        //             <img src={img} alt={title} className="img-fluid" style={{width:'60px' , height:'60px'}}/>    
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{title}</b>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{count}</b>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{total}</b><span className="px-1">$</span>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //             <b>{price}</b><span className="px-1">$</span>
        //     </div>
        //     <div className="col-10 col-lg-2">
        //         <span style={{cursor:'pointer'}} className="fa fa-trash"
        //         onClick={()=>handleRemoveItem(id)}
        //         ></span>
        //     </div>
        // </div>
    )
}

export default CartItem
