import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import {Link } from 'react-router-dom'

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id , title , img , price , company ,color_e , color_p , info , inCart } = value.detail;
                    const {addToCart  , loading} = value;

                    if(loading){

                    }else{
                        
                    }
                   
                }

                }
            </ProductConsumer>
        )
    }
}
