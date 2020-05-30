import React, { Component } from 'react';
import {storeProducts} from './data';

const productContext = React.createContext();

 class productProvider extends Component {
    render() {
        console.log(storeProducts)
        return (
            <productContext.Provider>
                    {
                        this.props.children
                    }
            </productContext.Provider>
        )
    }
}

const productConsumer = productContext.Consumer;

export { productProvider , productConsumer} ;

