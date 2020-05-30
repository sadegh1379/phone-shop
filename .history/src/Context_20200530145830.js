import React, { Component } from 'react';
import {storeProducts} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[] ,
             detail : [] ,

         }
    componentDidMount(){
        this.handleset()
    }
    handleset = () =>{
        tempProducts = []
    
        products.forEach(item => 
            const singleItem = {...item}
            
            )
    }
     
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

