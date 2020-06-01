import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id , title , img , price , company } = value.detail;
                    return(
                        <div className="row text-center d-flex   my-3 py-2 ">
                               
                                <div className="col-lg-6 text-right col-md-6 my-md-3 justify-content-between align-items-center my-sm-3  col-sm-10 py-4 px-5">
                                        <h3 className="text-dark text-center">{title}</h3><hr className="text-light  my-4"/>

                                        <h6>
                                                <span className="text-muted "> قیمت : </span><span className="text-danger float-left">{price} تومان</span>
                                        </h6>
                                        <h5 className="my-3">
                                        <span className="text-muted"> شرکت سازنده : </span><span className="text-danger float-left">{company} </span>
                                        </h5> 
                                        
                                </div>
                                <div className="col-lg-6 col-sm-10 col-md-6 p-4">
                                        <img style={{width:'80%'}} src={img} alt={title}/>
                                </div>
                        </div>
                    )
                }

                }
            </ProductConsumer>
        )
    }
}
