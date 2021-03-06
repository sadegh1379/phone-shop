import React, { Component } from 'react';
import {storeProducts , DetailProductr} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[] ,
             detail : [] ,
             cart :[] ,
             openModal : false ,
             closeModal : false ,


         }
     componentDidMount(){
        this.handleset()
    }

    handleset =  () =>{
       let tempProducts = []
    
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts , singleItem];
        }
         )

         this.setState(()=>{
             return{
                 products : tempProducts
             }
         })

         
    }
     
    render() {

       
        
        return (
            <productContext.Provider value={{
                ...this.state ,
            }}>
                    {
                        this.props.children
                    }
            </productContext.Provider>
        )
    }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider , ProductConsumer} ;

