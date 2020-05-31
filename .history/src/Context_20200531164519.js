import React, { Component } from 'react';
import {storeProducts , DetailProduct} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[] ,
             detail : DetailProduct ,
             cart :storeProducts ,
             openModal : false ,
             closeModal : false ,


         }

    // set products in state************************************

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

    // handle Modal************************************

    handleModal = (id)=>{
        let tempProduct = [...this.state.products];
        const index= tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];

        this.setState(()=>{
            return{
                detail:product ,
                openModal : true
            }
        })

    }

    // find product********************************************
    findProduct = (id)=>{
       const product =  this.state.products.find(item => item.id === id);
       return product;
    }

    // add to cart*********************************************
    addToCart = (id)=>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        product.inCart = true;
        const price = product.price ;
        product.total = price ;

        this.setState(()=>{
            return{
                products : tempProduct ,
                cart : [...this.state.cart , product]
            }
        })
    }

    handleRemoveItem = (id)=>{
       console.log("removed item '++")
    }
     


    render() {
            
       
        
        return (
            <productContext.Provider value={{
                ...this.state ,
                addToCart : this.addToCart,
                handleModal : this.handleModal,
                handleRemoveItem : this.handleRemoveItem

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

