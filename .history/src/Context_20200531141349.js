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

    handleModal = ()=>{
        let tempProduct = [...this.state.products];
        const index= tempProducts.indexOf(this.findProduct(id));
        const pro
    }

    findProduct = (id)=>{
       const product =  this.state.products.find(item => item.id === id);
       return product;
    }

    addToCart = (id)=>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        console.log(product)
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

