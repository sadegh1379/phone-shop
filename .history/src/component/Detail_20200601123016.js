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
                                <div className="col-6 col-sm-10">

                                </div>
                                <div className="col-6 col-sm-10">
                                    
                                </div>
                        </div>
                    )
                }

                }
            </ProductConsumer>
        )
    }
}
