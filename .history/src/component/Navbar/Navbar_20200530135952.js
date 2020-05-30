import React from 'react';
import {Link} from 'react-router-dom'
import st
 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-primary navbar-expand-sm navbar-dark ">
                     <a href="/" className="navbar-brand mr-0" alt="a"><h6>موبایل شاپ </h6></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mr-0">
                           <Link to="/products" className="nav-link">فروشگاه</Link>
        
                        </li>
                    </ul>
                    <Link className="ml-0">
                            <h6>سبد شما <span className="fa fa-shopping-cart"></span></h6>
                    </Link>
                    </nav>
        </React.Fragment>
    )
}

export default Navbar;
