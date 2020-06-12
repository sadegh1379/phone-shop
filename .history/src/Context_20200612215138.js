import React, { Component } from 'react';
import {storeProducts , DetailProduct} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
    
     

         state ={
             products: [] ,
             detail : DetailProduct ,
             cart : [] ,
             openModal : false ,
             closeModal : false ,
             cartSubTotal : 0 ,
             cartTax : 0 ,
             total : 0 ,
             counterCart :0,
             loading : false


         }

    // set products in state************************************

     componentDidMount(){
        // this.startSaveInLocalStorage();
        this.handleset()
        window.localStorage.setItem("products" , JSON.stringify(storeProducts));

        
        
    }
    
     componentWillUpdate(){
            this.startSaveInLocalStorage();
    }

      // local Storage*****************************************

      setStorage(value){
        return window.localStorage.getItem(value) ? JSON.parse(window.localStorage.getItem(value)):[];

        }

    startSaveInLocalStorage = ()=>{

        const { products , detail , cartSubTotal , cartTax , total ,counterCart , cart } = this.state;
            
            window.localStorage.setItem("products" , JSON.stringify(products));
            window.localStorage.setItem("cart" , JSON.stringify(cart));
            window.localStorage.setItem("cartSubTotal" , JSON.stringify(cartSubTotal));
            window.localStorage.setItem("cartTax" , JSON.stringify(cartTax));
            window.localStorage.setItem("total" , JSON.stringify(total));
            window.localStorage.setItem("counterCart" , JSON.stringify(counterCart));
            


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
            subTotal += Number(item.total)
        })

        const temTax = subTotal * 0.01) ;
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
                counterCart : Number(this.state.counterCart) + 1
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

    // add comments 

    addComment = (name , comment , id)=>{
       
    
            let tempProduct = [...this.state.products];
            const index = tempProduct.indexOf(this.findProduct(id));
            const product = tempProduct[index];
            let newComment = {
                name : name ,
                text : comment
            }
      
    
            product.comments = [...product.comments , newComment]
    
            this.setState(()=>{
                return{
                    products : tempProduct
                }
            })
        
        
        

    }


    // change Phone Color Price 

    changeColor = (id , color) =>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];

        switch (color) {
            case 'red':
                product.price = product.red_price;
                product.color_p = 'قرمز';
                product.color_e = color;
                break;
            case 'gold':
                product.price =  product.gold_price;
                product.color_p = 'طلایی';
                product.color_e = color;
                break;
            case 'black':
                product.price = product.black_price ;
                product.color_p = 'مشکی';
                product.color_e = color;
                break;
            default :
                alert("رنگ مورد نظر موجود نیست");
                
                break;
        }

        this.setState(()=>{
            return{
                products : tempProduct
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
                                    increament : this.increament,
                                    clearCart : this.clearCart,
                                    openLoading : this.openLoading,
                                    addComment : this.addComment,
                                    changeColor : this.changeColor

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

