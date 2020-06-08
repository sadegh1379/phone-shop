import React, { useState , useEffect } from 'react';
import {storeProducts , DetailProduct} from './data';

const productContext = React.createContext();

 function ProductProvider() {
    
     const [products , setProducts] = useState([]) ;
     const [detail , setDetail] = useState([]);
     const [cart , setCart] = useState([]);
     const [cartSubTotal , setCartSubTotal] = useState(0);
     const [cartTax , setCartTax] = useState(0);
     const [total , setCartTotal] = useState(0);
     const [counterCart , setCounterCart] = useState(0)

        
        

    // set products in state************************************

    //  useEffect(()=>{
    //         // this.startSaveInLocalStorage();
    //         this.handleset()
    //         window.localStorage.setItem("products" , JSON.stringify(storeProducts));

    //  })
        
        
        
    
    
    //  componentWillUpdate(){
    //         this.startSaveInLocalStorage();
    // }

      // local Storage*****************************************

     const setStorage =(value)=>{
        return window.localStorage.getItem(value) ? JSON.parse(window.localStorage.getItem(value)):[];

        }

        const startSaveInLocalStorage = ()=>{

        const { products , detail , cartSubTotal , cartTax , total ,counterCart , cart } = this.state;
            
            window.localStorage.setItem("products" , JSON.stringify(products));
            window.localStorage.setItem("cart" , JSON.stringify(cart));
            window.localStorage.setItem("cartSubTotal" , JSON.stringify(cartSubTotal));
            window.localStorage.setItem("cartTax" , JSON.stringify(cartTax));
            window.localStorage.setItem("total" , JSON.stringify(total));
            window.localStorage.setItem("counterCart" , JSON.stringify(counterCart));
            


    }


    // handle set************************************************
    const handleset =  () =>{
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

    const setTotal = ()=>{
        let subTotal = 0 ;
        cart.map((item)=>{
            subTotal += Number(item.total)
        })

        const temTax = subTotal * 0.01 ;
        const tax = parseFloat(temTax.toFixed(2))
        const total = tax + subTotal

        setCartTotal(total);
        setCartTax(tax);
        setCartSubTotal(subTotal)
                
    }

    

    // handle Modal************************************

    const handleDetail = (id)=>{
        let tempProduct = [...products];
        const index= tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];

        setDetail(product);
    }

   

  
    // find product********************************************

    const findProduct = (id)=>{
       const product =  products.find(item => item.id === id);
       return product;
    }

    // add to cart*********************************************

    const addToCart = (id)=>{
        let tempProduct = [...products];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price ;
        product.total = price ;
        

         setProducts(tempProduct);
         setCart(product);
         setCounterCart(ps=>ps+1)
          setTotal();
        
        

    }


    // remove item cart*****************************************

    const handleRemoveItem = (id)=>{
        let tempProduct = [products];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        product.inCart = false;
        product.total = 0 ;

        setProducts(tempProduct);
        setCart(()=>{
            return cart.filter((item)=> item.id != id)
        })

        setCounterCart(ps => ps -)
        
        
                products : tempProduct ,
                cart : this.state.cart.filter((item)=> item.id != id),
                counterCart : this.state.counterCart - 1 
                
            
         ()=> setTotal()

       
    }

    // clear cart*******************************************

    const clearCart = ()=>{
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

    const decreament = (id)=>{
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

    const increament = (id)=>{
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


const ProductConsumer = productContext.Consumer;

export { ProductProvider , ProductConsumer} ;

