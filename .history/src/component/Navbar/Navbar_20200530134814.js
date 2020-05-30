import React from 'react'

 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-primary navbar-expand-sm navbar-dark ">
                     <a href="/" className="navbar-brand mr-0" alt="a"><h6><span className="fa fa-"></span>موبایل شاپ </h6></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-1">
                           <a href="/" className="nav-link">فروشگاه</a>
        
                        </li>
                    </ul>
                    </nav>
        </React.Fragment>
    )
}

export default Navbar;
