import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id , title , img } = value.detail;
                    return(
                        <div className="row text-center  my-3 py-2 ">
                                <div className="col-lg-6 col-sm-10">
                                        <img src={img} alt=""/>
                                </div>
                                <div className="col-6 col-sm-10">
                                         <h1>{title}</h1>
                                </div>
                        </div>
                    )
                }

                }
            </ProductConsumer>
        )
    }
}
