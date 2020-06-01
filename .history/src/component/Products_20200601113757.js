import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Product from './Product';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row d-flex justify-content-between align-items-center">
                            <ProductConsumer>
                            
                            {value =>{
                                const {openModal } = value;
                                console.log(openModal)
                                return(
                                        value.products.map((item,index)=>{
                                            return(
                                            <Product product={item} value={value}  key={index}/>
                                            )
                                        })
                                )   
                                    }
                            }
                        </ProductConsumer>
                    </div>
                </div>
                
               
            </React.Fragment>
        )
    }
}
