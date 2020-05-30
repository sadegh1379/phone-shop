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
       let tempProducts = []
    
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts , singleItem];
        }
         )

         
    }
     
    render() {

        const exported = {
                products  : this.state.products,
                
        }
        
        return (
            <productContext.Provider value={
                this.state.products ,
                this.state.detail

            }>
                    {
                        this.props.children
                    }
            </productContext.Provider>
        )
    }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider , ProductConsumer} ;

