import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-primary navbar-expand-sm navbar-dark d-flex">
                     <a href="/" className="navbar-brand mr-0" alt="a"><h6>موبایل شاپ </h6></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mr-5">
                           <Link to="/" className="nav-link">فروشگاه</Link>
        
                        </li>
                    </ul>
                    <button  className="btn btn-outline-primary px-3 text-light justify-content-end">
                        <Link to="/cartlist">
                         <span> 
                            <i className="fa text-light fa-shopping-cart mr-1"></i>
                            
                        </span>
                        </Link>
                       
                    </button>
                    </nav>
        </React.Fragment>
    )
}


export default Navbar;
