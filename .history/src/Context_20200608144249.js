import React, { useState , useEffect , useCallback } from 'react';
import {storeProducts , DetailProduct} from './data';

const productContext = React.createContext();

 function ProductProvider(props) {
    
     const [products , setProducts] = useState([]) ;
     const [detail , setDetail] = useState([]);
     const [cart , setCart] = useState([]);
     const [cartSubTotal , setCartSubTotal] = useState(0);
     const [cartTax , setCartTax] = useState(0);
     const [total , setCartTotal] = useState(0);
     const [counterCart , setCounterCart] = useState(0)

        
        

    // set products in state************************************

     useEffect(()=>{
            // this.startSaveInLocalStorage();
            handleset()
            // window.localStorage.setItem("products" , JSON.stringify(storeProducts));
           

     } , [])
     useCallback(
         () => {
             set
         },
         [input],
     )
        
    
        
    
    
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

        setProducts(tempProducts);

         
    }

    // set total************************************

    const setTotal = ()=>{
        let subtotal = 0 ;
        cart.map((item)=>{
            subtotal += Number(item.total)
        })

        const temTax = subtotal * 0.01 ;
        const tax = parseFloat(temTax.toFixed(2))
        const total = tax + subtotal

        setCartTotal(total);
        setCartTax(tax);
        setCartSubTotal(subtotal)
                
    }

    

    // handle Modal************************************

    const handleDetail = (id)=>{
        let tempProduct = [...products];
        const index= tempProduct.indexOf(findProduct(id));
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
        const index = tempProduct.indexOf(findProduct(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price ;
        product.total = price ;
        

         setProducts(tempProduct);
         setCart([...cart , product]);
         setCounterCart(ps=>ps+1);
        
        
        

    }


    // remove item cart*****************************************

    const handleRemoveItem = (id)=>{
        let tempProduct = [products];
        const index = tempProduct.indexOf(findProduct(id));
        const product = tempProduct[index];
        product.inCart = false;
        product.total = 0 ;

        setProducts(tempProduct);
        setCart(()=>{
            return cart.filter((item)=> item.id != id)
        })

        setCounterCart(ps => ps - 1)
      
        setTotal()

       
    }

    // clear cart*******************************************

    const clearCart = ()=>{
        let q = window.confirm("آیا میخواهید کل لیست را حذف کنید ؟");
        
        if(q == true){
            let temproduct = [products];
             temproduct.map(item=>{
            item.inCart = false
        });
       
         setProducts(temproduct);
         setCart([]);
         setCounterCart(0);
         setTotal()

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
        let temp = [...cart];
        const index = temp.indexOf(this.findProduct(id));
        const product = temp[index];
        product.count = product.count + 1
        product.total = product.price * product.count ;

       
         setCart(temp); 
            
          setTotal()
    }
       
        
        return (
            <productContext.Provider value={{
                                    products : products ,
                                    cart : cart ,
                                    detail : detail ,
                                    counterCart : counterCart ,
                                    cartSubTotal : cartSubTotal,
                                    cartTax : cartTax ,
                                    total : total,
                                    addToCart : addToCart,
                                    handleDetail : handleDetail,
                                    handleRemoveItem : handleRemoveItem,
                                    decreament : decreament,
                                    increament : increament,
                                    clearCart : clearCart,
                                    
                                    

                                }}>
                                                            {
                                                                props.children
                                                            }
            </productContext.Provider>
        )
    }


const ProductConsumer = productContext.Consumer;

export { ProductProvider , ProductConsumer} ;

