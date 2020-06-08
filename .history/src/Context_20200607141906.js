import React, { Component } from 'react';
import {storeProducts , DetailProduct} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[] ,
             detail : DetailProduct ,
             cart : [] ,
             openModal : false ,
             closeModal : false ,
             cartSubTotal : 0 ,
             cartTax : 0 ,
             total : 0 ,
             counterCart : 0,
             loading : false


         }

    // set products in state************************************

     componentDidMount(){
        this.handleset()
    }

    // handle set************************************************
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

    // set total************************************

    setTotal = ()=>{
        let subTotal = 0 ;
        this.state.cart.map((item)=>{
            subTotal += item.total
        })

        const temTax = subTotal * 0.01 ;
        const tax = parseFloat(temTax.toFixed(2))
        const total = tax + subTotal

        this.setState(()=>{
            return{
                total : total ,
                tax : tax ,
                subTotal : subTotal
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

    componentWillUpdate(){
            console.log("sadegh")
    }

    // local Storage*****************************************

    setStorage = (value)=>{
        return localStorage.getItem(value)? JSON.parse( localStorage.getItem(value)) : []
    }

    startSaveInLocalStorage = ()=>{

        const { products , detail , cartSubTotal , cartTax ,  } = this.state;
        products:[] ,
             detail : DetailProduct ,
             cart : [] ,
             openModal : false ,
             closeModal : false ,
             cartSubTotal : 0 ,
             cartTax : 0 ,
             total : 0 ,
             counterCart : 0,
             loading : false

            window.localStorage.setItem("products" , JSON.stringify())
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
        },()=>{
            this.setTotal();
        }
        )

    }


    // remove item cart*****************************************

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
        } , ()=> this.setTotal())

       
    }

    // clear cart*******************************************

    clearCart = ()=>{
        let q = window.confirm("آیا میخواهید کل لیست را حذف کنید ؟");
        
        if(q == true){
            let temproduct = [...this.state.products];
             temproduct.map(item=>{
            item.inCart = false
        });
       
            this.setState(()=>{
                return{
                    products : temproduct,
                    cart : [] ,
                    counterCart : 0
                }
            } , ()=>this.setTotal());
        }
        
    }

    // decreament**********************************************

    decreament = (id)=>{
            let temp = [...this.state.cart];
            const index = temp.indexOf(this.findProduct(id));
            const product = temp[index];
            if(product.count === 1){
                let q = window.confirm('آیا میخواهید این کالا را حذف کنید');
                if(q==true){
                    this.handleRemoveItem(id)
                }else{
                    return;
                }
                
            }else{
                product.count = product.count - 1
                product.total = product.price * product.count ;


                this.setState(()=>{
                   return{
                    cart : temp ,
                    
                   } 
                 } , ()=>this.setTotal())
            }
        
    }

    // increament**********************************************

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
        } , ()=>this.setTotal())
    }
     


    render() {
            
       
        
        return (
            <productContext.Provider value={{
                                    ...this.state ,
                                    addToCart : this.addToCart,
                                    handleDetail : this.handleDetail,
                                    handleRemoveItem : this.handleRemoveItem,
                                    decreament : this.decreament,
                                    increament : this.increament,
                                    clearCart : this.clearCart,
                                    openLoading : this.openLoading,
                                    

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

