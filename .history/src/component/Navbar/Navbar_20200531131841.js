import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-primary  navbar-dark ">
                     <a href="/" className="navbar-brand mr-0 " alt="a"><h6><span className="fa mmb-3 pl-2 fa-2x fa-mobile text-light "></span>موبایل شاپ </h6></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mr-0">
                           <Link to="/" className="nav-link"><span className="fa fa-shopping-bag px-1"></span>فروشگاه </Link>
        
                        </li>
                    </ul>
                    <button  className="btn btn-outline-dark px-3  ">
                        <Link to="/cartlist">
                         <span className="text-white"> 
                            <i className="fa text-light fa-shopping-basket mr-1"></i> 
                            {/* <span className="mx-1 ">سبد خرید</span> */}
                        </span>
                        </Link>
                       
                    </button>
                    </nav>
        </React.Fragment>
    )
}


export default Navbar;
