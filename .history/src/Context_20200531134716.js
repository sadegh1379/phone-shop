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
       const product =  this.state.products.find(item => item.id === id);
       console.log(product);
       return product;
    }

    addToCart = (id)=>{
        let temp = this.findProduct(id)
         const product
    }
     
    render() {
            this.findProduct();
       
        
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

