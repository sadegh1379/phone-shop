import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import {Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import addCama from './static/AddCama'

export default class Detail extends Component {

    state={
        name : '',
        text :'',
        open : false
    }

    handleOpen = ()=>{
        this.setState({
            open : !this.state.open
        })

        
    }


    handleChangeName = (e)=>{
        this.setState({
                name : e.target.value
            }
        )
    }
    handleChangeText = (e)=>{
        this.setState(
            {
                text : e.target.value
            }
        )
    }

    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id , title , img , price , company ,color_e , color_p  , comments, info , inCart } = value.detail;
                    const {addToCart  , addComment , changeColor} = value;
                    return(
                        <>
                        <div className="row text-center d-flex   my-0 py-1 " >
                               
                                <div className="col-lg-6 text-right col-md-6 my-md-3 justify-content-between align-items-center my-sm-3  col-sm-10 py-4 px-5">
                                        <h3 className="text-dark text-center wow bounceInRight" data-wow-dely="3s" data-wow-duration="2s">{title}</h3><hr className="text-light  my-4"/>

                                        <h6 data-wow-dely="3s" data-wow-duration="2s" className="wow bounceInRight">
                                                <span className="text-muted "> قیمت : </span><span className="text-danger cost float-left">{console.log(addCama(price)} تومان</span>
                                        </h6>

                                        <h6 className="my-3" data-wow-dely="3s" data-wow-duration="2s" className="wow bounceInRight">
                                        <span className="text-muted"> شرکت سازنده : </span><span className=" float-left h5">{company} </span>
                                        </h6> 

                                        <h6 className="wow bounceInRight"  data-wow-dely="3s" data-wow-duration="2s">
                                        <span className="text-muted">  رنگ : 
                                        </span>
                                             <span className=" float-left floatspan">
                                        
                                                <span className="badge " style={{ backgroundColor: color_e , color: color_e}}>C</span>
                                                {color_p} 
                                        
                                            </span>
                                        </h6> 
                                        <h6 className="wow bounceInRight mt-2"  data-wow-dely="3s" data-wow-duration="2s">

                                        <span className="text-muted">  رنگ بندی : 
                                        </span>
                                             <span className=" float-left floatspan  ml-2">
                                                <span onClick={()=>changeColor(id , 'red')} className="btn " style={{ backgroundColor: 'red' , color: 'red'}}>C</span>
                                                <span onClick={()=>changeColor(id , 'gold')} className="btn  mx-3" style={{ backgroundColor: 'gold' , color: 'gold'}}>C</span>
                                                <span onClick={()=>changeColor(id , 'black')} className="btn " style={{ backgroundColor: 'black' , color: 'black'}}>C</span>

                                            </span>
                                        </h6> 


                                        <h6 data-wow-dely="1s" data-wow-duration="2s" className="wow bounceInUp">
                                        <span className="text-muted">  خصوصیات : </span><span className=" float-left my-3">{info} </span>
                                        </h6> 

                                        

                                        <div className=" text-center my-4">
                                           
                                            <button disabled={inCart?true : false}
                                            
                                            onClick={()=>addToCart(id)}
                                            className="btn float-right btn-outline-info flat">
                                                    {inCart?    (<div>
                                                                  <span className="fa fa-shopping-basket"></span><span>در سبد وجود دارد</span>
                                                                </div>)
                                                         : '  افزودن به سبد  '
                                                        
                                                }
                                            </button>
                                            <Link to="/" className="btn btn-outline-success float-left">
                                                بازگشت <span className="fa fa-arrow-left"></span>
                                            </Link>

                                        </div>
                                        
                                        
                                </div>
                                
                                <div className="col-lg-6 col-sm-10 col-md-6 p-4 mx-auto">
                                    <Zoom >
                                    <picture>
                                        {/* <source media="(max-width: 800px)" srcSet="/path/to/teAraiPoint.jpg" /> */}
                                    <img style={{width:'80%' }} src={img} alt={title}/>
                                    </picture>
                                    </Zoom>
                                    <figure>
                                    <figcaption className="text-muted">برای دیدن کلیک کنید</figcaption>
                                    </figure>
                                </div>
                        </div>
                        <div className="row  p-3 mx-auto text-center">
                     
                                            
                                                <ul className="list-group comments-ul list-group-flush py-3 list-unstyled cost transition " style={{width:'100%'}}>
                                                <h6 className="text-muted "
                                                 onClick={this.handleOpen}
                                                 style={{cursor:'pointer'}}
                                                 >نظر کاربران <span
                                               
                                                className={`fa  fa-chevron-circle-${this.state.open ? 'up' : 'down'}   `} style={{cursor:'pointer'}}></span></h6>
                                                
                                                { 
                                                    comments && this.state.open   ? comments.map((com , index)=>{
                                                        return <li key={index} className="list-group-item list-group-item-dark py-3  comments  px-1 text-right"
                                                        
                                                        >
                                                                    <h6 className="float-right  badge badge-warning">{com.name}</h6><br/>
                                                                    <p className="float-center text-muted">{com.text}</p>
                                                            </li>
                                                    }) : null

                                                    
                                                }
                                                <li>
                                                <form 
                                                onSubmit={(e)=>{
                                                    e.preventDefault()
                                                    const {name , text} = this.state;
                                                    if(name === '' || text === ''){
                                                        alert('لطفا هر دو فیلد را پر کنید')
                                                    
                                                    }else{
                                                       
                                                        addComment(name , text , id);
                                                        this.state.name = ''
                                                        this.state.text = ''
                                                    }
                                                   
                                                }}>
                                                        <div className="row mt-3 px-2 mx-auto">
                                                            <div className="col">
                                                            <input type="text"  className="form-control form-control-sm" placeholder=" نام"
                                                            value={this.state.name}
                                                            name="name"
                                                            onChange={(e)=>this.handleChangeName(e)}
                                                            />
                                                            </div>
                                                            <div className="col">
                                                            <input type="text" className="form-control form-control-sm" placeholder="نظر شما"
                                                            value={this.state.text}
                                                            name="text"
                                                            onChange={(e)=>this.handleChangeText(e)}
                                                            />
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn  btn-dark btn-block mt-4">افزودن نظر</button>
                                                </form>
                                                   
                                                </li>
                                                </ul>
                                           
                                            
                                        
                            
                        </div>
                    </>
                    )
                }

                }
            </ProductConsumer>
        )
    }
}
