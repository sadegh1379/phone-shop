import React, { Component } from 'react';
import {storeProducts , DetailProduct} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[] ,
             detail : DetailProduct ,
             cart : storeProducts ,
             openModal : false ,
             closeModal : false ,
             total : 0 ,
             counterCart : 0


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

    setTotal = ()=>{
        
    }

    // handle Modal************************************

    handleDetail = (id)=>{
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

    // local Storage*****************************************

    setStorage = (item)=>{
        return localStorage.getItem(item)? JSON.parse( localStorage.getItem(item)) : []
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
        product.count = 1;
        const price = product.price ;
        product.total = price ;


        this.setState(()=>{
            return{
                products : tempProduct ,
                cart : [...this.state.cart , product] ,
                counterCart : this.state.counterCart + 1
            }
        })

    //   console.log( this.setStorage(tempProduct));
    }

    handleRemoveItem = (id)=>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        product.inCart = false;
        const price = product.price ;
        product.total = price ;

        this.setState(()=>{
            return{
                products : tempProduct ,
                cart : this.state.cart.filter((item)=> item.id != id)
                
            }
        })
    }
     


    render() {
            
       
        
        return (
            <productContext.Provider value={{
                ...this.state ,
                addToCart : this.addToCart,
                handleDetail : this.handleDetail,
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

