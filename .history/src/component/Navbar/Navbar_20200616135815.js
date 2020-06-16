import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { ProductConsumer } from '../../Context';
 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-danger  navbar-light">
                     <a href="/" className="navbar-brand mr-0 " alt="a"><h6><span className="fa pl-2 fa-2x fa-user text-light "></span>  </h6></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mr-0">
                           <Link to="/" className="nav-link"><span className="fa fa-shopping-bag px-1"></span>فروشگاه </Link>
        
                        </li>
                    </ul>
                    
                        <Link className="btn btn-dark   " to="/cartlist">
                         <span className="text-white text-center"> 
                            <span className="badge badge-light bg-light ">
                                    <ProductConsumer>
                                        {value=>{
                                            return(
                                            value.counterCart? <b>{value.counterCart }</b> : null
                                            )
                                        }

                                        }
                                    </ProductConsumer>
                            </span>
                            <i className="fa text-light fa-shopping-basket py-0 px-4"></i> 
                            
                            {/* <span className="mx-1 ">سبد خرید</span> */}
                        </span>
                        </Link>
                       
                    
                    </nav>
        </React.Fragment>
    )
}


export default Navbar;
