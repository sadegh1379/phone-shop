import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import {Link } from 'react-router-dom'

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id , title , img , price , company ,color_e , color_p , info , inCart } = value.detail;
                    const {addToCart} = value;
                    return(
                        <>
                        <div className="row text-center d-flex   my-3 py-2 ">
                               
                                <div className="col-lg-6 text-right col-md-6 my-md-3 justify-content-between align-items-center my-sm-3  col-sm-10 py-4 px-5">
                                        <h3 className="text-dark text-center">{title}</h3><hr className="text-light  my-4"/>

                                        <h6>
                                                <span className="text-muted "> قیمت : </span><span className="text-danger float-left">{price} تومان</span>
                                        </h6>

                                        <h6 className="my-3">
                                        <span className="text-muted"> شرکت سازنده : </span><span className=" float-left h5">{company} </span>
                                        </h6> 

                                        <h6 className="">
                                        <span className="text-muted">  رنگ : 
                                        </span>
                                             <span className=" float-left ">
                                        
                                                <span className="badge mx-1 p-1" style={{ backgroundColor: color_e , color: color_e}}>C</span>
                                                {color_p} 
                                        
                                            </span>
                                        </h6> 
                                        <h6 className="">
                                        <span className="text-muted">  خصوصیات : </span><span className=" float-left my-3">{info} </span>
                                        </h6> 

                                        <div className=" text-center my-4">
                                           
                                            <button disabled={inCart?true : false}
                                            onClick={()=>addToCart(id)}
                                            className="btn float-right btn-outline-info flat">
                                                    {inCart?    (<div>
                                                                  <span className="fa fa-shopping-basket"></span><span>در سبد وجود دارد</span>
                                                                </div>)
                                                         : '  افزودن به سبد  '
                                                        
                                                }
                                            </button>
                                            <Link to="/" className="btn btn-outline-success float-left">
                                                بازگشت <span className="fa fa-arrow-left"></span>
                                            </Link>

                                        </div>
                                        
                                        
                                </div>
                                
                                <div className="col-lg-6 col-sm-10 col-md-6 p-4">
                                        <img style={{width:'80%'}} src={img} alt={title}/>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-11 col-sm-11">
                            
                                            <h6>نظرات <span className="fa fa-arrow-down" style={{cursor:'pointer'}}></span></h6>
                                        </div>
                            </div>
                        </div>
                    </>
                    )
                }

                }
            </ProductConsumer>
        )
    }
}
