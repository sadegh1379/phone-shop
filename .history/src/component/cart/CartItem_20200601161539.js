import React from 'react';
import {Link} from 'react-router-dom';

function CartItem(props) {

        const styled = {
                backgroundColor : '#BDBDBD'
        }

    const {img , title , info , id , total , price , company , color , count } = props.product;
    const{handleRemoveItem , handleDetail} = props.value;
    return (
            <div style={styled} className="  row d-flex text-center justify-content-center my-4">

                        <div className="col-lg-6 text-center mx-auto  col-md-12 py-md-4 my-xs-4">
                                <strong className="py-md-4 py-sm-4">{title}</strong><hr className="bg-white"/>
                                <div style={{width:''}} className="card text-right card-body card-dark    my-md-4 my-sm-4 my-xs-4 mx-auto">
                                

                                                        <h6>
                                                                <span className=" "> قیمت  </span><span className="text-danger float-left">{price} تومان</span>
                                                        </h6>
                                                        <h6 className="my-3">
                                                        <span className=""> شرکت سازنده </span><span className=" float-left">{company} </span>
                                                        </h6> 
                                                <span className="my-1"> تعداد  
                                                <span className="float-left">
                                                <button className="btn btn-outline-light">+</button>

                                                <button className="btn btn-outline-light mx-2">{count}</button>

                                                <button className="btn btn-outline-light">-</button>                            
                                                </span> 
                                                
                                                </span>
                                </div>
                                
                        </div>
                        
                        <div className="col-lg-6 mt-md-4 mt-2  col-md-12 align-items-center d-flex justify-content-center" >
                           <Link to="/detail"
                           onClick={()=>handleDetail(id)}
                           >
                                <img className="img-thumbnail" src={img} alt={title}/>
                           </Link>    
                        </div>
                
            </div>
    )
}

export default CartItem
