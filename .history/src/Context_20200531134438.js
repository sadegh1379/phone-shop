import React, { Component } from 'react';
import {storeProducts , DetailProduct} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[] ,
             detail : DetailProduct ,
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

    findProduct = (id)=>{
       const product =  this.state.products.find(item => item.id === id)
       return product;
    }

    addToCart = (id)=>{
        console.log("added to cart")
    }
     
    render() {

       
        
        return (
            <productContext.Provider value={{
                ...this.state ,
                addToCart : this.addToCart

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

