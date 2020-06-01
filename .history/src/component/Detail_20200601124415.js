import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id , title , img , price } = value.detail;
                    return(
                        <div className="row text-center d-flex   my-3 py-2 ">
                               
                                <div className="col-lg-6 my-md-3 justify-content-center align-items-center my-sm-3  col-sm-10 p-4">
                                        <h3 className="text-dark">{title}</h3><hr className="text-light mx-4"/>
                                         <span className="text-muted text-right">قیمت </span><span cla
                                         >{price} تومان</span>
                                        
                                </div>
                                <div className="col-lg-6 col-sm-10 p-4">
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
