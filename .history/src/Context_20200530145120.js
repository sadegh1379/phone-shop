import React, { Component } from 'react';
import {storeProducts} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     constructor
    render() {
        console.log(storeProducts);
        return (
            <productContext.Provider>
                    {
                        this.props.children
                    }
            </productContext.Provider>
        )
    }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider , ProductConsumer} ;

