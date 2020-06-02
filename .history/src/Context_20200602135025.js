import React, { Component } from 'react';
import {storeProducts , DetailProduct} from './data';
import cartList from './component/cart/cartList';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[] ,
             detail : DetailProduct ,
             cart : [] ,
             openModal : false ,
             closeModal : false ,
             cartSub : 0 ,
             counterCart : 0,
             tax : 0


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
        let ltotal = 0 ;
        this.state.cart.map((item)=>{
            ltotal += item.total
        })

        this.setState(()=>{
            return{
                total : ltotal ,
                tax : ltotal * 0.1
            }
        })
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

    // setStorage = (item)=>{
    //     return localStorage.getItem(item)? JSON.parse( localStorage.getItem(item)) : []
    // }

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

        this.setTotal();

    //   console.log( this.setStorage(tempProduct));
    }

    handleRemoveItem = (id)=>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        product.inCart = false;
        product.total = 0 ;

        
        this.setState(()=>{
            return{
                products : tempProduct ,
                cart : this.state.cart.filter((item)=> item.id != id),
                counterCart : this.state.counterCart - 1 
                
            }
        })

        this.setTotal();
    }

    clearCart = ()=>{
        this.setState(()=>{
            return{
                cart : []
            }
        })
    }

    decreament = (id)=>{
            let temp = [...this.state.cart];
            const index = temp.indexOf(this.findProduct(id));
            const product = temp[index];
            if(product.count === 1){
                this.handleRemoveItem(id);
            }else{
                product.count = product.count - 1
                product.total = product.price * product.count ;


                this.setState(()=>{
                   return{
                    cart : temp ,
                    
                   } 
                })
            }
        
    }

    increament = (id)=>{
        let temp = [...this.state.cart];
        const index = temp.indexOf(this.findProduct(id));
        const product = temp[index];
        product.count = product.count + 1
        product.total = product.price * product.count ;

        this.setState(()=>{
           return{
            cart : temp , 
            
           } 
        })
    }
     


    render() {
            
       
        
        return (
            <productContext.Provider value={{
                ...this.state ,
                addToCart : this.addToCart,
                handleDetail : this.handleDetail,
                handleRemoveItem : this.handleRemoveItem,
                decreament : this.decreament,
                increament : this.increament

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

