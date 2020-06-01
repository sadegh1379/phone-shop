import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {detail} = value;
                    return(
                        <div className="row text-center">
                                div.col-10
                        </div>
                    )
                }

                }
            </ProductConsumer>
        )
    }
}
