import React from 'react'

 function Navbar() {
    return (
        <React.Fragment>
                    <nav className="navbar  bg-primary navbar-expand-sm navbar-dark px-sm-1">
                     <a href="/" className="navbar-brand" alt="a"><h5>موبایل شاپ</h5></a>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                           <a href="/" className="nav-link">فروشگاه</a>
        
                        </li>
                        <li className="nav-item ml-5"></li>
                    </ul>
                    </nav>
        </React.Fragment>
    )
}

export default Navbar;
