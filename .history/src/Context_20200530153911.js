import React, { Component } from 'react';
import {storeProducts} from './data';

const productContext = React.createContext();

 class ProductProvider extends Component {
     
         state ={
             products:[
                {
                    id : 1 ,
                    title : 'sumsong- 10',
                    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad dolores dolor excepturi! Maxime, incidunt. Corporis id rerum optio cupiditate incidunt non. Fugit saepe id alias, reiciendis vitae veniam consequatur"
                    ,inCart : false ,
                    img : 'img/mobile-1.png',
                    count : 0 ,
                    total : 10
            
                },
                {
                    id : 2 ,
                    title : 'housaw - 10',
                    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad dolores dolor excepturi! Maxime, incidunt. Corporis id rerum optio cupiditate incidunt non. Fugit saepe id alias, reiciendis vitae veniam consequatur"
                    ,inCart : false ,
                    img : 'img/mobile-2.png',
                    count : 0 ,
                    total : 10
            
                },
                {
                    id : 3 ,
                    title : 'xiomi',
                    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad dolores dolor excepturi! Maxime, incidunt. Corporis id rerum optio cupiditate incidunt non. Fugit saepe id alias, reiciendis vitae veniam consequatur"
                    ,inCart : false ,
                    img : 'img/mobile-3.png',
                    count : 0 ,
                    total : 10
            
                },
                {
                    id : 4 ,
                    title : 'song - 10',
                    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad dolores dolor excepturi! Maxime, incidunt. Corporis id rerum optio cupiditate incidunt non. Fugit saepe id alias, reiciendis vitae veniam consequatur"
                    ,inCart : false ,
                    img : 'img/mobile-4.png',
                    count : 0 ,
                    total : 10
            
                }, {
                    id : 5 ,
                    title : 'nokia',
                    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad dolores dolor excepturi! Maxime, incidunt. Corporis id rerum optio cupiditate incidunt non. Fugit saepe id alias, reiciendis vitae veniam consequatur"
                    ,inCart : false ,
                    count : 0 ,
                    img : 'img/mobile-5.png',
                    total : 10
            
                },
                {
                    id : 5 ,
                    title : 'honor',
                    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad dolores dolor excepturi! Maxime, incidunt. Corporis id rerum optio cupiditate incidunt non. Fugit saepe id alias, reiciendis vitae veniam consequatur"
                    ,inCart : false ,
                    count : 0 ,
                    img : 'img/mobile-6.png',
                    total : 10
            
                }
            ] ,
             detail : [] ,

         }
    //  componentDidMount(){
    //     this.handleset()
    // }

    // handleset =  () =>{
    //    let tempProducts = []
    
    //     storeProducts.forEach(item => {
    //         const singleItem = {...item};
    //         tempProducts = [...tempProducts , singleItem];
    //     }
    //      )

    //      this.setState(()=>{
    //          return{
    //              products : tempProducts
    //          }
    //      })

         
    // }
     
    render() {

       
        
        return (
            <productContext.Provider value={{
                ...this.state 
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

